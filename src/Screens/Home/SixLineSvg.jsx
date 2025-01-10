import { IoMdSettings } from "react-icons/io";
import { FaUnlock } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { FaUserEdit } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import logo from "../../assets/images/pathsetterLogo.png";
import "./styles/Features.css";
import React, { useEffect, useRef } from "react";
import circle from "../../assets/images/circleIcon.png";
import logoBlack from "../../assets/images/logoBlackMini.png";

const SixLineSvg = ({ isVisible, theme }) => {
  const items = [
    {
      text: "User-Centric Design",
      icon: <AiFillThunderbolt size={20} color="ad5311" />,
      bgColor: `${theme ? "#FCFFB6" : "#2d211e"}`,
      position: "image1",
    },
    {
      text: "Cost-Effective AI Solutions",
      icon: <FaUserEdit size={20} color="657f39" />,
      bgColor: `${theme ? "#1EFFA9" : "#26332d"}`,
      position: "image2",
    },
    {
      text: "Scalable Technology Solutions",
      icon: <GiArtificialIntelligence size={20} color="ce49de" />,
      bgColor: `${theme ? "#D8C3FD" : "#301a46"}`,
      position: "image3",
    },
    {
      text: "Ethical AI Development",
      icon: <VscGraph size={20} color="c6b971" />,
      bgColor: `${theme ? "#868686" : "#323332"}`,
      position: "image4",
    },
    {
      text: "Data Security Assurance",
      icon: <FaUnlock size={20} color="784eaa" />,
      bgColor: `${theme ? "#C6C3FF" : "#262147"}`,
      position: "image5",
    },
    {
      text: "Advanced Analytics Capabilities",
      icon: (
        <IoMdSettings size={20} color={`${theme ? "#029E71" : "68dac8"}`} />
      ),
      bgColor: `${theme ? "#6BFFD5" : "#1e3a47"}`,
      position: "image6",
    },
  ];

  // const pathRefs = useRef(Array.from({ length: 6 }, () => React.createRef()));

  // useEffect(() => {
  //   pathRefs.current.forEach((ref, index) => {
  //     const length = ref.current.getTotalLength();
  //     console.log(length, `length${index + 1}`);
  //     ref.current.style.strokeDasharray = `10 ${length}`; // 10px segment followed by the rest
  //     ref.current.style.strokeDashoffset = length;
  //   });
  // }, []);
  useEffect(() => {
    const elements = document.querySelectorAll("[data-bg-color]");
    elements.forEach((element) => {
      const bgColor = element.getAttribute("data-bg-color");
      element.style.setProperty("--bg-color", bgColor || "transparent");
    });
  }, [theme]); // Add relevant dependencies
  return (
    <div className={`six-line-svg ${isVisible && "line-animation"}`}>
      <img
        src={theme ? logoBlack : logo}
        className="image-center"
        data-bg-color={
          theme ? "rgba(25, 25, 25, 0.582)" : "rgba(255, 255, 255, 0.582) "
        }
        alt="logo"
      />

      {items.map((item, i) => {
        return (
          <div
            key={i}
            data-bg-color={
              theme ? "rgba(25, 25, 25, 0.582)" : "rgba(255, 255, 255, 0.582) "
            }
            className={`w-[135px] h-[135px] flex flex-col justify-center items-center svg-glass bg-[${
              theme ? "#ace4da" : ""
            }] rounded-[15%] image-end ${item.position}`}
          >
            <div
              className={`relative h-[50px] w-[50px] rounded-[50%] flex justify-center items-center mt-5 `}
              style={{ backgroundColor: item.bgColor }}
            >
              {item.icon}
            </div>
            <p
              className={`relative text-[13px] ${
                theme ? "text-black" : "text-white"
              } text-center  font-semibold m-2`}
            >
              {item.text}
            </p>
          </div>
        );
      })}
      <svg
        width="363"
        height="269"
        viewBox="0 0 343 239"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="line z-50"
          strokeWidth={2}
          d="M0 1C0 1 59.1724 1 61.2857 1C63.399 1 64.6611 1.43217 66.2167 2.52113C67.7724 3.61008 77.5738 13.6322 112.005 48.9155L143 82"
          stroke={`${theme ? "#000" : "#fff"}`}
        />
        {/* copy  */}
        <path
          strokeWidth={1}
          id="path1"
          className="-z-10"
          d="M0 1C0 1 59.1724 1 61.2857 1C63.399 1 64.6611 1.43217 66.2167 2.52113C67.7724 3.61008 77.5738 13.6322 112.005 48.9155L143 82"
          stroke="rgba(255, 255, 255, 0.18)"
        />
        {/*running stroke  */}
        {/* <path  ref={pathRefs.current[0]} className="running-animated-path" strokeWidth={10} d="M0 1C0 1 59.1724 1 61.2857 1C63.399 1 64.6611 1.43217 66.2167 2.52113C67.7724 3.61008 77.5738 13.6322 112.005 48.9155L143 82" stroke="black" fill="none" /> */}

        <circle
          cx="0"
          cy="0"
          r="7"
          fill={`${theme ? "#fff" : "#000"}`}
          stroke={`${theme ? "#000" : "#fff"}`}
          strokeWidth="2"
        >
          <animateMotion
            begin={"2s"}
            repeatCount="indefinite"
            dur="4s"
            keyPoints="1;0"
            keyTimes="0;1"
          >
            <mpath href="#path1" />
          </animateMotion>
        </circle>

        <path
          className="line"
          strokeWidth={2}
          d="M343 1C343 1 284.241 1 282.143 1C280.044 1 278.791 1.43217 277.246 2.52113C275.702 3.61008 265.969 13.6322 231.778 48.9155L201 82"
          stroke={`${theme ? "#000" : "#fff"}`}
        />
        {/* copy  */}
        <path
          strokeWidth={1}
          id="path2"
          className="-z-10"
          d="M343 1C343 1 284.241 1 282.143 1C280.044 1 278.791 1.43217 277.246 2.52113C275.702 3.61008 265.969 13.6322 231.778 48.9155L201 82"
          stroke="rgba(255, 255, 255, 0.18)"
        />
        {/*running stroke  */}
        {/* <path ref={pathRefs.current[1]} className="running-animated-path" strokeWidth={10}  d="M343 1C343 1 284.241 1 282.143 1C280.044 1 278.791 1.43217 277.246 2.52113C275.702 3.61008 265.969 13.6322 231.778 48.9155L201 82" stroke="black"/> */}

        <circle
          cx="0"
          cy="0"
          r="7"
          fill={`${theme ? "#fff" : "#000"}`}
          stroke={`${theme ? "#000" : "#fff"}`}
          strokeWidth="2"
        >
          <animateMotion
            begin={"2s"}
            repeatCount="indefinite"
            dur="4s"
            keyPoints="1;0"
            keyTimes="0;1"
          >
            <mpath href="#path2" />
          </animateMotion>
        </circle>

        <path
          className="line"
          strokeWidth={2}
          d="M343 238C343 238 284.241 238 282.143 238C280.044 238 278.791 237.568 277.246 236.479C275.702 235.39 265.969 225.368 231.778 190.085L201 157"
          stroke={`${theme ? "#000" : "#fff"}`}
        />
        {/* copy  */}
        <path
          strokeWidth={1}
          id="path3"
          className="-z-10"
          d="M343 238C343 238 284.241 238 282.143 238C280.044 238 278.791 237.568 277.246 236.479C275.702 235.39 265.969 225.368 231.778 190.085L201 157"
          stroke="rgba(255, 255, 255, 0.18)"
        />
        {/* running stroke  */}
        {/* <path ref={pathRefs.current[2]} className="running-animated-path" strokeWidth={10} d="M343 238C343 238 284.241 238 282.143 238C280.044 238 278.791 237.568 277.246 236.479C275.702 235.39 265.969 225.368 231.778 190.085L201 157" stroke="black"/> */}

        <circle
          cx="0"
          cy="0"
          r="7"
          fill={`${theme ? "#fff" : "#000"}`}
          stroke={`${theme ? "#000" : "#fff"}`}
          strokeWidth="2"
        >
          <animateMotion
            begin={"2s"}
            repeatCount="indefinite"
            dur="4s"
            keyPoints="1;0"
            keyTimes="0;1"
          >
            <mpath href="#path3" />
          </animateMotion>
        </circle>

        <path
          className="line"
          strokeWidth={2}
          d="M0 238C0 238 59.1724 238 61.2857 238C63.399 238 64.6611 237.568 66.2167 236.479C67.7724 235.39 77.5738 225.368 112.005 190.085L143 157"
          stroke={`${theme ? "#000" : "#fff"}`}
        />
        {/* copy  */}
        <path
          strokeWidth={1}
          id="path4"
          className="-z-10"
          d="M0 238C0 238 59.1724 238 61.2857 238C63.399 238 64.6611 237.568 66.2167 236.479C67.7724 235.39 77.5738 225.368 112.005 190.085L143 157"
          stroke="rgba(255, 255, 255, 0.18)"
        />
        {/* running stroke  */}
        {/* <path ref={pathRefs.current[3]} className="running-animated-path" strokeWidth={10} d="M0 238C0 238 59.1724 238 61.2857 238C63.399 238 64.6611 237.568 66.2167 236.479C67.7724 235.39 77.5738 225.368 112.005 190.085L143 157" stroke="black"/> */}

        <circle
          cx="0"
          cy="0"
          r="7"
          fill={`${theme ? "#fff" : "#000"}`}
          stroke={`${theme ? "#000" : "#fff"}`}
          strokeWidth="2"
        >
          <animateMotion
            begin={"2s"}
            repeatCount="indefinite"
            dur="4s"
            keyPoints="1;0"
            keyTimes="0;1"
          >
            <mpath href="#path4" />
          </animateMotion>
        </circle>

        <path
          className="line"
          strokeWidth={2}
          d="M0 119L125 119"
          stroke={`${theme ? "#000" : "#fff"}`}
        />
        {/* copy  */}
        <path
          strokeWidth={1}
          id="path5"
          className="-z-10"
          d="M0 119L125 119"
          stroke="rgba(255, 255, 255, 0.18)"
        />
        {/* running stroke  */}
        {/* <path ref={pathRefs.current[4]} className="running-animated-path-short" strokeWidth={10} d="M0 119L125 119" stroke="black"/> */}

        <circle
          cx="0"
          cy="0"
          r="7"
          fill={`${theme ? "#fff" : "#000"}`}
          stroke={`${theme ? "#000" : "#fff"}`}
          strokeWidth="2"
        >
          <animateMotion
            begin={"2s"}
            repeatCount="indefinite"
            dur="4s"
            keyPoints="1;0"
            keyTimes="0;1"
          >
            <mpath href="#path5" />
          </animateMotion>
        </circle>

        <path
          className="line"
          strokeWidth={2}
          d="M343 119L219 121"
          stroke={`${theme ? "#000" : "#fff"}`}
        ></path>
        {/* copy  */}
        <path
          strokeWidth={1}
          id="path6"
          className="-z-10"
          d="M343 119L219 121"
          stroke="rgba(255, 255, 255, 0.18)"
        ></path>
        {/* running stroke  */}
        {/* <path ref={pathRefs.current[5]} className="running-animated-path-short" strokeWidth={10}  d="M343 119L219 121" stroke="black"></path> */}

        <circle
          cx="0"
          cy="0"
          r="7"
          fill={`${theme ? "#fff" : "#000"}`}
          stroke={`${theme ? "#000" : "#fff"}`}
          strokeWidth="2"
        >
          <animateMotion
            begin={"2s"}
            repeatCount="indefinite"
            dur="4s"
            keyPoints="1;0"
            keyTimes="0;1"
          >
            <mpath href="#path6" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
};

export default SixLineSvg;
