import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [products, setproducts] = useState([]);
  const [recent, setrecent] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length === 0) {
      setrecent([
        {
          id: 1,
          name: "Earthen Bottle",
          href: "#",
          price: "$48",
          imageSrc: "https://picsum.photos/1000",
          imageAlt:
            "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
        },
        {
          id: 2,
          name: "Nomad Tumbler",
          href: "#",
          price: "$35",
          imageSrc: "https://picsum.photos/1000",
          imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
        {
          id: 3,
          name: "Focus Paper Refill",
          href: "#",
          price: "$89",
          imageSrc: "https://picsum.photos/1000",
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
        // More products...
      ]);
      setproducts([
        {
          id: 1,
          name: "Earthen Bottle",
          href: "#",
          price: "$48",
          imageSrc: "https://picsum.photos/1000",
          imageAlt:
            "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
        },
        {
          id: 2,
          name: "Nomad Tumbler",
          href: "#",
          price: "$35",
          imageSrc: "https://picsum.photos/1000",
          imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
        {
          id: 3,
          name: "Focus Paper Refill",
          href: "#",
          price: "$89",
          imageSrc: "https://picsum.photos/1000",
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
        // More products...
      ]);
    }
  }, [products.length]);

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
              <img
                onClick={() => navigate("/profile")}
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white cursor-pointer"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
          </header>
          <section className="flex">
            <div>
              <h3 className="font-bold text-2xl">Recent posts</h3>
              <div className="grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 my-2">
                {recent?.map((product) => (
                  <div key={product.id} className="#">
                    <div className="w-3/4 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center hover:opacity-75"
                      />
                    </div>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {product.price}
                    </p>
                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-2xl">Feed</h3>
              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 my-2">
                {products?.map((product) => (
                  <div key={product.id} className="group">
                    <div className="w-3/4 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default HomePage;
