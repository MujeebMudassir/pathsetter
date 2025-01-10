import Accordion from "./Accordion";
import FaqHeader from "./FaqHeader";
import bgPng from "../../assets/images/gradientPng.png";
import Colors from "../../constants/Colors";
import { useSelector } from "react-redux";

const FAQ = () => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <div className={`font-sans relative ${theme ? `bg-[${Colors.whiteTheme}]`:`bg-[${Colors.darkTheme}]`}`}>
      <img
        src={bgPng}
        alt=""
        className="absolute z-10  left-1/2 transform -translate-x-1/2 top-[15%] md:top-[5%] lg:top-0 w-full md:w-4/5"
      />
      <FaqHeader theme={theme}/>
      <Accordion theme={theme}/>
    </div>
  );
};

export default FAQ;
