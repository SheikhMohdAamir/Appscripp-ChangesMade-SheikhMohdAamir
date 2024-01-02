"use client";

import React from "react";
import { Context } from "./context";
import { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RiEnglishInput } from "react-icons/Ri";
import Navbar from "./Navbar";

const MainHeader = () => {
  const { searchHandler } = useContext(Context);

  return (
    <div className="border-b border-gray-200 py-6">
      <div>
        <div className="container sm:flex justify-between items-center">
          <h1 className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
            GALAXY STORE
          </h1>
          <div className="w-full sm:w-[300px] md:w-[70%] relative">
            <input
              className="border-gray-200 border p-2 px-4 rounded-lg w-full"
              type="text"
              placeholder="Enter any product name..."
              onChange={(e) => {
                searchHandler(e.target.value);
              }}
            />
          </div>

          <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
            <BsSearch />
            <div className="relative">
              <FiHeart />
            </div>
            <div className="relative">
              <HiOutlineShoppingBag />
            </div>
            <div className="relative">
              <BiUser />
            </div>
            <div className="relative">
              <RiEnglishInput />
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default MainHeader;
