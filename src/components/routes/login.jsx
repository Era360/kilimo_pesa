import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
  const navigate = useNavigate();
  const [Error, setError] = useState("");
  const [Loading, setLoading] = useState(false);

  // const handleClickShowPassword = () => {
  //   setShowPassword(!showPassword)
  // }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get("email"));
    console.log(data.get("password"));
    e.target.reset();
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        setLoading(true);
        return signInWithEmailAndPassword(
          auth,
          data.get("email"),
          data.get("password")
        );
      })
      .then(() => navigate("/"))
      .catch((error) => {
        // Handle Errors here.
        setLoading(false);
        const error_message = error.message;
        if (error_message.includes("user-not-found")) {
          setError("User unknown");
        } else if (
          error_message.includes("invalid-email") ||
          error_message.includes("wrong-password")
        ) {
          setError("Wrong password or email");
        } else if (error_message.includes("network")) {
          setError("Connect to the internet to login.");
        } else if (error_message.includes("user-disabled")) {
          setError("Sorry, You are not allowed to login.");
        } else {
          setError(error_message);
        }
      });
    setLoading(false);
  }

  return (
    <>
      <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
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
                {Error && (
                  <div className="flex items-center text-red text-lg w-fit mx-auto mb-2">
                    <i className="fa-solid fa-triangle-exclamation mr-3"></i>
                    <span>{Error}</span>
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="
                    border-[#E9EDF4]
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
                      name="password"
                      placeholder="Password"
                      className="
                    border-[#E9EDF4]
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
                    {/* <div v-if="authStore.errors.password" className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        password error
                      </span>
                    </div> */}
                  </div>

                  <div className="mb-10">
                    <button
                      disabled={Loading}
                      type="submit"
                      className={` ${
                        Loading && "bg-opacity-50"
                      } w-full px-4 py-3 bg-Emerald-500 rounded-md text-white`}
                    >
                      Login
                    </button>
                  </div>
                </form>
                {/* <p
                  // to="/forgot-password"
                  className="
                mb-2
                inline-block
                text-base
                hover:text-primary hover:underline
              "
                >
                  Forgot Password?
                </p> */}
                <p className="text-base ">
                  Not a member yet?
                  <span
                    // onClick={() => navigate("/signup")}
                    className="ml-2 cursor-pointer line-through "
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
