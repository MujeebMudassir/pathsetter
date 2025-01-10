import React from "react";
import { FaSalesforce } from "react-icons/fa";
import { SiKhanacademy } from "react-icons/si";
import { FaWix } from "react-icons/fa";
import { SiRetool } from "react-icons/si";
//import jove from "../../assets/images/JOVE.png";
import jove from "../../assets/images/JOVE2.png";
//import DCM from "../../assets/images/DCM.png";
import DCM from "../../assets/images/DCM2.png";
// import Google from "../../assets/images/R.png";
import Google from "../../assets/images/R2.png";
// import Quantela from "../../assets/images/Quantela.png";
import Quantela from "../../assets/images/Quantela2.png";
import QuantelaBlack from "../../assets/images/QuantelaBlack.png";
//import Lares from "../../assets/images/Lares.png";
import Lares from "../../assets/images/Lares2.png";
import LaresBlack from "../../assets/images/LaresBlack.png";
// import Tamil from "../../assets/images/Tamil.png";
// import Tamil from "../../assets/images/Tamil2.png";
//import { FcGoogle } from "react-icons/fc";
const CompanySection = ({ theme }) => {
  return (
    <div
      className={`max-w-[1350px] m-auto text-center ${
        theme ? "text-black" : "text-white"
      }`}
    >
      <h1 className="text-3xl md:text-6xl my-4">Our Valued Clients</h1>
      <p className="text-1xl md:text-1xl max-w-[50rem] m-auto">
        We specialise in crafting personalised AI solutions that precisely meet
        your business needs. Our approach ensures tailored innovation,
        efficiency, and a strategic advantage for your organisation.
      </p>
      <div className="flex px-5 md:px-0 flex-wrap justify-around items-center gap-5 py-10">
        {/* <FaSalesforce className="text-white text-8xl"></FaSalesforce> */}
        {/* <SiKhanacademy className="text-white text-8xl"></SiKhanacademy> */}
        {/* <FaSalesforce className="text-white text-8xl"></FaSalesforce> */}
        {/* <FaWix className="text-white text-8xl"></FaWix> */}
        {/* <FaSalesforce className="text-white text-8xl"></FaSalesforce> */}
        {/* <SiRetool className="text-white text-8xl"></SiRetool> */}
        {/* <FcGoogle className="text-white text-8xl"></FcGoogle> */}
        {/* <div className="max-w-[250px]">
          <img src={Tamil} alt="tamil" />
        </div> */}
        <div className="max-w-[250px]">
          <img src={theme ? LaresBlack : Lares} alt="lares" />
        </div>
        <div className="max-w-[250px]">
          <img src={theme ? QuantelaBlack : Quantela} alt="quantela" />
        </div>
        <div className="max-w-[250px]">
          <img src={Google} alt="google" />
        </div>
        {/* <div className="max-w-[250px]">
          <img src={jove} alt="jove" />
        </div> */}
        {/* <div className="max-w-[250px]">
          <img src={DCM} alt="dcm" />
        </div> */}
      </div>
    </div>
  );
};

export default CompanySection;
