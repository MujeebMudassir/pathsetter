import React from "react";
import { Link } from "react-router-dom";
import { CiCircleInfo } from "react-icons/ci";
import leftImage from "../../assets/images/left-shape.png";
import rightImage from "../../assets/images/right-shape.png";
import "./GraphData.css";
import SimpleLineChart from "./SimpleLineChart";
const GraphData = ({ selected }) => {
  const points = [
    "Computer Systems Engineers/Architetcs",
    "Contact us to see this job title!",
    "Computer Systems Engineers/Architetcs",
    "Computer Systems Engineers/Architetcs",
    "Contact us to see this job title!",
    "Computer Systems Engineers/Architetcs",
  ];
  return (
    <div className="relative max-w-[1240px] m-auto shadow-[#10234d] border-[#1e253f] bg-[#03091d] border-2 my-20  rounded-lg p-10 background-ratial-gradient">
      <div className="absolute -top-20 -left-10 -z-20">
        <img height={300} width={300} src={leftImage} alt={leftImage} />
      </div>
      <div className="absolute -right-10 top-[20%] -z-20">
        <img height={300} width={300} src={rightImage} alt={rightImage} />
      </div>
      <div className="text-white">
        <div>
          <h3 className="text-3xl mb-5 flex gap-5 items-center">
            <CiCircleInfo></CiCircleInfo> Sample Company in the{" "}
            {selected.Industry} Industry
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-5 md:gap-10">
          <div className="border-[#1e253f] border-2 rounded-lg p-5">
            <p>Toral Estimated Headcount</p>
            <h3 className="text-4xl">{">"} 100,100</h3>
          </div>
          <div className="border-[#1e253f] border-2 rounded-lg p-5">
            <p>Toral Estimated Headcount</p>
            <h3 className="text-4xl">{">"} 100,100</h3>
          </div>
        </div>
        <div className="grid  md:grid-cols-[2fr_1fr] gap-4 min-h-40 py-10">
          <div>
            <p className="flex justify-start items-center gap-2">
              GenAi Acceleration Opportunity by Functional Areas{" "}
              <CiCircleInfo></CiCircleInfo>
            </p>
            <SimpleLineChart></SimpleLineChart>
          </div>
          <div>
            <p className=" border-b-2 border-[#1e253f] pb-3">Legend</p>
            <div className="flex gap-3 items-center mt-3">
              <div className="h-4 w-5 bg-purple-500"></div>
              <p className="text-[#838383] ">Highway GenAi Opportunity Areas</p>
            </div>
            <div className="flex gap-3 items-center mt-3">
              <div className="h-4 w-5 bg-blue-500"></div>
              <p className="text-[#838383] ">Highway GenAi Opportunity Areas</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-2">
            Top 5 Jobs by Gen Ai Acceleration Opportunity
          </h3>
          <div>
            {points.map((point, index) => (
              <Point key={index} point={point} index={index}></Point>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl my-10">
            Contact us to get your company's results!
          </h2>
          <Link className="px-5 py-2 gradient-animation-btn rounded-full text-2xl">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
const Point = ({ point, index }) => {
  return (
    <div className="border-[#1e253f] border-2 p-3 mb-3 rounded-lg">
      <p
        className={`text-white ${
          index == 0 && "text-blue-500"
        } flex items-center`}
      >
        <p className="px-3 py-1 mr-5 rounded-md bg-[#03091D] text-white">
          {index + 1}
        </p>{" "}
        {point}
      </p>
    </div>
  );
};
export default GraphData;
