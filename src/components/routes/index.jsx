import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRequireAuth } from "../utils/hooks";

function HomePage() {
  const [products, setproducts] = useState([]);
  const [recent, setrecent] = useState([]);
  const [logout_menu, setlogout_menu] = useState(false);
  const navigate = useNavigate();
  const auth = useRequireAuth("/login");
  const the_auth = getAuth();

  useEffect(() => {
    if (products.length === 0) {
      setrecent([
        {
          id: 1,
          name: "Mchele",
          href: "#",
          price: "$48",
          imageSrc:
            "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1100&q=60",
          imageAlt:
            "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
        },
        {
          id: 2,
          name: "Nyanya",
          href: "#",
          price: "$35",
          imageSrc:
            "https://images.unsplash.com/photo-1509963906410-fceef97f22f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw3ODE2Njg4MHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1100&q=60",
          imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
        {
          id: 3,
          name: "Strawberry",
          href: "#",
          price: "$89",
          imageSrc:
            "https://images.unsplash.com/photo-1582472138480-e84227671cd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
          imageAlt:
            "Person using a pen to cross a task off a productivity paper card.",
        },
        {
          id: 4,
          name: "Machined Mechanical Pencil",
          href: "#",
          price: "$35",
          imageSrc: "https://picsum.photos/1000",
          imageAlt:
            "Hand holding black machined steel mechanical pencil with brass tip and top.",
        },
        {
          id: 5,
          name: "Earthen Bottle",
          href: "#",
          price: "$48",
          imageSrc: "https://picsum.photos/1000",
          imageAlt:
            "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
        },
        {
          id: 6,
          name: "Nomad Tumbler",
          href: "#",
          price: "$35",
          imageSrc: "https://picsum.photos/1000",
          imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
        {
          id: 7,
          name: "Focus Paper Refill",
          href: "#",
          price: "$89",
          imageSrc: "https://picsum.photos/1000",
          imageAlt:
            "Person using a pen to cross a task off a productivity paper card.",
        },
        {
          id: 8,
          name: "Machined Mechanical Pencil",
          href: "#",
          price: "$35",
          imageSrc: "https://picsum.photos/1000",
          imageAlt:
            "Hand holding black machined steel mechanical pencil with brass tip and top.",
        },
        {
          id: 9,
          name: "Nomad Tumbler",
          href: "#",
          price: "$35",
          imageSrc: "https://picsum.photos/1000",
          imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
        {
          id: 10,
          name: "Focus Paper Refill",
          href: "#",
          price: "$89",
          imageSrc: "https://picsum.photos/1000",
          imageAlt:
            "Person using a pen to cross a task off a productivity paper card.",
        },
        {
          id: 11,
          name: "Machined Mechanical Pencil",
          href: "#",
          price: "$35",
          imageSrc: "https://picsum.photos/1000",
          imageAlt:
            "Hand holding black machined steel mechanical pencil with brass tip and top.",
        },
        // More products...
      ]);
      // setproducts([
      //   {
      //     id: 1,
      //     name: "Earthen Bottle",
      //     href: "#",
      //     price: "$48",
      //     imageSrc: "https://picsum.photos/1000",
      //     imageAlt:
      //       "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      //   },
      //   {
      //     id: 2,
      //     name: "Nomad Tumbler",
      //     href: "#",
      //     price: "$35",
      //     imageSrc: "https://picsum.photos/1000",
      //     imageAlt:
      //       "Olive drab green insulated bottle with flared screw lid and flat top.",
      //   },
      //   {
      //     id: 3,
      //     name: "Focus Paper Refill",
      //     href: "#",
      //     price: "$89",
      //     imageSrc: "https://picsum.photos/1000",
      //     imageAlt:
      //       "Person using a pen to cross a task off a productivity paper card.",
      //   },
      //   {
      //     id: 4,
      //     name: "Machined Mechanical Pencil",
      //     href: "#",
      //     price: "$35",
      //     imageSrc: "https://picsum.photos/1000",
      //     imageAlt:
      //       "Hand holding black machined steel mechanical pencil with brass tip and top.",
      //   },
      //   {
      //     id: 5,
      //     name: "Earthen Bottle",
      //     href: "#",
      //     price: "$48",
      //     imageSrc: "https://picsum.photos/1000",
      //     imageAlt:
      //       "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      //   },
      //   {
      //     id: 6,
      //     name: "Nomad Tumbler",
      //     href: "#",
      //     price: "$35",
      //     imageSrc: "https://picsum.photos/1000",
      //     imageAlt:
      //       "Olive drab green insulated bottle with flared screw lid and flat top.",
      //   },
      //   {
      //     id: 7,
      //     name: "Focus Paper Refill",
      //     href: "#",
      //     price: "$89",
      //     imageSrc: "https://picsum.photos/1000",
      //     imageAlt:
      //       "Person using a pen to cross a task off a productivity paper card.",
      //   },
      //   {
      //     id: 8,
      //     name: "Machined Mechanical Pencil",
      //     href: "#",
      //     price: "$35",
      //     imageSrc: "https://picsum.photos/1000",
      //     imageAlt:
      //       "Hand holding black machined steel mechanical pencil with brass tip and top.",
      //   },
      //   // More products...
      // ]);
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
                src="https://picsum.photos/1000"
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
                src="https://picsum.photos/1000"
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
                src="https://picsum.photos/1000"
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
                src="https://picsum.photos/1000"
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
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
