// import React from "react";
// import bgTop from "../../assets/images/gradientTop2.png";
// import FixedNavbar from "../Home/FixedNavbar";
import logo from "../../assets/images/pathsetterLogo.png";

// const products = [
//   {
//     id: 1,
//     name: "Marketing Messenger - MessAI",
//     oneLiner:
//       "Marketing workflow automation and content generation tool, powered by behavioral sciences-fine tuned LLMs for each industry.",
//     keyHighlights: [
//       "Seamless campaign execution",
//       "Upload customer list and ask MessAI for filtering based on personas",
//       "Create personalized content for different personas",
//       "Fine Tuning AI based on your customer personas for hyperpersonalisation of campaigns",
//     ],
//   },
//   {
//     id: 2,
//     name: "Data Dynamo",
//     oneLiner:
//       "Build an AI analyst for CXOs to pull out data and insights on the various business functions within minutes.",
//     keyHighlights: [
//       "Seamless integration with company’s ERP systems",
//       "Interactive chat features to generate insights from across various functions such as sales, finance, HR and marketing",
//       "Custom building of the AI dashboard for each company",
//       "Dataset creation and annotation",
//     ],
//   },
// ];

// const brandKeyHighlights = [
//   "Custom solutioning",
//   "Hand Holding across the entire AI implementation process",
//   "Increased business efficiency for the clients",
// ];

// const ProductsMain = () => {
//   return (
//     <div className="bg-[#03091D] relative">

//       <div className=" text-white   max-w-[1350px] mx-auto w-full flex flex-col  items-center relative">
//       {/* <img
//           width="100%"
//           src={bgTop}
//           alt="bgtopimage"
//           className=" left-1/2 transform -translate-x-1/2 top-[-25%] md:top-[-20%] w-full absolute"
//         /> */}
//         <FixedNavbar></FixedNavbar>
//         <div className="absolute left-5 top-2 flex gap-3 items-center">
//           <img src={logo} className="h-[30px]"></img>
//           <p className="text-[40px] font-medium">Pathsetter</p>
//         </div>
//         <img
//           width="100%"
//           src={bgTop}
//           alt=""
//           className="absolute left-1/2 transform -translate-x-1/2 top-[-10%] md:top-[-40%] w-full"
//         />
//         <header className="text-center py-10 mt-20 h-[50vh] flex justify-center items-center flex-col">
//           <h1 className="text-5xl font-bold">Our AI Products</h1>
//           <p className="text-xl mt-4">
//             Revolutionizing business processes with cutting-edge AI solutions
//           </p>
//         </header>

//         <section className="w-full p-4 md:p-8">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="mb-16 p-8 bg-[#111827] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
//             >
//               <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
//               <p className="text-lg mb-6">{product.oneLiner}</p>
//               <h3 className="text-2xl font-semibold mb-2">Key Highlights:</h3>
//               <ul className="list-disc list-inside space-y-2">
//                 {product.keyHighlights.map((highlight, index) => (
//                   <li key={index}>{highlight}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </section>

//         <section className="self-start  p-8">
//           <h2 className="text-3xl font-semibold mb-4">Brand Key Highlights</h2>
//           <ul className="list-disc list-inside space-y-2">
//             {brandKeyHighlights.map((highlight, index) => (
//               <li key={index}>{highlight}</li>
//             ))}
//           </ul>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default ProductsMain;
import React, { useEffect, useState } from "react";
import FixedNavbar from "../Home/FixedNavbar";

