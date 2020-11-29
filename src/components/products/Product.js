import React from "react";
import { products } from "./productsArray";
const Product = () => {
  return (
    <div class="md:container md:mx-auto p-5">
      <div className="flex justify-center align-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3">
          {products.map((element, index) => (
            <div class="max-w-sm rounded overflow-hidden shadow-lg m-3">
              <img
                class="w-full"
                src={element.image}
                alt="Sunset in the mountains"
              />
              <div class="px-6 my-2 mt-5 grid grid-cols-2">
                <div class="font-bold text-xl mb-2">{element.title}</div>
                <div class="font-bold text-xl mb-2 ml-auto bg-purple-200 rounded-full py-2 px-5">
                  ${element.price}
                </div>
              </div>
              <div class="px-6 py-3">
                <p class="text-gray-700 text-base">{element.content}</p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {element.stock ? "Disponible" : "No disponible"}
                </span>
              </div>
              <div class="px-6 pt-4 pb-2">
                <button
                  type="button"
                  className="w-full shadow-lg rounded-md bg-gradient-to-r bg-pink-400 p-3 text-white hover:from-pink-400 hover:to-pink-500"
                >
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
