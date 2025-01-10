import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/Logonew.png";
import FixedNavbar from "../Home/FixedNavbar";
import image from "../../assets/images/newDash.png";
import Marquee from "react-fast-marquee";
import jove from "../../assets/images/JOVE2.png";
import DCM from "../../assets/images/DCM2.png";
import Google from "../../assets/images/R2.png";
import Quantela from "../../assets/images/Quantela2.png";
import Lares from "../../assets/images/Lares2.png";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaCircle, FaDollarSign, FaMinusCircle } from "react-icons/fa";
import { SiGoogledataproc } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import {
  MdKeyboardArrowRight,
  MdOutlineOutlinedFlag,
  MdOutlineStorage,
  MdOutlineSubject,
} from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { GoArrowSwitch, GoDotFill } from "react-icons/go";
import {
  RiArrowDropDownLine,
  RiArrowGoBackFill,
  RiArrowGoForwardFill,
} from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { LuSave } from "react-icons/lu";
import { VscEdit } from "react-icons/vsc";
import { TbLetterB, TbLetterI } from "react-icons/tb";
import { FiEdit, FiUnderline } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";
import { BsGlobe2 } from "react-icons/bs";
import "./ProductDesign2.css";
import SimpleLineChart from "../Home/SimpleLineChart";
import SimpleBarChart from "./SimpleBarChart";
import AnimationLotti from "../../assets/images/AnimationLotti.json";
import Robot from "../../assets/images/Robot.json";
import Robot2 from "../../assets/images/Robot2.json";
import Bulb from "../../assets/images/Bulb.json";
import ProductSvgLine1 from "./ProductSvgLine1";
import ProductSvgLine2 from "./ProductSvgLine2";
import ProductSvgLine3 from "./ProductSvgLine3";
import bgPng from "../../assets/images/gradientPng.png";
import motionIcon1 from "../../assets/images/motion-icon.svg";
import motionIcon2 from "../../assets/images/motion-icon2.svg";
import motionIcon3 from "../../assets/images/motion-icon3.svg";
import Button from 'react-bootstrap/Button';

