import React from 'react'
import perfect from "../panda/perfect.png";
import good from "../panda/good.png";
import boo from "../panda/boo.png";
import peace from "../panda/peace.png";
import { useNavigate } from "react-router-dom";

const Ratescore = () => {
  const navigate = useNavigate();
  const nextpage = () => {
    navigate("/");
  };
  return (
    <div className=" p-5 m-3 rounded">
    <h4 className="text-xl font-bold text-white lg:text-black" >Rating Score</h4>
    <div className="flex flex-col lg:flex-row items-center gap-5 mt-5">
      <div  onClick={nextpage} className="flex justify-evenly items-center h-24 lg:h-40 w-96 px-5 lg:w-1/2 p-3 hover:bg-yellow-500 hover:text-white text-white lg:text-[#39383a] lg:hover:bg-[#39383a] hover:border-transparent  border-2 lg:border-4 border-yellow-300 rounded">
       <img src={boo} className="h-[100px]" alt="" /> 
        <div className="text-center">
          <h2 className="text-3xl font-bold pb-2">0%</h2>
          <h4 className="inline font-bold   text-md lg:text-xl">
            Bad
          </h4>
        </div>
      </div>
      <div onClick={nextpage} className="flex justify-evenly items-center h-24 lg:h-40 w-96 px-5 lg:w-1/2 p-3 hover:bg-yellow-500 hover:text-white text-white lg:text-[#39383a] lg:hover:bg-[#39383a] hover:border-transparent  border-2 lg:border-4 border-yellow-300 rounded">
       <img src={good} className="h-[100px]" alt="" />
        <div className="text-center">
          <h2 className="text-3xl font-bold pb-2">30%</h2>
          <h4 className="inline font-bold   text-md lg:text-xl">Not Bad</h4>
        </div>
      </div>
      <div onClick={nextpage} className="flex justify-evenly items-center h-24 lg:h-40 w-96 px-5 lg:w-1/2 p-3 hover:bg-yellow-500 hover:text-white text-white lg:text-[#39383a] lg:hover:bg-[#39383a] hover:border-transparent  border-2 lg:border-4 border-yellow-300 rounded">
        <img src={peace} className="h-[100px]" alt="" />
        <div className="text-center">
          <h2 className="text-3xl font-bold pb-2">80%</h2>
          <h4 className="inline font-bold   text-md lg:text-xl">
            satisfied
          </h4>
        </div>
      </div>
      <div onClick={nextpage} className="flex justify-evenly items-center h-24 lg:h-40 w-96 px-5 lg:w-1/2 p-3 hover:bg-yellow-500 hover:text-white text-white lg:text-[#39383a] lg:hover:bg-[#39383a] hover:border-transparent  border-2 lg:border-4 border-yellow-300 rounded">
        <img src={perfect} className="h-[100px]" alt="" />
        <div className="text-center">
          <h2 className="text-3xl font-bold pb-2">100%</h2>
          <h4 className="inline font-bold   text-md lg:text-xl">
            Very Satisfied
          </h4>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Ratescore