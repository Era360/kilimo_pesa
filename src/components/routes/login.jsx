function Login() {
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
                <div className="mb-10 text-center md:mb-16">Laraveller</div>
                <form>
                  <div className="mb-6">
                    <input
                      type="email"
                      v-model="form.email"
                      placeholder="Email"
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
                    <div v-if="authStore.errors.email" className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        error
                      </span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <input
                      type="password"
                      // v-model="form.password"
                      placeholder="Password"
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
                    <div v-if="authStore.errors.password" className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        password error
                      </span>
                    </div>
                  </div>
                  <div className="mb-10">
                    <button
                      type="submit"
                      className="
                    w-full
                    px-4
                    py-3
                    bg-indigo-500
                    hover:bg-indigo-700
                    rounded-md
                    text-white
                  "
                    >
                      Login
                    </button>
                  </div>
                </form>
                <p
                  // to="/forgot-password"
                  className="
                mb-2
                inline-block
                text-base text-[#adadad]
                hover:text-primary hover:underline
              "
                >
                  Forgot Password?
                </p>
                <p className="text-base text-[#adadad]">
                  Not a member yet?
                  <p
                    // to="/register"
                    className="text-primary hover:underline"
                  >
                    Sign Up
                  </p>
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
