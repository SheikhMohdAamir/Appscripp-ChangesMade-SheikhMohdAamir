"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import { Context } from "./context";

const Products = () => {
  const { hits, searchParams } = useContext(Context);

  if (hits === undefined) {
    return (
      <p className="text-center" style={{ fontSize: "20px" }}>
        <i>Loading Products...</i>
      </p>
    );
  }

  return (
    <div>
      <div className="container">
        <br />
        <div>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center gap-2 pb-1 text-gray-900 transition hover:border-gray-600">
            <span className="text-lg font-large"> Show Filter </span>

            <span className="transition group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>

          <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
            <div className="w-96 rounded border border-gray-200 bg-white">
              <header className="flex items-center justify-between p-4">
                <span className="text-sm text-gray-700"> 20 Items </span>

                <button
                  type="button"
                  className="text-sm text-gray-900 underline underline-offset-4"
                >
                  Reset
                </button>
              </header>

              <ul className="space-y-1 border-t border-gray-200 p-4">
                <li>
                  <label
                    htmlFor="FilterInStock"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterInStock"
                      className="h-5 w-5 rounded border-gray-300"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      In Stock (5+){" "}
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    htmlFor="FilterPreOrder"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterPreOrder"
                      className="h-5 w-5 rounded border-gray-300"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Pre Order (3+){" "}
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    htmlFor="FilterOutOfStock"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterOutOfStock"
                      className="h-5 w-5 rounded border-gray-300"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Out of Stock (10+){" "}
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </details>
        </div>
      </div>

      <div className="container pt-16">
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {hits
            .filter((i) => {
              if (searchParams === null) {
                return i;
              } else if (
                i.title.toLowerCase().includes(searchParams.toLowerCase())
              ) {
                return i;
              }
            })
            .map((item, index) => (
              <ProductCard
                key={index}
                image={item.image}
                title={item.title}
                category={item.category}
                price={item.price}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
