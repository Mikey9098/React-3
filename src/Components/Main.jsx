import React from "react";

const Product = ({
  id,
  name,
  emoji,
  description,
  price,
  setCart,
  cart,
  product,
}) => {
  return (
    <div className="flex flex-col">
      <div className="bg-stone-800 p-15 text-7xl text-center">{emoji}</div>
      <div className="bg-amber-800 p-4 flex flex-col grow">
        <h1>{name}</h1>
        <h2>{description}</h2>
        <div className="flex items-center justify-between mt-auto">
          <p>${price}</p>
          <a
            className="px-3 py-2 text-sm text-emerald-200 bg-blue-500 rounded-lg hover:bg-blue-100 transition"
            href={"/product/" + id}
            data-discover="true"
          >
            Details
          </a>
          <button
            className="bg-zinc-500 rounded-3xl p-2 hover:cursor-pointer active:bg-zinc-700"
            onClick={() => setCart([...cart, product])}
          >
            Add to cart{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export function Main({ products, cart, setCart }) {
  return (
    <div className=" h-full w-full bg-cyan-700 flex flex-col items-center p-8 text-white">
      <div className="text-center mb-8">
        <h1 className="font-bold text-4xl">Welcome to MyStore</h1>
        <h2 className="text-cyan-200">
          Find the best items for your daily life.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl w-full">
        {products.map((item) => (
          <Product
            product={item}
            cart={cart}
            setCart={setCart}
            key={item.id}
            id={item.id}
            name={item.name}
            emoji={item.emoji}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
