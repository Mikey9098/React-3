import { useParams } from "react-router";

export const ProductDetailPage = ({ products, cart, setCart }) => {
  const params = useParams();

  const productDetail = products.find(
    (product) => `${product.id}` === `${params.id}`
  );
  console.log(productDetail);
  return (
    <div className="w-full h-screen bg-indigo-600">
      <div className="container mx-auto p-6 max-w-4xl ">
        <a
          className="text-gray-500 hover:text-gray-900 mb-6 inline-block"
          href="/"
          data-discover="true"
        >
          ← Back to Products
        </a>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-12 text-9xl">
            {productDetail.emoji}
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {productDetail.name}
            </h1>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {productDetail.description}
            </p>
            <div className="flex items-center justify-between mt-8">
              <span className="text-3xl font-bold text-gray-900">
                ${productDetail.price}
              </span>
              <button
                className="px-6 py-3 text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition shadow-md hover:shadow-lg cursor-pointer font-medium"
                onClick={() => setCart([...cart, productDetail])}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
