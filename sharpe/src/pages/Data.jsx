import React from "react";
import PostTable from "../components/Table";

const Data = () => {
  return (
    <div className="absolute top-0 h-screen w-screen bg-[#09090B]">
      <div className="relative">
        <div className="w-full absolute top-28 h-[calc(100vh-7rem)] px-5 lg:px-24 xl:px-40 py-5 lg:py-10">
          <div className="flex justify-center w-full h-full items-center container mx-auto">
            <div className="bg-[#09090B] border-[1px] border-gray-500 rounded-lg w-full h-full">
              <div className="bg-[#09090B] w-[70%] border-r-[1px] border-gray-500 h-full">
                <PostTable />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
