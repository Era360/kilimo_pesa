// import { https } from "firebase-functions";
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const credentials = {
  apiKey: "ecfe87742f584f7545d975527f7a00d7685076f0e6c92ba45829ee66d05dc0d2",
  username: "kilimo_pesa",
};

// Initialize the SDK
const AfricasTalking = require("africastalking")(credentials);

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.airtime = functions.https.onCall((data) => {
  // Get the SMS service

  const airtime = AfricasTalking.AIRTIME;
  console.log(data["mobile_number"]);

  const options = {
    recipients: [{
      phoneNumber: `${data["mobile_number"]}`,
      currencyCode: "TZS",
      amount: 50,
    }],
  };

  airtime.send(options)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
});


exports.createUser = functions.https.onCall((data) => {
  // Get the SMS service
  const sms = AfricasTalking.SMS;

  // eslint-disable-next-line require-jsdoc
  function sendMessage() {
    const options = {
      // Set the numbers you want to send to in international format
      to: `${data["mobile_number"]}`,
      // Set your message
      // eslint-disable-next-line max-len
      message: "Karibu sana Kilimo Pesa, Sasa unaweza kuuza na kununua mazao kirahisi",
      // Set your shortCode or senderId
      //   from: "Kilimo Pesa",
    };

    // That’s it, hit send and we’ll take care of the rest
    sms.send(options)
        .then(console.log)
        .catch(console.log);
  }

  sendMessage();
  return admin
      .auth()
      .createUser(data)
      .catch((error) => {
        throw new functions.https.HttpsError("internal", error.message);
      });
});

exports.deleteUser = functions.https.onCall((data) => {
  return admin
      .auth()
      .deleteUser(data.userUid)
      .catch((error) => {
        throw new functions.https.HttpsError("internal", error.message);
      });
});

