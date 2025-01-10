import React, { useState, useEffect, useRef } from "react";
import Product1 from "../../assets/images/productImages/Data Insight - 2.jpg";
import Product2 from "../../assets/images/productImages/Loader-2.jpg";
import "./styles/productV2.css";
import { Link } from "react-router-dom";

const ProductsV2 = ({ theme }) => {
  return (
    <section
      className={`min-h-[100vh] mt-20 relative  p-5  max-w-[1440px] m-auto ${
        theme ? "text-black" : "text-white"
      } `}
    >
      <h1 className="text-center text-5xl mb-2">
        Unleash the Future of GenAI-Driven Solutions
      </h1>
      <p className="text-center text-xl mb-5">
        Discover our revolutionary lineup of GenAI-powered products designed to
        elevate your operations.
      </p>
      <div className="grid  z-10 p-[0.2rem] sticky top-20 outer-fancy-product  rounded-3xl before:w-[200%] md:before:w-full" style={{ '--dynamic-color': theme ? "#000" : "#fff" }}>
        <div
          className={`prod-radial-gradient z-20 grid md:grid-cols-2 rounded-3xl ${
            theme ? "bg-[#ace4da]" : "bg-[#03091D]"
          }`}
        >
          <div className={`z-30 pl-3 md:pl-10 py-5   ${theme?"":"border-[#1e253f]"} md:border-y-[0.2px] md:border-l-[0.2px] md:border-r-[0] border-t-[0.2px] border-x-[0.2px] rounded-t-3xl md:rounded-l-3xl md:rounded-r-none flex flex-col justify-center`}>
            <p className="md:text-5xl text-3xl font-bold">Data Dynamo</p>
            <p className="mt-8">Transforming Data into Actionable Insights</p>
            <p
              className={`mb-5 md:mb-10 mt-5  ${
                theme ? "text-black" : "text-slate-300"
              }`}
            >
              Our flagship data engine transforms disparate datasets into
              unified whole-of-the-company insights,empowering employees to make
              effective, data-driven decisions using our Ai stack
            </p>
            <div className="grid p-0.5 outer-fancy-product rounded-3xl self-start before:w-[200%] md:before:w-full">
              <div
                className={` ${
                  theme ? "bg-[#25e1bf]" : "bg-[#000] border-[#1e253f]"
                } rounded-3xl  border-[0.2px] z-50 py-2 px-7`}
              >
                <Link
                  to={"/DataDynamo"}
                  onClick={() => scrollTo(0, 0)}
                  className="cursor-pointer text-xl"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className={`z-30 px-3 h-[500px]  py-5 rounded-b-3xl ${theme?"":"border-[#1e253f]"} md:border-y-[0.2px] md:border-l-[0] md:border-r-[0.2px] border-b-[0.2px] border-x-[0.2px] md:rounded-r-3xl md:rounded-l-none overflow-hidden flex justify-end`}>
            <div className="rounded-lg overflow-hidden m-auto">
              <img
                src={Product2}
                alt="product2"
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`grid z-10 p-[0.2rem] sticky mt-20 top-20  outer-fancy-product rounded-3xl before:w-[200%] md:before:w-full`} style={{ '--dynamic-color': theme ? "#000" : "#fff" }}>
        <div className={`prod-radial-gradient z-40 grid md:grid-cols-2 rounded-3xl ${theme? "bg-[#ace4da]":"bg-[#03091D]"}`}>
          <div className={`z-50 px-3 h-[500px] py-5 w-full ${theme?"":"border-[#1e253f]"}  md:border-y-[0.2px] md:border-r-[0] md:border-l-[0.2px] border-t-[0.2px] border-x-[0.2px] rounded-t-3xl md:rounded-l-3xl  md:rounded-r-none overflow-hidden flex justify-end`}>
            <div className="rounded-lg m-auto overflow-hidden">
              <img
                src={Product1}
                alt="product1"
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
          </div>
          <div className={`z-30 px-3 py-5 ${theme?"":"border-[#1e253f]"} md:border-y-[0.2px] md:border-l-[0] md:border-r-[0.2px] border-b-[0.2px] border-x-[0.2px] rounded-b-3xl md:rounded-r-3xl md:rounded-l-none flex flex-col justify-center`}>
            <p className="md:text-5xl text-3xl font-bold">MarketGenie</p>
            <p className="mt-6">
              Revolutionise Your Marketing with AI Precision
            </p>
            <p
              className={`mb-5 md:mb-10 mt-5  ${
                theme ? "text-black" : "text-slate-300"
              }`}
            >
              We redefine your marketing strategy with MarketGenie by delivering
              targeted campaigns swiftly and effectively. Our AI solution
              streamlines your marketing efforts with cutting-edge technology.
            </p>
            <div className="grid p-0.5 outer-fancy-product rounded-3xl self-start before:w-[200%] md:before:w-full">
              <div className={`${theme ? "bg-[#25e1bf]" : "bg-[#000] border-[#1e253f]"}  border-[0.2px] rounded-3xl z-50 py-2 px-7`}>
                <Link
                  to={"/MarketGenie"}
                  onClick={() => scrollTo(0, 0)}
                  className="cursor-pointer text-xl"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsV2;
