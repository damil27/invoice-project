import React from "react";
import dropdown from "../assets/icon-arrow-down.svg";
import plus from "../assets/icon-plus.svg";
const Content = () => {
  return (
    <div className="text-white">
      <div className="pt-[4rem]" />
      <div className="container mx-auto w-[50%] ">
        {/* header part  */}
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">Invoice</h1>
            <p className="text-[14px] text-slate-500">There is 7 invoices</p>
          </div>
          <div className="flex justify-center items-center gap-4 ">
            <div className="flex justify-center items-center gap-3">
              {" "}
              filter
              <img src={dropdown} alt="" />
            </div>
            <div className="flex justify-center items-center gap-4 px-2 py-[6px] rounded-2xl  bg-purple-500 ">
              <div className="bg-white p-3 rounded-full">
                <img src={plus} alt="" />
              </div>
              <div>New invoices</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
