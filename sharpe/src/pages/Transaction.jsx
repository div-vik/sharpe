import React from "react";
import bg from "../assets/blurBg.png";

const Transaction = () => {
  return (
    <div className="absolute top-0 h-screen w-screen bg-[#09090B]">
      <div className="relative">
        <div className="w-full absolute top-28 h-[calc(100vh-7rem)] px-5 lg:px-24 xl:px-40 py-5 lg:py-10 text-white">
          <div className="flex justify-center w-full h-full items-center container mx-auto">
            <div className="w-[30rem] h-fit rounded-2xl relative blurbg">
              <img className="rounded-2xl" src={bg} alt="bg" />
              <div className="absolute top-0 w-full h-full px-10 py-10 md:py-16">
                <p className="mb-10 md:mb-16 font-bold text-5xl ">
                  Transaction
                </p>
                <form className="w-full h-full rounded-2xl flex flex-col">
                  <label className="mb-2 text-lg">Wallet Address </label>
                  <input
                    placeholder="0x71C7656EC7ab88b098..."
                    className="bg-transparent focus:outline-none py-1 border-b-[1px]"
                  />
                  <label className="mb-2 text-lg mt-5">Amount </label>
                  <input
                    placeholder="500-1000"
                    className="bg-transparent focus:outline-none py-1 border-b-[1px]"
                  />
                  <div className="w-fit px-3 py-2 mt-5 bg-pink-500 rounded-md hover:cursor-pointer">
                    Submit
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
