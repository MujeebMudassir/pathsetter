import React, { useState } from "react";
import "./QuickScanAi.css";
import image from "../../assets/images/map1.png";
import mapBlack from "../../assets/images/mapBlack.png";
import icon1 from "../../assets/images/Macdonals.png";
import icon2 from "../../assets/images/starbucks.png";
import icon3 from "../../assets/images/kfc.webp";
import jsonData from "../../assets/images/Pdf.json";

const QuickScanAi = ({ theme }) => {
  const data = jsonData.data_0;

  // Helper function to render text with line breaks
  const renderTextWithLineBreaks = (text) => {
    return text.split("<br />").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="w-full md:px-5">
      <div
        className={`sm:flex sm:justify-between ${
          theme ? `text-black` : `text-white`
        }`}
      >
        <div className="mb-4">
          <div className="md:ml-10 mt-5">
            <p className="text-xl mb-7">
              {jsonData.page_0.split(" ").join(" \u00A0 ")}
            </p>
            <p className="text-4xl text-sky-600 font-semibold">
              {data.left_key_1}
            </p>
            <p className="mb-7">{data.left_key_2}</p>
            <p className="text-4xl text-sky-600 font-semibold">
              {data.left_key_3}
            </p>
            <p className="mb-7">{data.left_key_4}</p>
            <div className="lg:flex lg:justify-between md:grid md:grid-rows-2">
              <p>
                <span className="text-4xl text-sky-600 font-semibold">
                  {data.left_key_5}
                </span>
                <br />
                {renderTextWithLineBreaks(
                  data.left_key_6.replace(" ", "<br />")
                )}
              </p>

              <div>
                <p>
                  <span className="text-4xl text-sky-600 font-semibold">
                    {data.left_key_7}
                  </span>{" "}
                  <br />
                  {renderTextWithLineBreaks(
                    data.left_key_8.replace(" ", "<br />")
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className="border-s-2 border-t-2"
            style={{ borderColor: theme && "black" }}
          >
            <img src={theme ? mapBlack : image} alt="" className="mapImg" />
          </div>
          <p className="text-xl mt-6 ml-5 mb-5">K e y &nbsp; P l a y e r s</p>
          <p className="flex mb-5">
            <img
              src={icon1}
              alt=""
              className="icon1 object-contain"
              style={{ backgroundColor: theme && "#ace4da" }}
            />
            <span className="mt-1 ml-2">{data.right_key_1}</span>
          </p>
          <p className="flex mb-5">
            <img
              src={icon2}
              alt=""
              className="icon2"
              style={{ backgroundColor: theme && "#ace4da" }}
            />
            <span className="mt-1 ml-2">{data.right_key_2}</span>
          </p>
          <p className="flex mb-5">
            <img
              src={icon3}
              alt=""
              className="icon3"
              style={{ backgroundColor: theme && "#ace4da" }}
            />
            <span className="mt-1 ml-2">{data.right_key_3}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickScanAi;
