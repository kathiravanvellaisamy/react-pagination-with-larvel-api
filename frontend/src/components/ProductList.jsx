import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <img
            src={`http://localhost:8000/storage/${product.image}`}
            className="w-fit py-1 mb-2 rounded-md"
          />
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
          </a>
          {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.description}
          </p> */}
          <div className="flex justify-between items-center">
            <p>{product.price}</p>

            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
            >
              Buy Now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
