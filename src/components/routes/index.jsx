import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useRequireAuth } from "../utils/hooks";

function HomePage() {
  const [products, setproducts] = useState([]);
  const [recent, setrecent] = useState([]);
  const [logout_menu, setlogout_menu] = useState(false);
  // const navigate = useNavigate();
  const auth = useRequireAuth("/login");
  const the_auth = getAuth();

  useEffect(() => {
    if (products.length === 0) {
      setrecent([
        {
          id: 1,
          name: "Mchele",
          href: "#",
          price: "1 KG 2000 tshs",
          imageSrc:
            "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1100&q=60",
          imageAlt:
            "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
        },
        {
          id: 2,
          name: "Nyanya",
          href: "#",
          price: "@200 tshs",
          imageSrc:
            "https://images.unsplash.com/photo-1509963906410-fceef97f22f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw3ODE2Njg4MHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1100&q=60",
          imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
        {
          id: 3,
          name: "Strawberry",
          href: "#",
          price: "@1000 tshs",
          imageSrc:
            "https://images.unsplash.com/photo-1582472138480-e84227671cd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
          imageAlt:
            "Person using a pen to cross a task off a productivity paper card.",
        },
        {
          id: 4,
          name: "Kiwi",
          href: "#",
          price: "@400 tshs",
          imageSrc:
            "https://images.pexels.com/photos/13685360/pexels-photo-13685360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          imageAlt: "Matanda matamu sana haya, onja utaona",
        },
        {
          id: 5,
          name: "Matango na nyanya",
          href: "#",
          price: "@500 tshs",
          imageSrc:
            "https://images.pexels.com/photos/1656664/pexels-photo-1656664.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
          imageAlt: "Nina mazao mengi mchanganyiko, na yalioota vizuri",
        },
        {
          id: 6,
          name: "Mchanganyiko",
          href: "#",
          price: "@100 tshs",
          imageSrc:
            "https://images.pexels.com/photos/3714083/pexels-photo-3714083.png?auto=compress&cs=tinysrgb&w=1200&lazy=load",
          imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
        {
          id: 7,
          name: "Mchele",
          href: "#",
          price: "1kg 3200 tshs",
          imageSrc:
            "https://images.pexels.com/photos/1058401/pexels-photo-1058401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          imageAlt: "Mchele mzuri.",
        },
        {
          id: 8,
          name: "njegere",
          href: "#",
          price: "3500 tshs",
          imageSrc:
            "https://images.pexels.com/photos/3004798/pexels-photo-3004798.jpeg?auto=compress&cs=tinysrgb&w=600",
          imageAlt: "Njegere nzuri na tamu sana. Nunua utanishukuru badae",
        },
        {
          id: 9,
          name: "Nyanya",
          href: "#",
          price: "350 tshs",
          imageSrc:
            "https://images.pexels.com/photos/2817549/pexels-photo-2817549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          imageAlt: "Nyanya nene na zimeiva vizuri mno, karibu sana",
        },
        {
          id: 10,
          name: "Pilipili",
          href: "#",
          price: "200 tshs",
          imageSrc:
            "https://images.pexels.com/photos/1838596/pexels-photo-1838596.jpeg?auto=compress&cs=tinysrgb&w=600",
          imageAlt: "pilipili tamu sana na murua.",
        },
      ]);
    }
  }, [products.length]);

  const logOut = async () => {
    try {
      // deleteUserLocalStorage()
      await signOut(the_auth);
    } catch (err) {
      // setError(err.message)
      console.error(err);
    }
  };

  if (!auth) {
    return (
      <button type="button" className="bg-Emerald-500 ..." disabled>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        Loading...
      </button>
    );
  }

  return (
    <>
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <header className="flex items-center justify-between py-6 sticky top-0 bg-white">
            <div className="flex items-center">
              <i className="fa-regular fa-cart-shopping text-3xl"></i>
              <span className="ml-3 font-bold">Kilimo Pesa</span>
              {/* <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                /> */}
            </div>
            <div className="w-2/4 mx-auto">
              <i className="fa-solid fa-magnifying-glass absolute h-11 w-auto p-3 text-stone-900 sm:text-xl"></i>
              <input
                className="rounded-3xl w-full bg-Emerald-200 bg-opacity-50 text-Emerald-800 py-2 px-10 outline-none"
                placeholder="Tafuta..."
                // value={searchQuery}
                // onChange={(e) => {
                //   filterTheBots(e.target.value);
                //   setsearchQuery(e.target.value);
                // }}
              />
            </div>
            <div className="flex items-center justify-end">
              <i className="fa-solid fa-bell text-2xl mr-10 cursor-pointer"></i>
              {/* <button data-popover-target="popover-user-profile" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">User profile</button> */}

              <img
                onClick={() => setlogout_menu(!logout_menu)}
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white cursor-pointer"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div
                // data-popover
                id="popover-user-profile"
                role="tooltip"
                className={`absolute z-10 top-0 translate-y-16 ${
                  logout_menu ? "visible" : "invisible"
                } inline-block text-sm font-light text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm px-3 py-2`}
              >
                <div className="text-lg text-center">
                  <button className="bg-Emerald-100 px-3 py-1 rounded">
                    Account
                  </button>
                  <button
                    onClick={logOut}
                    className="block bg-red rounded text-white w-full mt-2 px-3 py-1"
                  >
                    Logout
                  </button>
                </div>
                {/* <div data-popper-arrow></div> */}
              </div>
            </div>
          </header>
          <div>
            <h3 className="font-bold text-2xl my-2">Recent posts</h3>
            <div className="grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-8 my-2">
              {recent?.map((product) => (
                <div key={product.id} className="#">
                  <div
                    // onClick={() => navigate(`/product/${product.id}`)}
                    className="w-3/4 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
                  >
                    <a href={`/product/${product.id}`}>
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center hover:opacity-75"
                      />
                    </a>
                  </div>
                  <p className="text-lg font-medium text-gray-900">
                    {product.price}
                  </p>
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                </div>
              ))}
            </div>
          </div>
          {/* <div>
              <div className="flex items-center justify-between my-2">
                <h3 className="font-bold text-2xl">Feed</h3>
                <p className="hover:underline cursor-pointer">See all</p>
              </div>
              <div className="grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 my-2">
                {products.slice(0, 6)?.map((product) => (
                  <div key={product.id} className="group">
                    <div className="w-3/4 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <p className="text-lg font-medium text-gray-900">
                      {product.price}
                    </p>
                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                  </div>
                ))}
              </div>

            </div> */}
          {/* Mothly best seller */}
          <h3 className="font-bold text-2xl mt-6">Monthly Best Sellers</h3>
          <div className="grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4 my-2">
            <div className="relative overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://images.pexels.com/photos/5029766/pexels-photo-5029766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="something"
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
              <div className="absolute bottom-0 px-4 py-2 w-full bg-Emerald-800 opacity-90">
                <h3 className="text-xl text-white font-bold">Esther John</h3>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <i
                      key={rating}
                      className="fa-solid fa-star h-5 w-5 flex-shrink-0"
                    ></i>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://images.pexels.com/photos/7457020/pexels-photo-7457020.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="something"
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
              <div className="absolute bottom-0 px-4 py-2 w-full bg-Emerald-800 opacity-90">
                <h3 className="text-xl text-white font-bold">Baraka Salim</h3>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <i
                      key={rating}
                      className="fa-solid fa-star h-5 w-5 flex-shrink-0"
                    ></i>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://images.pexels.com/photos/11947664/pexels-photo-11947664.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="something"
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
              <div className="absolute bottom-0 px-4 py-2 w-full bg-Emerald-800 opacity-90">
                <h3 className="text-xl text-white font-bold">
                  Emmanueli Shayo
                </h3>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <i
                      key={rating}
                      className="fa-solid fa-star h-5 w-5 flex-shrink-0"
                    ></i>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://images.pexels.com/photos/1812634/pexels-photo-1812634.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="something"
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
              <div className="absolute bottom-0 px-4 py-2 w-full bg-Emerald-800 opacity-90">
                <h3 className="text-xl text-white font-bold">Salumu Sangi</h3>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <i
                      key={rating}
                      className="fa-solid fa-star h-5 w-5 flex-shrink-0"
                    ></i>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
