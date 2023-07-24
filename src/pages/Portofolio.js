import React from "react";

import Link from "next/link";

function Portofolio() {
  return (
    <div>
      <div className="w-[100%]">
        <div className="bg-[url('/myPorto.jpg')] image-full bg-fixed bg-contain h-[100vh] bg-top bg-repeat">
          <div className="flex justify-center items-center h-screen p-6">
          <div className=" bg-[#e3e3e3f2] rounded-md w-96  shadow-xl image-full ">
            <div className="card-body">
              <h2 className="card-title">Consume API Apex Legends</h2>
              <div className="card-actions justify-end">
                <Link className="w-[100%]" href='https://fahlevitest-ingmi08kb-linvxcode.vercel.app/?vercelToolbarCode=LLHoxZ4_PBk-N0J'>
                <button className="btn btn-outline">See</button>
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <div className="bg-[url('/SimpleCrud.jpg')] image-full bg-fixed bg-contain h-[100vh] bg-top bg-repeat">
          <div className="flex justify-center items-center h-screen p-6">
          <div className=" bg-[#e3e3e3f2] rounded-md w-96  shadow-xl image-full ">
            <div className="card-body">
              <h2 className="card-title">Simple Crud</h2>
              <div className="card-actions justify-end">
                <Link className="w-[100%]" href='https://m-fahlevi-test-g72329htg-linvxcode.vercel.app/?vercelToolbarCode=0kai9XODrtJNGRo'>
                <button className="btn btn-outline">See</button>
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      {/* <div className="w-[100%] ">
        <div className="bg-[url('/SimpleCrud.jpg')] bg-fixed bg-contain h-[100vh] bg-top bg-repeat">
          <h1 className="text-4xl text-white text-center font font-semibold  backdrop-brightness-90 w-[100%] h-screen flex justify-center items-center">
            Simple Crud
          </h1>
        </div>
      </div> */}
    </div>
  );
}

export default Portofolio;
