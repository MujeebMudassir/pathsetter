import React, { useState } from "react";
import MainSection from "./MainSection";
import Features from "./Features";
import TrackUser from "./TrackUser";
// import Products from "./Products";
import CompanySection from "./CompanySection";
import SvgImage from "./SvgImage.jsx";
import ContactUs from "../About/Contact.jsx";
import ProductsV2 from "./ProductsV2.jsx";
import AllMenu from './AllMenu.jsx';
import Colors from "../../constants/Colors.js";
import { useSelector } from "react-redux";

const Home = () => {
  const [selected, setSelected] = useState('');
  const theme = useSelector((state) => state.theme.value);
 
  return (
    <div className={`${theme ? `bg-[#e8fdfb]`:`bg-[#03091D]`}`}>
      <MainSection theme={theme} ></MainSection>
      <Features theme={theme}></Features>
      <TrackUser theme={theme}></TrackUser>
      {/* <Products></Products> */}
      <ProductsV2 theme={theme}></ProductsV2>

      <SvgImage theme={theme}></SvgImage>
      
      {selected ?<AllMenu selected={selected} theme={theme}></AllMenu>:<ContactUs  theme={theme} setSelected={setSelected}/>}
      
      <CompanySection theme={theme}></CompanySection>
     
    </div>
  );

};

export default Home;
