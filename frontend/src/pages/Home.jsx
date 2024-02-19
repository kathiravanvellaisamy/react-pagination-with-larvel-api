import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [info, setInfo] = useState({});

  const url = "http://localhost:8000/api/products";

  const fetchProducts = (url) => {
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.results.data);
        console.log(res.data.results.total);
        setInfo(res.data.results);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  const handleNextPage = () => {
    fetchProducts(info.next_page_url);
    window.scrollTo(0, 0);
  };
  const handlePreviousPage = () => {
    fetchProducts(info.prev_page_url);
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="p-2 my-1 max-w-5xl rounded-md mx-auto border border-slate-100 bg-pink-50">
        <h1 className="py-1 text-2xl  text-slate-800 font-normal text-center">
          Top Deals of the Week
        </h1>
      </div>
      <ProductList products={products} />
      <nav className="my-5">
        <ul className="inline-flex -space-x-px text-base h-10">
          {info.prev_page_url ? (
            <li>
              <a
                onClick={handlePreviousPage}
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-red-600 hover:text-gray-100 "
              >
                Previous
              </a>
            </li>
          ) : null}

          {info.next_page_url ? (
            <li>
              <a
                onClick={handleNextPage}
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-red-600 hover:text-gray-100 "
              >
                Next
              </a>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
