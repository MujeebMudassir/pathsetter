import React from "react";
import "./IndiaOutlet.css";
import image from "../../assets/images/indiamap.png";
import indiaMapBlack from "../../assets/images/indiaMapBlack.png";
import icon1 from "../../assets/images/sbhavan.png";
import icon2 from "../../assets/images/coffee.png";
import icon4 from "../../assets/images/Haldiram.png";
import jsonData from "../../assets/images/Pdf.json";

const IndiaOutlet = ({ theme }) => {
  const data = jsonData.data_1;

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
          <div className="md:ml-10 mt-10">
            <p className="text-xl mb-10">
              {jsonData.page_1.split(" ").join(" \u00A0 ")}
            </p>
            <p className="text-4xl text-sky-600 font-semibold">
              {data.left_key_1}
            </p>
            <p className="mb-10">{data.left_key_2}</p>
            <p className="text-4xl text-sky-600 font-semibold">
              {data.left_key_3}
            </p>
            <p className="mb-10">{data.left_key_4}</p>
            <div className="flex justify-between">
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
          <div className="">
            <img src={theme?indiaMapBlack:image} alt="" className="mapImg" />
          </div>
          <p className="text-xl mb-5">K e y &nbsp; P l a y e r s</p>
          <p className="flex items-center mb-5">
            <img
              src={icon1}
              alt=""
              className="icon1"
              style={{ backgroundColor: theme && "#ace4da" }}
            />
            <span className="ml-2">{data.right_key_1}</span>
          </p>
          <p className="flex items-center mb-5">
            <img
              src={icon2}
              alt=""
              className="icon2"
              style={{ backgroundColor: theme && "#ace4da" }}
            />
            <span className="ml-2">{data.right_key_2}</span>
          </p>
          <p className="flex items-center mb-5">
            <img
              src={icon4}
              alt=""
              className="icon4"
              style={{ backgroundColor: theme && "#ace4da" }}
            />
            <span className="ml-2">{data.right_key_3}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndiaOutlet;
