import React, { useEffect, useRef, useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { AiOutlineExclamationCircle } from "react-icons/ai";
// import DashboardImage from "../../assets/images/001.png";
import DashboardImage from "../../assets/images/dashboardImage.png";
import "./styles/TrackUser.css";
import Colors from "../../constants/Colors";
const TrackUser = ({ theme }) => {
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

  return (
    <div className="flex justify-center">
      <div
        ref={containerRef}
        className={`outer-fancy`}
        style={{ "--dynamic-color": theme ? "#000" : "#fff" }}
      >
        <div
          className={`grid z-40 ${
            theme ? "bg-[#ace4da]" : "bg-[#03091D] border-[#1e253f]"
          } md:grid-cols-2 gap-10 p-5 md:p-10 max-w-[1440px] m-auto  border-[0.2px] rounded-lg relative overflow-hidden track-radial-gradient`}
        >
          <div
            className={` opacity-0 ${
              isVisible ? "track-right-in outer-fancy" : ""
            } `}
            // style={{ '--bg-color': theme ? "#ace4da" : "transparent" }}
          >
            <div
              className={`flex flex-col justify-center ${
                theme ? "" : "border-[#1e253f] "
              } h-full z-10 border-[0.2px] rounded-lg overflow-hidden text-white opacity-0 ${
                isVisible ? "track-right-in" : ""
              }`}
            >
              {/* <img className={`h-full w-full object-cover bg-gradient-to-br from-[#01CEAD] via-[${Colors.tealColor}] to-purple-600`} src={DashboardImage} alt="DashboardImage" /> */}
              {/* <img className={`h-full w-full object-cover bg-[#009e83]`} src={DashboardImage} alt="DashboardImage" /> */}
              <img
                className={`h-full w-full object-cover `}
                src={DashboardImage}
                alt="DashboardImage"
              />
            </div>
          </div>
          <div className={`opacity-0 ${isVisible ? "track-left-in" : ""} `}>
            <p
              className={`${
                theme ? "bg-[#25e1bf]" : "bg-[#151531]"
              } text-[#535a8a] p-2 rounded-md inline font-medium`}
            >
              DASHBOARD
            </p>
            <p
              className={`text-center md:text-left text-[50px] font-medium ${
                theme ? "text-black" : "text-white"
              }`}
            >
              <span
                className={`gradient-text bg-gradient-to-br ${theme? `from-[#197667] via-[#005446] to-[${Colors.tealColor}]` : `from-[#01CEAD] via-[#01CEAD] to-[${Colors.tealColor}]`}  text-transparent bg-clip-text`}
              >
                We Define the Path to Success in the Age of the AI Revolution
              </span>
            </p>
            <p className={`${theme ? "text-black" : "text-white"}`}>
              {/* To excel in the rapidly evolving AI landscape <span className="text-[#535a8a]">valuable insights</span>{" "}
              into customer behavior,
              <br />
              identity areas for improvement, manage support
              <br />
              requests and make data-driven decisions. */}
              To excel in the rapidly evolving AI landscape, it’s essential to
              focus on three pivotal areas that drive success. These insights
              offer a strategic framework to harness AI’s full potential,
              keeping your organisation ahead of the curve.
            </p>
            <div className="mt-5">
              <div className="flex items-center gap-3 mb-3">
                <CiCircleCheck
                  size={30}
                  color={`${theme ? "#000" : "#fff"}`}
                ></CiCircleCheck>
                <p className={`${theme ? "text-black" : "text-white"}`}>
                  Strategic Data Utilisation
                </p>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <CiCircleCheck
                  size={30}
                  color={`${theme ? "#000" : "#fff"}`}
                ></CiCircleCheck>
                <p className={`${theme ? "text-black" : "text-white"}`}>
                  Re-thinking the Value Chain
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CiCircleCheck
                  size={30}
                  color={`${theme ? "#000" : "#fff"}`}
                ></CiCircleCheck>
                <p className={`${theme ? "text-black" : "text-white"}`}>
                  Human-Centric AI
                </p>
              </div>
            </div>
            <button className="absolute right-4 bottom-4">
              <CiSquarePlus size={30} color="#5e6374"></CiSquarePlus>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
// const LineGraph = () => {
//   // Sample data for the graph
//   const data = [50, 70, 30, 90, 60, 40];

//   return (
//     <div className="flex justify-center gap-5 items-center h-64  p-4 rounded-md shadow-md">
//       <div className="relative flex flex-col items-center">
//         <div>
//           <div
//             className="h-10 w-1 rounded-lg"
//             style={{ background: "linear-gradient(180deg, #a855f7, #6b21a8)" }}
//           ></div>
//           <div className="mt-2 h-10 w-1 bg-purple-700 rounded-lg opacity-50 transform scale-y-[-1] bg-gradient-to-b from-purple-700 to-transparent"></div>
//         </div>
//         <p className="text-purple-400 text-[13px] mt-3">50</p>
//       </div>
//       <div className="relative flex flex-col items-center">
//         <div>
//           <div
//             className="h-10 w-1 rounded-lg"
//             style={{ background: "linear-gradient(180deg, #a855f7, #6b21a8)" }}
//           ></div>
//           <div className="mt-2 h-10 w-1 bg-purple-700 rounded-lg opacity-50 transform scale-y-[-1] bg-gradient-to-b from-purple-700 to-transparent"></div>
//         </div>
//         <p className="text-purple-400 text-[13px] mt-3">50</p>
//       </div>
//       <div className="relative flex flex-col items-center">
//         <div>
//           <div
//             className="h-10 w-1 rounded-lg"
//             style={{ background: "linear-gradient(180deg, #a855f7, #6b21a8)" }}
//           ></div>
//           <div className="mt-2 h-10 w-1 bg-purple-700 rounded-lg opacity-50 transform scale-y-[-1] bg-gradient-to-b from-purple-700 to-transparent"></div>
//         </div>
//         <p className="text-purple-400 text-[13px] mt-3">50</p>
//       </div>
//       <div className="relative flex flex-col items-center">
//         <div>
//           <div
//             className="h-10 w-1 rounded-lg"
//             style={{ background: "linear-gradient(180deg, #a855f7, #6b21a8)" }}
//           ></div>
//           <div className="mt-2 h-10 w-1 bg-purple-700 rounded-lg opacity-50 transform scale-y-[-1] bg-gradient-to-b from-purple-700 to-transparent"></div>
//         </div>
//         <p className="text-purple-400 text-[13px] mt-3">50</p>
//       </div>
//       <div className="relative flex flex-col items-center">
//         <div>
//           <div
//             className="h-10 w-1 rounded-lg"
//             style={{ background: "linear-gradient(180deg, #a855f7, #6b21a8)" }}
//           ></div>
//           <div className="mt-2 h-10 w-1 bg-purple-700 rounded-lg opacity-50 transform scale-y-[-1] bg-gradient-to-b from-purple-700 to-transparent"></div>
//         </div>
//         <p className="text-purple-400 text-[13px] mt-3">50</p>
//       </div>
//       <div className="relative flex flex-col items-center">
//         <div>
//           <div
//             className="h-10 w-1 rounded-lg"
//             style={{ background: "linear-gradient(180deg, #a855f7, #6b21a8)" }}
//           ></div>
//           <div className="mt-2 h-10 w-1 bg-purple-700 rounded-lg opacity-50 transform scale-y-[-1] bg-gradient-to-b from-purple-700 to-transparent"></div>
//         </div>
//         <p className="text-purple-400 text-[13px] mt-3">50</p>
//       </div>
//       <div className="relative flex flex-col items-center">
//         <div>
//           <div
//             className="h-10 w-1 rounded-lg"
//             style={{ background: "linear-gradient(180deg, #a855f7, #6b21a8)" }}
//           ></div>
//           <div className="mt-2 h-10 w-1 bg-purple-700 rounded-lg opacity-50 transform scale-y-[-1] bg-gradient-to-b from-purple-700 to-transparent"></div>
//         </div>
//         <p className="text-purple-400 text-[13px] mt-3">50</p>
//       </div>
//       <div className="relative flex flex-col items-center">
//         <div>
//           <div
//             className="h-10 w-1 rounded-lg"
//             style={{ background: "linear-gradient(180deg, #a855f7, #6b21a8)" }}
//           ></div>
//           <div className="mt-2 h-10 w-1 bg-purple-700 rounded-lg opacity-50 transform scale-y-[-1] bg-gradient-to-b from-purple-700 to-transparent"></div>
//         </div>
//         <p className="text-purple-400 text-[13px] mt-3">50</p>
//       </div>
//     </div>
//   );
// };

export default TrackUser;
