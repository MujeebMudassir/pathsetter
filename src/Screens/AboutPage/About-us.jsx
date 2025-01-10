import React, { useState, useEffect, useRef } from "react";
import FixedNavbar from "../Home/FixedNavbar";
// import logo1 from "../../assets/images/bilds.png";
import logo1 from "../../assets/images/bilds.jpg";
import logo from "../../assets/images/Logonew.png";
import img4 from "../../assets/images/Sridhar-Gadhi.jpg";
import img5 from "../../assets/images/saloni.jpeg";
import img6 from "../../assets/images/Srikar.png";
import img7 from "../../assets/images/Manohar.JPG";
import img8 from "../../assets/images/Deepti.jpeg";
import img9 from "../../assets/images/Nitisha.jpg";
import img10 from "../../assets/images/Esha_Gadhi.jpeg";
import img11 from "../../assets/images/Sivas.jpeg";
import img12 from "../../assets/images/Anirudh.jpg";
import img13 from "../../assets/images/Guhan.jpeg";
import img14 from "../../assets/images/Udayan.jpg";
import img15 from "../../assets/images/Aaryan.jpeg";
import img16 from "../../assets/images/Hemachandran.jpg";
import ImageGrid from "./ImageGrid";
import "./About-us.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import Lottie from "lottie-react";
import aboutbg from "../../assets/images/quick.json";
import ProductSvgLine1 from "../ProductDesign/ProductSvgLine1";
import ProductSvgLine3 from "../ProductDesign/ProductSvgLine3";
import Colors from "../../constants/Colors";
const AboutUs = () => {
  const images = [
    {
      image: img4,
      name: "Sridhar Gadhi",
      designation: "Founder & Managing Director",
      link: "https://www.linkedin.com/in/sridhargadhi/",
    },
    {
      image: img7,
      name: "Manohar Varanasi",
      designation: "Sr. Vice President,  Global Delivery ",
      link: "https://www.linkedin.com/in/vm2017/",
    },
    // {
    //   image: img5,
    //   name: "Saloni Jaju",
    //   designation: "Co-founder",
    //   link: "https://www.linkedin.com/in/saloni-jaju/",
    // },
    {
      image: img6,
      name: "Srikar Chintalagiri",
      designation: "Chief Operating Officer",
      link: "https://www.linkedin.com/in/srikarcv/",
    },
 
    {
      image: img8,
      name: "Deepti Dutt",
      designation: "Chief Strategy Officer",
      link: " https://www.linkedin.com/in/deepti-dutt/",
    },
    {
      image: img9,
      name: "Nitisha Baalay",
      designation: "Vice President, Business Operations & HR ",
      link: "https://www.linkedin.com/in/nitisha-baalay/",
    },
    // {
    //   image: img10,
    //   name: "Esha Gadhi",
    //   designation: "Marketing Associate",
    //   link: "https://www.linkedin.com/in/esha-gadhi-18aa55218/",
    // },
    // {
    //   image: img11,
    //   name: "Sivas Subramaniyan",
    //   designation: "Product & Operations Invest India & ISB",
    //   link: "https://www.linkedin.com/in/sivas-subramaniyan/",
    // },
    // {
    //   image: img12,
    //   name: "Aneerudh M",
    //   designation: "ML Engineer Tiagrajar College of Engg",
    //   link: "https://www.linkedin.com/in/aneerudh-m/",
    // },
    // {
    //   image: img13,
    //   name: "Guhan Ashok Ganesh",
    //   designation: "Product",
    //   link: "https://www.linkedin.com/in/guhan-ashok/",
    // },
    // {
    //   image: img14,
    //   name: "Udayan Ambwani",
    //   designation: "ML Engineer Georgia Tech",
    //   link: "https://www.linkedin.com/in/udayanambwani/",
    // },
    // {
    //   image: img15,
    //   name: "Aaryan Patel",
    //   designation: "ML Engineer IIIT, Trichy",
    //   link: "https://www.linkedin.com/in/aryan-p-patel/",
    // },
    // {
    //   image: img16,
    //   name: "Hemachandran G",
    //   designation: "ML Engineer Amrita University",
    //   link: "",
    // },
  ];
  const coreValues = [
    {
      title: "Outcome-Driven Excellence",
      description:
        "We are dedicated to delivering solutions that significantly increase our clients' productivity by seamlessly integrating advanced AI into their workflows to achieve meaningful outcomes.",
    },
    {
      title: "Empowerment Through Innovation",
      description:
        "We create AI technologies that enhance the capabilities of employees and end users, focusing on empowerment rather than replacement, and making their work and lives easier.",
    },
    {
      title: "Seamless Integration",
      description:
        "We prioritize the smooth integration of technology into our clients' existing systems, ensuring that our solutions enhance workflows without disruption and facilitate efficient transitions.",
    },
    {
      title: "Commitment to Privacy and Security",
      description:
        "We adhere strictly to data privacy principles, safeguarding both our clients' and their end consumers' data, and fostering trust and confidence in our solutions.",
    },
    {
      title: "Human-Centric Technology",
      description:
        "We design our AI solutions with a focus on the human experience, ensuring our technologies empower users rather than replace them, and respecting the value and contributions of human users.",
    },
  ];
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef3 = useRef(null);
  const [isVisible3, setIsVisible3] = useState(false);
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
  return (
    <div className="mb-20">
      <div className="relative">
        <div
          id="mainContainer"
          className="h-[9vh] max-w-[1350px] mx-auto w-full flex flex-col justify-center items-center relative text-white"
        >
          <div className="absolute left-3 top-2 flex gap-3 items-center">
            <img src={logo} className="w-[300px] "></img>
          </div>
          <FixedNavbar />
        </div>
      </div>

      <div className="relative w-full md:w-full">
        <img
          src={logo1}
          alt="not found"
          className="w-full h-[500px] object-cover mt-5"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-center bg-black bg-opacity-60 w-9/12 md:w-8/12 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold">
            Building Productivity-Enhancing Gen AI Products for Enterprises
            Worldwide
          </p>
        </div>
      </div>
      <div  ref={containerRef} className="relative ">
        <ProductSvgLine1 isVisible={isVisible}></ProductSvgLine1>
      <div className="w-[95%] md:w-9/12 mx-auto">
        <div className="mt-12  product-glass px-10 py-4 rounded-md">
          <p className={`text-5xl md:text-5xl text-center md:text-left font-bold gradient-text bg-gradient-to-br from-[#01CEAD] via-[${Colors.tealColor}] to-purple-600 mt-12 text-transparent bg-clip-text`}>
            Welcome to Pathsetter AI
          </p>
          <p className="text-white mt-8 mb-8">
            Empowering Productivity Through Seamless AI Solutions
          </p>
          <p className="text-white mt-8">
            We are dedicated to delivering outcome-driven solutions that
            significantly enhance our clients’ productivity. We seamlessly
            integrate advanced AI technologies into their workflows to drive
            innovation and efficiency. Our focus is on empowering users rather
            than replacing them. At Pathsetter AI, we believe in equipping
            employees and end users with tools that simplify their tasks and
            amplify their capabilities. Our technologies are designed to be
            empowerment tools, not replacements. We also adhere to stringent
            data privacy principles to safeguard consumer privacy and protect
            client data.
          </p>
        </div>
        <div className="mx-auto  product-glass px-10 py-4 rounded-md mt-5">
          <p className={`text-5xl md:text-5xl text-center md:text-left font-bold gradient-text bg-gradient-to-br from-[#01CEAD] via-[${Colors.tealColor}] to-purple-600 text-transparent bg-clip-text mt-5 mb-10`}>
            Company Overview
          </p>
          <p className="text-white">
            Pathsetter AI was founded with a bold mission: to democratize the AI
            revolution by providing affordable, cutting-edge generative AI
            solutions to organizations of all sizes. Inspired by our founder
            Sridhar Gadhi’s vision to create world-class AI products from India,
            we assembled a team of passionate AI/ML engineers committed to
            engaging with customers and crafting solutions that deliver
            tangible, high-value outcomes. Pathsetter AI has successfully
            developed and deployed innovative AI solutions, earning the trust of
            a prestigious roster of clients and demonstrating that world-class
            AI can be both accessible and transformative.
          </p>
        </div>
        <div className="mx-auto  ">
          <div className="md:grid md:grid-cols-2 gap-10">
            <div className=" product-glass  px-10 py-4 rounded-md mt-5">
              <p className={`text-5xl md:text-5xl text-center md:text-left font-bold gradient-text bg-gradient-to-br from-[#01CEAD] via-[${Colors.tealColor}] to-purple-600 text-transparent bg-clip-text mt-5 mb-10  `}>
                Mission
              </p>
              <p className="text-white">
                We aim to deliver the best value to our clients through
                AI-driven solutions that empower human users.
              </p>
            </div>
            <div className="product-glass px-10 py-4 rounded-md mt-5">
              <p className={`text-5xl md:text-5xl text-center md:text-left font-bold gradient-text bg-gradient-to-br from-[#01CEAD] via-[${Colors.tealColor}] to-purple-600 text-transparent bg-clip-text mt-5 mb-10  `}>
                Vision
              </p>
              <p className="text-white">
                To lead in creating AI solutions that transform industries and
                empower people globally.
              </p>
            </div>
          </div>
        </div>
      
      </div>
      </div>
      <div className="w-[95%] md:w-9/12 mx-auto">
          <p className={`text-5xl md:text-5xl text-center md:text-left font-bold gradient-text bg-gradient-to-br from-[#01CEAD] via-[${Colors.tealColor}] to-purple-600 text-transparent bg-clip-text mt-12 `}>
            Our Team
          </p>
          <ImageGrid images={images}></ImageGrid>
        </div>

      <div className="relative" ref={containerRef3}>
        <ProductSvgLine3 isVisible={isVisible3}></ProductSvgLine3>
        <div className="mx-auto w-9/12 flex flex-col justify-center items-center text-center ">
          <p className={`text-2xl md:text-5xl text-center md:text-left font-bold gradient-text bg-gradient-to-br from-[#01CEAD] via-[${Colors.tealColor}] to-purple-600 text-transparent bg-clip-text mt-12 mb-5 `}>
            Our Core Values{" "}
          </p>
          <p className="text-white mb-5">
            Based on our refined focus and principles, here are the core values
            of Pathsetter AI
          </p>
        </div>
        <div className="relative min-h-[600px]">
          <div className="grid md:grid-cols-2 gap-10 w-[95%] md:w-9/12 mx-auto text-white mt-10 mb-16">
            {coreValues.slice(0, 4).map((value, index) => (
              <CoreValue
                key={index}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
          <div className="text-white w-[95%] md:w-9/12 mx-auto flex justify-center">
            <CoreValue
              title={coreValues[4].title}
              description={coreValues[4].description}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;

const CoreValue = ({ title, description }) => {
  return (
    <div className="product-glass rounded-lg border-transparent hover:border-white border-t-[1px] border-l-[1px] product-bg-gradient">
      <div className="mt-10 mb-10 ml-10">
        <p className="text-[30px] md:text-[30px] font-semibold">{title}</p>
        <p className="text-xl w-4/5 mt-2">{description}</p>
      </div>
    </div>
  );
};
