import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import About from "./Screens/About/About.jsx";
import ProductsMain from "./Screens/Products/ProductsMain.jsx";
import FooterLines from "./Screens/Home/FooterLines.jsx";
import Footer from "./Screens/Home/Footer.jsx";
import FAQ from "./Screens/FAQ/FAQ.jsx";
import ToggleMenu from "./Screens/Home/ToggleMenu.jsx";
import bgTop from "./assets/images/gradientTop2.png";
import ProductDesign from "./Screens/ProductDesign/ProductDesign.jsx";
// import AboutUs from "./Screens/AboutPage/About-us.jsx";
import ContactUs from "./Screens/ContactUs/ContactUs.jsx";
import Popup from "./Screens/ProductDesign/popupcontact.jsx";
import ProductDesignInfo from "./Screens/ProductDesign/ProductDesign2.jsx";
import ThankYouPage from "./Screens/ThankYou/ThankYou.jsx";
import AllMenu from "./Screens/Home/AllMenu.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./store/themeSlice.js";
import ThemeSwitcher from "./Screens/components/ThemeSwitcher.jsx";
import AboutUs from "./Screens/AboutPage/AboutUs.jsx";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme !== null) {
      dispatch(setTheme(JSON.parse(storedTheme)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  //
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pathsetter" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsMain />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/DataDynamo" element={<ProductDesign />} />
        <Route path="/MarketGenie" element={<ProductDesignInfo />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs></ContactUs>} />
        <Route path="/popup" element={<Popup />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/AllMenu" element={<AllMenu />} />
      </Routes>
      <div className="fixed hidden lg:block right-5 top-5 z-[999]">

      <ThemeSwitcher/>
        </div>
      {/* <FixedNavbar></FixedNavbar> */}
      <img
        width="100%"
        src={bgTop}
        alt=""
        className="absolute -z-50 left-1/2 transform -translate-x-1/2 top-[-10%] sm:top-[-20%] md:top-[-50%] "
      />
      <ToggleMenu></ToggleMenu>
      <FooterLines></FooterLines>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