import ProductSvgLine4 from "./ProductSvgLine4";
import { CiCircleChevRight } from "react-icons/ci";
import PlusIcon from "../../utils/PlusIcon";
import Lottie, { useLottie } from "lottie-react";
import Popup from "./popupcontact";
const ProductDesignInfo = () => {
  const [animated, setAnimated] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef2 = useRef(null);
  const [isVisible2, setIsVisible2] = useState(false);
  const containerRef3 = useRef(null);
  const [isVisible3, setIsVisible3] = useState(false);
  const containerRef4 = useRef(null);
  const [popupView, setPopupView] = useState(false);

  const createLottieOptions = (animationData) => ({
    animationData,
    loop: true,
    autoplay: false,
  });

  const createLottieInstance = (animationData) => {
    const options = createLottieOptions(animationData);
    return useLottie(options);
  };

  // Creating Lottie instances
  const { View: View1, play: play1, stop: stop1 } = createLottieInstance(Robot);
  const {
    View: View2,
    play: play2,
    stop: stop2,
  } = createLottieInstance(AnimationLotti);
  const {
    View: View3,
    play: play3,
    stop: stop3,
  } = createLottieInstance(Robot2);
  const { View: View4, play: play4, stop: stop4 } = createLottieInstance(Bulb);

  const handleMouseEnter = () => {
    play1();
    
  };

  const handleMouseLeave = () => {
    stop1();
  
  };
  const handleMouseEnter1 = () => {
    play2();
  };

  const handleMouseLeave1 = () => {
    stop2();
  };
  const handleMouseEnter2 = () => {
    play3();
  };

  const handleMouseLeave2 = () => {
    stop3();
  };
  const handleMouseEnter3 = () => {
    play4();
  };

  const handleMouseLeave3 = () => {
    stop4();
  };

  const [isVisible4, setIsVisible4] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  useEffect(() => {
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        setIsVisible2(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (containerRef2.current) {
      observer2.observe(containerRef2.current);
    }

    return () => {
      if (containerRef2.current) {
        observer2.unobserve(containerRef2.current);
      }
    };
  }, []);
  useEffect(() => {
    const observer3 = new IntersectionObserver(
      ([entry]) => {
        setIsVisible3(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (containerRef3.current) {
      observer3.observe(containerRef3.current);
    }

    return () => {
      if (containerRef3.current) {
        observer3.unobserve(containerRef3.current);
      }
    };
  }, []);
  useEffect(() => {
    const observer4 = new IntersectionObserver(
      ([entry]) => {
        setIsVisible4(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (containerRef4.current) {
      observer4.observe(containerRef4.current);
    }

    return () => {
      if (containerRef4.current) {
        observer4.unobserve(containerRef4.current);
      }
    };
  }, []);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollHeight(window.scrollY);
  //     console.log(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimated(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const [transform, setTransform] = useState(
    "translate3d(0px, 6.1707vh, 0px) rotateX(80.5122deg)"
  );

  useEffect(() => {
    const handleScroll = () => {
      // if(popupView){
      //   setPopupView(false)
      // }
      setOffsetY(window.scrollY);

      const scrollPosition = window.scrollY;

      // Define the maximum scroll position at which the animation should reach its final state
      const maxScrollPosition = 500; // Adjust this value based on your content height

      // Ensure that the scroll position does not exceed the maximum value
      const scrollFactor = Math.min(scrollPosition / maxScrollPosition, 1);

      // Interpolate the transform values based on the scroll factor
      const translateY = 6.1707 - scrollFactor * (6.1707 + 10); // Goes from 6.1707vh to -10vh
      const rotateX = 80.5122 - scrollFactor * 80.5122; // Goes from 80.5122deg to 0deg

      setTransform(
        `translate3d(0px, ${translateY}vh, 0px) rotateX(${rotateX}deg)`
      );
      console.log(
        `translate3d(0px, ${translateY}vh, 0px) rotateX(${rotateX}deg)`
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [popupView]);

  return (
    <div className="w-full overflow-hidden">
      <div className="h-[100vh]  max-w-[95vw] md:max-w-[1350px]  mx-auto w-full flex flex-col justify-center items-center relative text-white">
      <div className="absolute left-3 top-2 flex gap-3 items-center">
          <img src={logo} className="w-[300px] "></img>
        </div>
        <FixedNavbar />
        <img
          src={bgPng}
          alt=""
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full md:w-4/5 md:top-1/2"
        />
        <div
          className="relative  pt-10 pb-10 md:p-10"
          style={{
            transform: `translateY(${offsetY * 0.5}px) scale(${1 - offsetY * 0.0005
              })`,
            opacity: `${1 - offsetY * 0.003}`,
            scale: 1.5,
            transition: "all 0.5s linear",
          }}
        >
          <div className="absolute  top-0 left-0">
            <PlusIcon></PlusIcon>
          </div>
          <div className="absolute  top-[45%] right-0">
            <PlusIcon></PlusIcon>
          </div>
          <div className="absolute  rigt-0 bottom-0">
            <PlusIcon></PlusIcon>
          </div>
          <p
            className={`text-[20px]  text-center  opacity-0  ${animated ? "animate-slide-up2" : ""
              } `}
          >
            {/* <h3>The ultimate AI solution for
            </h3> */}
          </p>

          {/* <h1
            className={`text-[40px] font-bold opacity-0 text-center ${
              animated ? "animate-slide-up2" : ""
            } md:text-[45px]`}
          >
            AI-Driven Automation for Comprehensive
            <br />
            <div>
              <p>Insights</p>
              <p>Analyses</p>
              <p>Datasets</p>
              <p>Charts</p>
            </div>
            Generation.
          </h1> */}
          <h1 className={`text-[20px] font-bold opacity-0 text-center md:text-[45px] ${animated ? "animate-slide-up2" : ""
            } md:text-[45px]`}>
            The ultimate AI solution for
            <br />
            <div className="cube-container-2">
              <div className="cube-2">
                <div className="cube-face-2 front text-nowrap">Hyper-Personalised Campaigns</div>
                <div className="cube-face-2 back text-nowrap">Streamlined Data Management</div>
                <div className="cube-face-2 top text-nowrap">Data Transformation</div>
                <div className="cube-face-2 bottom text-nowrap">Actionable Insights</div>
              </div>
            </div>
            <br />
            Optimization
          </h1>

          <p
            className={`text-[10px] md:text-[20px] text-center  opacity-0  ${animated ? "animate-slide-up3" : ""
              } `}
          >
            <p className="text-[20px] mt-6">
            Achieve new levels of efficiency, <br/> growth, and success for your business.
            </p>
            {/* <button onClick={()=>{setPopupView(!popupView)}} className="bg-purple-700 px-8 py-3 mt-7 rounded-3xl text-xl">
              GET A DEMO
            </button> */}
            <button onClick={() => setPopupView(true)} className="bg-purple-700 px-8 py-3 mt-7 rounded-3xl text-xl">
            Book a Demo 
            </button>
          </p>
        </div>
      </div>
            {popupView && <Popup setPopupView={setPopupView}/>}

      <div className="image-animation flex justify-center transition-all max-w-[95vw] h-[90vh]  mt-[-10vh] md:max-w-[1350px] mx-auto">
        <img
          src={image}
          className="w-[80%] h-full  rounded-lg md:rounded-3xl"
          style={{
            transform: transform,
            translate: "none",
            rotate: "none",
            objectFit: "contain",
            scale: "none",
            transition: "transform 0.5s linear",
            opacity: 1,
          }}
        />
      </div>

      <div className="grid md:grid-cols-[1fr_3fr] max-w-[95vw] md:max-w-[1350px] mx-auto justify-center items-center mt-10 mb-10">
        <p className="text-xl text-white text-center ">Our Clientele</p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#03091d] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#03091d] to-transparent z-10 pointer-events-none"></div>

          <Marquee className="relative z-0">
            <div className="max-w-[100px] md:max-w-[250px] mx-10">
              <img src={Lares} alt="lares" />
            </div>
            <div className="max-w-[100px] md:max-w-[250px] mx-10">
              <img src={Quantela} alt="quantela" />
            </div>
            <div className="max-w-[100px] md:max-w-[250px] mx-10">
              <img src={Google} alt="google" />
            </div>
            {/* <div className="max-w-[100px] md:max-w-[250px] mx-10">
              <img src={jove} alt="jove" />
            </div> */}
            {/* <div className="max-w-[100px] md:max-w-[250px] mx-10">
              <img src={DCM} alt="dcm" />
            </div> */}
          </Marquee>
        </div>
      </div>
      <div className="text-center max-w-[95vw] md:max-w-[1350px] mx-auto  flex flex-col justify-center items-center relative text-white">
        <button className="bg-sky-600 w-60 h-12 mt-7 rounded-3xl font-bold mb-6">
          MarketGenie
        </button>
        <h2
          className={`text-[40px] font-bold opacity-0 text-center ${animated ? "animate-slide-up2" : ""
            } md:text-[40px]`}
        >
          The Core Functionalities of MarketGenie
        </h2>
        <p className="text-2xl  mb-5">
        AI-driven solutions enable targeted campaigns and automate the conversion of unstructured data.
        </p>
      </div>
      <div className="relative -z-10" ref={containerRef}>
        <ProductSvgLine1 isVisible={isVisible}></ProductSvgLine1>
        <div className="outer-fancy-prod w-fit mx-auto">
          <div className="shadow-lg rounded-lg shadow-gray-700 product-glass mx-auto max-w-[95vw] md:max-w-[1350px] md:w-[80vw]">
            <div className="grid md:grid-cols-2 mx-auto w-full ">
              <div className="flex p-5 justify-center items-center flex-col w-full border-b-2  md:border-r-2 border-gray-700">
                <div className="group text-center  cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110">
                  <button className="border-2 border-blue-600 w-20 h-20 mt-7 rounded-full font-bold bg-gradient">
                    <AiFillThunderbolt
                      className="mx-auto "
                      color="white"
                      size={30}
                    />
                  </button>
                  <p className="text-white text-2xl mt-2 ">
                  Hyper-Personalized Marketing

                  </p>
                  <p className="text-white text-xl w-80 flex text-center mt-4">
                  Uses behavioural science-based insights to generate personalised marketing messages tailored to individual consumer data.
                  </p>
                </div>
              </div>
              <div className="flex p-5 justify-center items-center flex-col border-b-2 border-gray-700">
                <div className="group text-center transition ease-in-out hover:-translate-y-1 hover:scale-110">
                  <button className="border-2 border-blue-600 w-20 h-20 mt-1 rounded-full font-bold bg-gradient">
                    <SiGoogledataproc className="mx-auto" color="white" size={30} />
                  </button>
                  <p className="text-white text-2xl mt-2">
                  Data Structuring & Annotation
                  </p>
                  <p className="text-white text-xl w-80 flex text-center mt-4 mx-auto">
                  Organises and annotates data to improve accessibility and enhance usability across different systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 w-full  mx-auto rounded-b-lg ">
              <div className="flex p-5 justify-center items-center flex-col border-b-2 md:border-b-0 md:border-r-2  border-gray-700">
                <div className="group text-center transition ease-in-out hover:-translate-y-1 hover:scale-110">
                  <button className="border-2 border-blue-600 w-20 h-20 mt-7 rounded-full font-bold bg-gradient">
                    <MdOutlineOutlinedFlag
                      className="mx-auto "
                      color="white"
                      size={30}
                    />
                  </button>
                  <p className="text-white text-2xl mt-2 ">
                  Text and Image Recognition
                  </p>
                  <p className="text-white text-xl w-80 flex text-center mt-4">
                  Extracts and processes text and images from various sources to facilitate smooth data integration.
                  </p>
                </div>
              </div>
              <div className="flex p-5 justify-center items-center flex-col ">
                <div className="group text-center transition ease-in-out hover:-translate-y-1 hover:scale-110">
                  <button className="border-2 border-blue-600 w-20 h-20 mt-7 rounded-full font-bold bg-gradient">
                    <FaUser className="mx-auto" color="white" size={30} />
                  </button>
                  <p className="text-white text-2xl mt-2">Integration & Scalability</p>
                  <p className="text-white text-xl w-80 flex text-center mt-4">
                  Connects with existing systems and scales efficiently to support growing data and operational needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center md:max-w-[1350px] max-w-[90vw] mx-auto w-full flex flex-col justify-center items-center relative text-white mt-16">
        <p
          className={`text-[10px] md:text-[20px] text-center  opacity-0  ${animated ? "animate-slide-up3" : ""
            } `}
        >
          {/* <button className="bg-sky-600 px-5 h-12 mt-20 mb-6 rounded-3xl font-bold text-white">
          Discover Marketing Messenger in Action
          </button> */}
        </p>

        <h2
          className={`text-[20px] font-bold opacity-0 text-center text-white ${animated ? "animate-slide-up2" : ""
            } md:text-[40px]`}
        >
          Meet Your Marketing Campaign Specialist
        </h2>
        <p
          className={`text-[10px] md:text-[20px] text-center  opacity-0  ${animated ? "animate-slide-up3" : ""
            } `}
        >
          <p className="text-2xl  text-white">
          Elevate Your Marketing Strategy with Advanced AI Tools & Unmatched Innovation.
          </p>
        </p>
      </div>

      {/* <div className="relative overflow-hidden" ref={containerRef2}>
        <ProductSvgLine2 isVisible={isVisible2}></ProductSvgLine2>
        <div className="outer-fancy w-fit mx-auto ">
          <div className="grid max-w-[95vw] md:grid-cols-2 md:max-w-[1350px] md:w-[80vw] product-glass text-white mx-auto shadow-lg rounded-lg shadow-gray-700">
            <div className="p-5 md:p-10 w-full">
              <button className="bg-black border-gray-500 border-2 w-8 h-9 flex justify-center items-center rounded-md">
                <img src={motionIcon2} alt="" />
              </button>
              <p className=" md:text-[30px] mt-5 font-semibold">Live Text Editor.</p>
              <p className="text-white text-2xl py-5">
                Ability to understand and generate content in different
                languages allows businesses to expand their reach and appeal to
                a wider audience.
              </p>
              <p className="flex items-center mt-3">
                <FaCheck className="mr-4 bg-cyan-200 text-blue-500 rounded-full w-8 h-8 p-2" />{" "}
                <span className=" text-xl">Dall-E, GPT or Ada</span>
              </p>
              <p className="flex items-center mt-3">
                <FaCheck className="mr-4 bg-cyan-200 text-blue-500 rounded-full w-8 h-8 p-2" />{" "}
                <span className=" text-xl">Unlimited Generation</span>
              </p>
              <p className="flex items-center mt-3">
                <FaCheck className="mr-4 bg-cyan-200 text-blue-500 rounded-full w-8 h-8 p-2" />{" "}
                <span className=" text-xl">Multilingual</span>
              </p>
            </div>
            <div className="p-3">
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <GoArrowSwitch className="text-white text-xl" />
                  <p>Register</p>
                </div>
                <div className="flex items-start gap-5">
                  <RiArrowGoBackFill className="text-white text-xl" />
                  <RiArrowGoForwardFill className="text-white text-xl" />{" "}
                  <CiEdit className="text-white text-2xl" />
                </div>
              </div>
              <div className="flex justify-between text-white mt-20">
                <p className="text-2xl">Untitled Document...</p>
                <div className="flex gap-2 mx-5">
                  <LuSave size={25} />
                  <p className="">Save to</p>
                </div>
              </div>
              <div className="flex my-5 justify-between">
                <button className="flex gap-10  bg-gray-400 rounded-lg items-center">
                  <p className="ml-5">H2</p>
                  <RiArrowDropDownLine size={30} />
                </button>

                <div className="flex  gap-4 text-white mt-3 ">
                  <FaCircle size={15} />
                  <VscEdit size={20} />
                  <TbLetterB size={20} />
                  <TbLetterI size={20} />
                  <FiUnderline size={20} />
                  <FaMinusCircle size={20} />
                  <MdOutlineStorage size={20} />
                  <MdOutlineSubject size={20} />
                </div>
              </div>
              <div>
                <p className="text-xl mt-8">
                  AI Editor refers to an editing tool or software developed
                  based on artificial intelligence technology. It assists
                  individuals in text editing, writing, proofreading, and
                  revision tasks using natural language processing, machine
                  learning, and other AI techniques.
                </p>
              </div>
              <div className="h-5 full-width bg-slate-800 mt-8"></div>
              <br />
              <div className="h-5 w-8/12 bg-slate-800"></div>
              <br />
              <div className="h-5 w-10/12 bg-slate-800"></div>
              <br />
              <div className="h-5 w-9/12 bg-slate-800"></div>
              <br />
              <div className="h-5 w-11/12 bg-slate-800"></div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="relative min-h-[600px]" ref={containerRef3}>
        <ProductSvgLine3 isVisible={isVisible3}></ProductSvgLine3>
        <div className="grid md:grid-cols-2 gap-10 max-w-[95vw] md:max-w-[1350px] md:w-[80vw] mx-auto text-white mt-8 mb-16 ">
          {/* <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="product-glass  border-b-[0px]  rounded-lg border-transparent  hover:border-white border-t-[1px] border-l-[1px] overflow-hidden transition-all ease-in"
          >
            <div className="product-bg-gradient transition-all ease-in h-full">
              <div className="p-10">
                <button className=" w-20 h-20 flex justify-center items-center rounded-md">
                  {View1}
                </button>
                <p className="text-[30px] md:text-[30px] font-semibold">
                
                </p>
                <p className="text-xl w-5/5">
                Reduce the cost of acquiring new customers with targeted, efficient strategies.
                </p>
              </div>
              <div className="p-10">
                <button className=" w-20 h-20 flex justify-center items-center rounded-md">
                  {View2}
                </button>
                <p className="text-[30px] md:text-[30px] font-semibold">
                Higher revenue per marketing dollar
                </p>
                <p className="text-xl w-5/5">
                Maximise revenue by optimising every dollar spent on marketing efforts.

                </p>
              </div>
            </div>
          </div> */}
          <div className="grid gap-10">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="product-glass  rounded-lg border-transparent  hover:border-white border-t-[1px] border-l-[1px] product-bg-gradient"
            >
              <div className="mt-10 mb-10 ml-10">
                 <button className=" w-20 h-20 flex justify-center items-center rounded-md">
                  {View1}
                </button>
                <p className="text-[30px] md:text-[30px] font-semibold">
                Lower customer acquisition cost
                </p>
                <p className="text-xl w-4/5 ">
                Reduce the cost of acquiring new customers with targeted, efficient strategies.
                </p>
              </div>
            </div>
            <div
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
              className="product-glass   rounded-lg border-transparent  hover:border-white border-t-[1px] border-l-[1px] product-bg-gradient"
            >
              <div className="mt-10 mb-10 ml-10">
                <button className="w-20 h-20 flex justify-center items-center rounded-md">
                  {View2}
                </button>
                <p className="text-[30px] md:text-[30px] font-semibold">
                Higher revenue per marketing dollar

                </p>
                <p className="text-xl w-4/5">
                Maximise revenue by optimising every dollar spent on marketing efforts.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-10">
            <div
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              className="product-glass  rounded-lg border-transparent  hover:border-white border-t-[1px] border-l-[1px] product-bg-gradient"
            >
              <div className="mt-10 mb-10 ml-10">
                <button className="w-20 h-20 flex justify-center items-center rounded-md">
                  {View3}
                </button>
                <p className="text-[30px] md:text-[30px] font-semibold">
                Convert data into AI-powered formats
                </p>
                <p className="text-xl w-4/5">
                Transform raw data into actionable insights with advanced AI-driven formats.
                </p>
              </div>
            </div>
            <div
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              className="product-glass   rounded-lg border-transparent  hover:border-white border-t-[1px] border-l-[1px] product-bg-gradient"
            >
              <div className="mt-10 mb-10 ml-10">
                <button className="w-20 h-20 flex justify-center items-center rounded-md">
                  {View4}
                </button>
                <p className="text-[30px] md:text-[30px] font-semibold">
                Increased customer retention

                </p>
                <p className="text-xl w-4/5">
                Boost customer loyalty and retention through personalised engagement strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative" ref={containerRef4}>
        <ProductSvgLine4 isVisible={isVisible4}></ProductSvgLine4>
        <div className="product-glass md:max-w-[1350px] md:w-[80vw] rounded-md px-5 w-fit mx-auto">
          <div>
            <div className="text-center  mx-auto w-full flex flex-col justify-center items-center relative text-white">
              <p
                className={`text-[10px] md:text-[20px] text-center  opacity-0  ${
                  animated ? "animate-slide-up3" : ""
                } `}
              >
                <button className="bg-sky-600 w-60 h-12 mt-20 mb-6 rounded-3xl font-bold text-white">
                  WHAT'S NEW
                </button>
              </p>

              <h2
                className={`text-[20px] font-bold opacity-0 text-center w-4/5 text-white ${
                  animated ? "animate-slide-up2" : ""
                } md:text-[60px]`}
              >
                Meet your new intelligent AI Assistant.
              </h2>
              <p
                className={`text-[10px] md:text-[20px] text-center  opacity-0  ${
                  animated ? "animate-slide-up3" : ""
                }`}
              >
                <p className="text-2xl mt-6 text-white mb-20">
                  Select an AI Platform and Input some basic information about
                  your idea, brand, product, or service, and the AI would
                  generate a unique, engaging piece of content in seconds.
                </p>
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2  max-w-[1350px]  text-white mx-auto">
            <div>
              <SimpleLineChart></SimpleLineChart>
            </div>
            <div className="p-10 flex flex-col justify-center items-center text-center">
              <div className="bg-cyan-500 w-16 h-16 mt-7 mb-5 rounded-full font-bold flex justify-center items-center">
                <FiEdit color="white" size={30} />
              </div>
              <p className=" md:text-[40px] font-semibold">
                Ability to generate content in different languages.
              </p>
              <p className="text-xl">
                Track a wide range of data points, including traffic, user
                behavior, sales revenue, and control user access.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 max-w-[95vw] md:max-w-[1350px] mx-auto mt-20">
            <div className="mt-10 text-white">
              <div className="p-10 flex flex-col justify-center items-center">
                <div className="bg-amber-300 w-16 h-16 mt-7 mb-5 rounded-full font-bold flex justify-center items-center">
                  <CgNotes color="white" size={30} />
                </div>
                <p className=" md:text-[40px] font-semibold text-center">
                  Monitor User Spendings and Balance.
                </p>
                <p className="text-xl text-center">
                  Create your own template or use pre-made templates and
                  examples for various content types and industries to help you
                  get started quickly.
                </p>
              </div>
            </div>
            <div className="bg-blue-500 bg-opacity-50 rounded-2xl ">
              <div className="flex justify-between text-white mt-5">
                <p className="text-2xl ml-4">Activity</p>
                <button className="flex gap-1 bg-slate-900 rounded-lg w-40 h-10 items-center mr-4">
                  <p className="ml-9 text-xl">Today</p>
                  <RiArrowDropDownLine className="mt-1" size={40} />
                </button>
              </div>
              <hr className="mt-5 border-gray-500" />
              <div className="mt-6 text-white">
                <p className="flex items-center mt-4 ml-4">
                  <FaCheck className="mr-4 bg-cyan-200 text-blue-500 rounded-full w-8 h-8 p-2 " />{" "}
                  <span className=" text-xl">
                    Jeffie Lewzey <span>purchased</span> "Ultimate Plan"
                  </span>
                  <GoDotFill className="ml-32" />
                </p>
                <p className="ml-16">3 hours ago</p>
                <hr className="border-gray-500 mt-6" />
                <p className="flex items-center mt-6 ml-4">
                  <FaCheck className="mr-4 bg-cyan-200 text-blue-500 rounded-full w-8 h-8 p-2" />{" "}
                  <span className=" text-xl">
                    Dunn Shane <span>submitted a ticket.</span> "How can i
                    Upgrade"
                  </span>
                  <GoDotFill className="ml-3" />
                </p>
                <p className="ml-16">3 hours ago</p>
                <hr className="border-gray-500 mt-6" />
                <p className="flex items-center mt-6 ml-4">
                  <FaCheck className="mr-4 bg-cyan-200 text-blue-500 rounded-full w-8 h-8 p-2" />{" "}
                  <span className=" text-xl">
                    Egan Poetz<span>registered new client as</span> "Trilia"
                  </span>
                  <GoDotFill className="ml-28" />
                </p>
                <p className="ml-16">3 hours ago</p>
                <hr className="border-gray-500 mt-6" />
                <p className="flex items-center mt-6 ml-4">
                  <FaCheck className="mr-4 bg-cyan-200 text-blue-500 rounded-full w-8 h-8 p-2" />{" "}
                  <span className=" text-xl">
                    Jeffie Lewzey <span>purchased</span> "Ultimate Plan"
                  </span>
                  <GoDotFill className="ml-32" />
                </p>
                <p className="ml-16 mb-10">3 hours ago</p>
              </div>
            </div>
          </div>
          <div className="grid  md:grid-cols-2 max-w-[95vw] md:max-w-[1350px]  text-white mx-auto mt-28">
            <div>
              <SimpleBarChart></SimpleBarChart>
            </div>
            <div className="flex flex-col justify-center text-center items-center">
              <button className="bg-sky-300 w-16 h-16 mt-7 mb-5 rounded-full font-bold flex justify-center items-center">
                <BsGlobe2 color="white" size={30} />
              </button>
              <p className=" md:text-[40px] font-semibold ">
                Full Affiliate/Referral System.
              </p>
              <p className="text-xl w-4/5">
                Securely process credit card or other electronic payment methods
                by using payment gateways.
              </p>
            </div>
          </div>
          <div className=" grid text-center md:grid-cols-2 max-w-[95vw] md:max-w-[1350px] mx-auto w-full justify-center text-white mt-5">
            <h2
              className={`text-[20px] font-bold  text-center  text-white  md:text-[60px]`}
            >
              Flexible Pricing.
            </h2>
            <p
              className={`text-[10px] md:text-[20px] opacity-0  ${
                animated ? "animate-slide-up3" : ""
              } `}
            >
              <p className="text-2xl mt-6 text-white ">
                Flexible and affording plans tailored to your needs. Save up to
                %20 for a limited time.
              </p>
            </p>
            <p
              className={`text-[10px] md:text-[20px] opacity-0  ${
                animated ? "animate-slide-up3" : ""
              } `}
            >
              <button className="bg-sky-600 w-40 h-10 mt-10 mb-6 rounded-3xl font-bold text-white">
                Monthly
              </button>
              <button className="bg-sky-600 w-40 h-10 mt-10 mb-6 ml-2 rounded-3xl font-bold text-white">
                Yearly
              </button>
            </p>
          </div>
        </div>
      </div> */}

      {/* <div>
        <div className="text-center max-w-[1350px] mx-auto w-full flex flex-col justify-center items-center relative text-white">
          <p
            className={`text-[10px] md:text-[20px] text-center  opacity-0  ${
              animated ? "animate-slide-up3" : ""
            } `}
          >
            <button className="bg-sky-600 px-5 h-11 mt-20 mb-6 rounded-3xl font-bold text-white">
              JOIN THE COMMUNITY
            </button>
          </p>

          <h2
            className={`text-[20px] font-bold opacity-0 text-center w-3/6 text-white ${
              animated ? "animate-slide-up2" : ""
            } md:text-[60px]`}
          >
            Trusted by millions in 40+ countries.
          </h2>
          <p
            className={`text-[10px] md:text-[20px] text-center  opacity-0  ${
              animated ? "animate-slide-up3" : ""
            } `}
          >
            <p className="text-2xl mt-6 text-white mb-20">
              Advanced text editor that supports rich text formatting Real-time
              suggestions and corrections for grammar, punctuation, and style
              while you are editing.
            </p>
          </p>
        </div>
      </div> */}
      <div>
        <p
          className={`text-[10px] md:text-[20px] text-center  opacity-0  ${animated ? "animate-slide-up3" : ""
            } `}
        >
          <button className="bg-sky-600 px-5 h-11 mt-20 mb-6 rounded-3xl font-bold text-white">
          Join the Community
          </button>
        </p>

        <h2
          className={`text-[20px] font-bold opacity-0 text-center  text-white ${animated ? "animate-slide-up2" : ""
            } md:text-[40px]`}
        >
          Supercharge Your Connections with Our Network
        </h2>
        <p
          className={`text-[10px] md:text-[20px] text-center  opacity-0  ${animated ? "animate-slide-up3" : ""
            } `}
        >
          <p className="text-2xl  text-white mb-5">
          Engage with industry leaders and peers to unlock new opportunities and drive collective success.

          </p>
        </p>
      </div>
      <div className="flex justify-center mb-10">
        <div className="flex bg-white w-[90%] md:w-[60%] justify-between rounded-full h-14">
          <button>
            <p className="text-xl text-black ml-6">Enter your email</p>
          </button>
          <button className="bg-sky-600 w-44 h-12 rounded-3xl mt-1 mr-1">
            <p className="text-xl flex ml-5">
              Start for free <MdKeyboardArrowRight size={30} />
            </p>
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductDesignInfo;
