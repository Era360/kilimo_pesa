import { doc, setDoc } from "firebase/firestore";
import { connectFunctionsEmulator, httpsCallable } from "firebase/functions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, functions } from "../../firebase";

function SignUp() {
  const [creating, setcreating] = useState(false);
  const [success, setsuccess] = useState(false);
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    // console.log(data.get("name"));
    // console.log(data.get("email"));
    // console.log(data.get("password"));
    // console.log(data.get("password_confirmation"));
    // console.log(data.get("role"));
    // e.target.reset();

    if (!data.get("mobile_number").includes("+255")) {
      seterror("Mobile number format not supported");
      return;
    } else {
      seterror("");
    }
    connectFunctionsEmulator(functions, "localhost", 5001);
    const createUser = httpsCallable(functions, "createUser");
    setcreating(true);
    createUser({
      email: data.get("email"),
      password: data.get("password"),
      mobile_number: data.get("mobile_number"),
    })
      .then(async ({ data: user }) => {
        let userData = {
          name: data.get("name"),
          role: data.get("rolee"),
          mobile_number: data.get("mobile_number"),
        };
        await setDoc(doc(db, "users", user.uid), userData);
        setcreating(false);
        setsuccess(!success);
      })
      .then(() => navigate("/"))
      .catch((err) => {
        setcreating(false);
        seterror(err.message);
      });
  }

  return (
    <>
      <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="
              relative
              mx-auto
              max-w-[525px]
              overflow-hidden
              rounded-lg
              bg-white
              py-16
              px-10
              text-center
              sm:px-12
              md:px-[60px]
            "
              >
                <div className="mb-10 text-center md:mb-16">
                  <div className="flex items-center justify-center">
                    <i className="fa-regular fa-cart-shopping text-3xl"></i>
                    <span className="ml-3 font-bold">Kilimo Pesa</span>
                  </div>
                </div>
                {/* <div className="mb-10">
                  <button
                    type="submit"
                    className="
                    w-full
                    px-4
                    py-3
                    bg-red
                    hover:bg-indigo-700
                    rounded-md
                    text-white
                  "
                  >
                    <i className="fa-brands fa-google"></i>
                    <span className="ml-2">Use Google Account</span>
                  </button>
                </div> */}
                {error && (
                  <div className="flex items-center text-red text-lg w-fit mx-auto mb-2">
                    <i className="fa-solid fa-triangle-exclamation mr-3"></i>
                    <span>{error}</span>
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      name="name"
                      className="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      name="email"
                      className="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      name="password"
                      className="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="password"
                      placeholder="Password Confirmation"
                      required
                      name="password_confirmation"
                      className="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="tel"
                      placeholder="Mobile number: +255...."
                      name="mobile_number"
                      required
                      className="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                    />
                  </div>

                  <div className="flex items-center mb-4">
                    <input
                      id="role"
                      defaultChecked
                      type="radio"
                      value="farmer"
                      name="rolee"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-radio-1"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Farmer
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      id="rolee"
                      type="radio"
                      value="buyer"
                      name="role"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Buyer
                    </label>
                  </div>

                  <div className="mb-10">
                    <button
                      disabled={creating}
                      type="submit"
                      className={` ${
                        creating && "bg-opacity-50"
                      } w-full px-4 py-3 bg-Emerald-500 rounded-md text-white`}
                    >
                      Register
                    </button>
                  </div>
                </form>
                <p
                  className="text-base px-4
                    py-3 border"
                >
                  <a href="/login" className="hover:underline">
                    Sign In
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