const products = [
  {
    id: 1,
    name: "Data Dynamo",
    // oneLiner:
    //   "Marketing Messenger- Mess-AI- Marketing workflow automation and content generation tool, powered by behavioral sciences-fine tuned LLMs for each industry",
    description:
      "Build an AI analysts for CXOs to pull out data and insights on the various business functions within minutes",
    keyFeatures: [
      "Real-Time Data Integration",
      "Natural Language Processing (NLP)",
      "Pre-built Algorithms",
      "Dynamic Dashboards",
      "Drill-Down Capabilities",
      "Data fetching from non-digital sources",
      "Annotation of data",
    ],
    keyOutcomes: [
      "Action-oriented insights",
      "Custom platform for your organization",
      "Constant updating with evolving LLMs",
      "Insights from all data types- historical and disparate",
      "Comprehensive data correlations towards root-cause analysis",
    ],
    keyHighlights: [
      "Seamless integration with company’s ERP systems",
      "Interactive chat features to generate insights from across various functions such as sales, finance, HR and marketing",
      "Custom building of the AI dashboard for each company",
      "Dataset creation and annotation",
    ],
  },
  {
    id: 2,
    name: "Mess-AI",
    oneLiner:
      "Marketing workflow automation and content generation tool, powered by behavioral sciences-fine tuned LLMs for each industry",
    // description:
    //   "The AI-powered marketing messenger redefines marketing by delivering targeted campaigns swiftly and effectively.",
    keyFeatures: [
      "Hyper-Personalized Marketing",
      "Behavioral Science-based Insights",
      "Multi-Channel Delivery",
      "Real-Time Analytics",
      "Campaign Optimization",
    ],
    keyOutcomes: [
      "Lower cost per lead",
      "Lower customer acquisition cost",
      "Higher revenue per marketing dollar",
      "Increased customer retention",
    ],
    keyHighlights: [
      "Seamless campaign execution",
      "Upload customer list and ask MessAI for filtering based on personas",
      "Create personalized content for different personas",
      "Fine Tuning AI based on your customer personas for hyperpersonalisation of campaigns",
    ],
  },
  {
    id: 3,
    name: "Data Transformer",
    description:
      "Automates the conversion of unstructured data from diverse sources into structured datasets using advanced AI.",
    keyFeatures: [
      "Large Language Models",
      "Text and Image Recognition",
      "Data Structuring & Annotation",
      "Integration & Scalability",
      "Customizable Data Processing",
    ],
    keyOutcomes: [
      "Digitize your legacy analog data",
      "Convert data into AI-powered formats",
      "Enhance data accessibility and retrieval efficiency",
      "Improve data quality and accuracy",
    ],
  },
];

const brandKeyHighlights = [
  "Custom solutioning",
  "Hand Holding across the entire AI implementation process",
  "Increased business efficiency for the clients",
];

const ProductsMain = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimated(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className="min-h-screen bg-[#03091D] text-white max-w-[1350px] mx-auto w-full flex flex-col items-center relative ">
      <FixedNavbar></FixedNavbar>
      <div className="absolute left-5 top-2 flex gap-3 items-center">
        <img src={logo} className="h-[30px]"></img>
        <p className="text-[40px] font-medium">Pathsetter AI</p>
      </div>
      <header
        className={`text-center py-10 mt-20 h-[50vh] flex justify-center items-center flex-col`}
      >
        <h1
          className={`text-[40px] font-bold opacity-0 text-center ${
            animated ? "animate-slide-up2" : ""
          } md:text-[80px]`}
        >
          Our AI Products
        </h1>
        <p
          className={`text-[10px] md:text-[20px] text-center  opacity-0 ${
            animated ? "animate-slide-up3" : ""
          } `}
        >
          Revolutionizing business processes with cutting-edge AI solutions
        </p>
      </header>

      <section className=" mx-auto px-2 pt-8 w-full">
        {products.map((product) => (
          <div
            key={product.id}
            className="mb-16 p-2 md:p-8 bg-[#111827] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
            <p className="text-lg mb-2 italic">{product.oneLiner}</p>
            <p className="text-lg mb-6">{product.description}</p>
            <h3 className="text-2xl font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              {product.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h3 className="text-2xl font-semibold mb-2">Key Outcomes:</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              {product.keyOutcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
            {product.keyHighlights && (
              <>
                <h3 className="text-2xl font-semibold mb-2">Key Highlights:</h3>
                <ul className="list-disc list-inside space-y-2">
                  {product.keyHighlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </section>

      <section className=" w-full mx-auto pt-8">
        <div className="mx-auto mb-5 p-2 md:p-8 bg-[#111827] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-semibold mb-4">Brand Key Highlights</h2>
          <ul className="list-disc list-inside space-y-2">
            {brandKeyHighlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ProductsMain;
