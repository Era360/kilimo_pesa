import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { connectFunctionsEmulator, httpsCallable } from "firebase/functions";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db, functions } from "../../firebase";

function Product() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [the_product, setthe_product] = useState();
  const [mkulima, setmkulima] = useState();
  const auth = getAuth();

  useEffect(() => {
    let data = [
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
        imageAlt:
          "Hand holding black machined steel mechanical pencil with brass tip and top.",
      },
      {
        id: 5,
        name: "Matango na nyanya",
        href: "#",
        price: "@500 tshs",
        imageSrc:
          "https://images.pexels.com/photos/1656664/pexels-photo-1656664.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
        imageAlt:
          "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
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
    ];

    if (!the_product) {
      setthe_product(data.find((item) => item.id === parseInt(productId)));
    }
  }, [auth.currentUser?.uid, mkulima, productId, the_product]);

  const getFarmerData = () => {
    getDoc(doc(db, "users", `${auth.currentUser?.uid}`))
      .then((docSnapshot) => {
        setmkulima(docSnapshot.data());
        // connectFunctionsEmulator(functions, "localhost", 5001);
        const createUser = httpsCallable(functions, "airtime");
        createUser({
          mobile_number: docSnapshot.data()["mobile_number"],
        });
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="pt-6">
      <nav aria-label="Breadcrumb">
        <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <li>
            <div className="flex items-center">
              <p
                onClick={() => navigate("/")}
                className="mr-2 text-sm font-medium text-gray-900 cursor-pointer"
              >
                Home
              </p>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>

          <li className="text-sm">
            <p className="font-medium text-gray-500 hover:text-gray-600">
              {productId}
            </p>
          </li>
        </ol>
      </nav>
      {the_product && (
        <div className="flex">
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-md ">
            <div className="w-full rounded-lg lg:block">
              <img
                src={the_product.imageSrc}
                // src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
                alt="Two each of gray, white, and black shirts laying flat."
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {the_product.name}
            </h1>
            <div className="mt-4">
              <div className="flex">
                <h2 className="text-xl font-bold">Bei:</h2>
                <p className="text-3xl ml-3 tracking-tight text-gray-900">
                  {the_product.price}
                </p>
              </div>

              {/* <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <svg
                      className="text-gray-900 h-5 w-5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <svg
                      className="text-gray-900 h-5 w-5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <svg
                      className="text-gray-900 h-5 w-5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <svg
                      className="text-gray-900 h-5 w-5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <svg
                      className="text-gray-200 h-5 w-5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="sr-only">4 out of 5 stars</p>
                  <p
                    href="#"
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    117 reviews
                  </p>
                </div>
              </div> */}
              <div className="py-10">
                <div>
                  <h3 className="text-xl font-bold">Kuhusu bidhaa</h3>

                  <div className="#">
                    <p className="text-base text-gray-900">
                      {the_product.imageAlt}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                {/* <i class="fa-solid fa-phone"></i> */}
                <div className="w-full rounded-md border border-transparent bg-Emerald-600 py-3 px-8 text-base text-center font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  {mkulima?.mobile_number ? (
                    <span className="ml-5">{mkulima?.mobile_number}</span>
                  ) : (
                    <i
                      onClick={() => getFarmerData()}
                      className="fa-solid fa-phone cursor-pointer"
                    ></i>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
