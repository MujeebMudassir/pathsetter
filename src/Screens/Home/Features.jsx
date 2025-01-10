import React, { useEffect, useRef, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { FaUnlock } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { FaUserEdit } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import "./styles/Features.css";
import SixLineSvg from "./SixLineSvg";
import { BsCircleFill } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import Colors from "../../constants/Colors";

const Features = ({theme}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing after visibility is set
          }
        });
      },
      { threshold: 0.4 }
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
  const containerRefs = useRef([]);
  const [isIcons, setIsIcons] = useState(Array(6).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = containerRefs.current.indexOf(entry.target);
            setIsIcons((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
            observer.unobserve(entry.target); // Stop observing after visibility is set
          }
        });
      },
      { threshold: 0.4 }
    );

    containerRefs.current.forEach((containerRef) => {
      if (containerRef) {
        observer.observe(containerRef);
      }
    });

    return () => {
      containerRefs.current.forEach((containerRef) => {
        if (containerRef) {
          observer.unobserve(containerRef);
        }
      });
    };
  }, []);
  const items = [
    {
      text: "User-Centric Design",
      icon: <AiFillThunderbolt size={50} color="ad5311" />,
      bgColor: `${theme? "#FCFFB6" : "#2d211e"}`,
    },
    {
      text: "Cost-Effective AI Solutions",
      icon: <FaUserEdit size={50} color="657f39" />,
      bgColor: `${theme? "#1EFFA9" : "#26332d"}`,
    },
    {
      text: "Scalable Technology Solutions",
      icon: <GiArtificialIntelligence size={50} color="ce49de" />,
      bgColor: `${theme? "#D8C3FD" : "#301a46"}`,
    },
    {
      text: "Ethical AI Development",
      icon: <VscGraph size={50} color="c6b971" />,
      bgColor: `${theme? "#868686" : "#323332"}`,
    },
    {
      text: "Data Security Assurance",
      icon: <FaUnlock size={50} color="784eaa" />,
      bgColor:  `${theme? "#C6C3FF" : "#262147"}`,
    },
    {
      text : "Advanced Analytics Capabilities",
      icon: <IoMdSettings size={50} color={`${theme? "#029E71" : "68dac8"}`} />,
      bgColor: `${theme? "#6BFFD5" : "#1e3a47"}`,
    },
  ];

  return (
    <div ref={containerRef}>
      <div className="grid p-5  gap-4  min-h-[100vh] max-w-[1440px] m-auto py-20  md:grid-cols-2 ml:p-0 md:py-20 overflow-hidden">
        <div
          className={`opacity-0 text-center md:text-left  flex flex-col items-center md:items-start justify-center ${isVisible ? "track-right-in" : ""
            }`}
        >
          {/* <p className="bg-[#151531] text-[#535a8a] p-2 rounded-md inline font-medium">
            Scalable Technology Solutions BUZ SOLUTIONS
          </p> */}
          <h2 className={`text-[50px] md:text-[70px] gradient-text bg-gradient-to-br from-[#01CEAD] via-[${Colors.tealColor}] to-purple-600 text-transparent bg-clip-text`}>
            Introducing the Next Wave of <br />Intelligent AI
          </h2>
          {/* <p className="text-[50px] font-medium bg-gradient-to-br from-green-400 via-blue-600 to-purple-600 text-transparent bg-clip-text">
            {" "}
            AI Modal
          </p> */}
          <p className={`${theme? "text-black" : "text-white"}`}>
            At Pathsetter.AI, we revolutionise the way businesses and public sector entities harness the power of their data. Our suite of AI-driven solutions transforms complex data into actionable insights, empowering you to make informed decisions and drive growth.
            <div style={{}}>
              {/* <div className="mt-5">
                <div className="flex items-center gap-3 mb-3">
                  <CiCircleCheck size={30} color="#5e6374"></CiCircleCheck>
                  <p className="text-[#5e6374]">User-Centric Design
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <CiCircleCheck size={30} color="#5e6374"></CiCircleCheck>
                  <p className="text-[#5e6374]">Cost-Effective AI Solutions</p>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <CiCircleCheck size={30} color="#5e6374"></CiCircleCheck>
                  <p className="text-[#5e6374]">Data Security Assurance
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <CiCircleCheck size={30} color="#5e6374"></CiCircleCheck>
                  <p className="text-[#5e6374]">Scalable Technology Solutions
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <CiCircleCheck size={30} color="#5e6374"></CiCircleCheck>
                  <p className="text-[#5e6374]">Advanced Analytics Capabilities
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <CiCircleCheck size={30} color="#5e6374"></CiCircleCheck>
                  <p className="text-[#5e6374]">Ethical AI Development
                  </p>
                </div>
              </div> */}
            </div>



            <br />
            {/* Our suite of AI-driven solutions transforms complex data into actionable insights, empowering you to make informed decisions and drive growth. 
                <span className="text-[#535a8a]">
                {" "}
                engaging piece of content
              </span>{" "}
              in seconds. */}
          </p>

        </div>

        <div
          className={`grid  grid-cols-2 pt-5 md:pt-0 lg:grid-cols-3 self-center gap-5 xl:hidden ${isVisible ? "track-left-in" : ""
            }`}
        >
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => (containerRefs.current[index] = el)}
              className={`relative  max-w-[250px]   flex flex-col justify-center items-center bg-[${theme? "#ace4da" : "" }] feature-glass  rounded-[15%] transform transition-transform duration-500 ${isIcons[index] ? "scale-100" : "scale-0"
                }`}
            >
              <div
                className={`relative h-[100px] w-[100px] rounded-[50%] flex justify-center items-center mt-5`}
                style={{ backgroundColor: item.bgColor }}
              >
                {item.icon}
              </div>
              <p className={`relative ${theme? "text-black" : "text-white"}  text-center mb-5 font-semibold mt-5`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div
          className={` pt-5 md:pt-0 opacity-0  self-center hidden xl:block ${isVisible ? "track-left-in" : ""
            }`}
        >
          <SixLineSvg isVisible={isVisible} theme={theme}></SixLineSvg>
        </div>
      </div>
    </div >
  );
};

export default Features;
