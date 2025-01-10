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
import { useSelector } from "react-redux";
import logoBlack from "../../assets/images/logoBlack.png"

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

    //   const data = [
        
    //        {
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
        
    //   ]




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
  const theme = useSelector((state) => state.theme.value);
  return (
    <div className={` ${theme ? `bg-[#e8fdfb]`:`bg-[#03091D]`}`}>
      <div className="relative">
        <div
          id="mainContainer"
          className="h-[9vh] max-w-[1350px] mx-auto w-full flex flex-col justify-center items-center relative text-white"
        >
          <div className="absolute left-3 top-2 flex gap-3 items-center">
            <img src={theme?logoBlack:logo} className="w-[250px] md:w-[300px]"></img>
          </div>
          <FixedNavbar />
        </div>
      </div>

      <div className="relative w-full md:w-full">
        <img
          // src=
          src="https://img.freepik.com/premium-photo/light-background-with-soft-multicolored-lines-generative-ai_169016-33972.jpg"
          alt="not found"
          className="w-full h-[500px] object-cover mt-5"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-center bg-black bg-opacity-20 w-9/12 md:w-8/12 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl">
            Empowering Enterprises with Next-Gen AI to Supercharge Productivity
            Quote from member of pathsetter execs highlighting the vision behind pathsetter

          </p>
        </div>
        </div>
                                         
        <div className={`${theme? "text-black" : "text-white"}  text-2xl pt-10 pl-10 md:pl-20 lg:pl-40 `}>
  <p>"I had a dream to build and scale one technology</p>
  <p>product that could help society."</p>

  <p className={`${theme? "text-black" : "text-white"} font-bold text-sm mt-6 md:text-base lg:text-lg`}>
    Sridhar Gadhi, Founder and Exec Chairman
  </p>
</div>
<div className="max-w-6xl px-10 md:pl-20 lg:pl-40 py-24 text-white"> 
  <p className={`${theme ? "text-black" : "text-white"} font-bold text-3xl md:text-2xl lg:text-3xl mb-4`}>
    From the Beginning
  </p>
  
  <p className={`${theme ? "text-black" : "text-white"} text-lg mb-4 md:text-md`}>
    Quantela was founded in 2015 as a simple dashboard company, working with other technology partners to help cities digitize their urban infrastructure. Over time, our dashboard evolved into an award-winning, custom-built smart city platform, supporting 100+ smart city projects across the Americas, EMEA, CIS, India, and APJ markets.
  </p>
  
  <p className={`${theme ? "text-black" : "text-white"} text-lg md:text-md`}>
    But we know our customers do not wake up wanting to buy technology; they want solutions to their challenges.
  </p>
</div>




        

<div className="max-w-7xl px-10 md:pl-20 lg:pl-40 py-10 flex flex-col md:flex-row items-start gap-8">
  
  <div className="w-full md:w-96"> 
    <img 
      src="https://img.freepik.com/premium-photo/business-meeting-with-emplyees_1108314-462194.jpg" 
      alt="Business meeting" 
      className="w-full h-auto object-cover"
    />
  </div>

  
  <div className="w-full md:w-3/5 text-white px-16"> 
    <h2 className={`${theme? "text-black" : "text-white"} text-2xl font-bold mb-4`}>...to where we are now.</h2>
    <p className={`${theme? "text-black" : "text-white"} text-md mb-4`}>
      Today, working with cities and towns; utilities, and public venues, our team of 300+ experts offer a vast array of outcomes business models through technologies like digital out of home insights, location insights, smart lighting, smart traffic, and digitized citizen services.
    </p>
    <p className={`${theme? "text-black" : "text-white"} text-md mb-4` }>
      Instead of selling technology to customers and leaving them with the burden of achieving their objectives; at Quantela, we hold ourselves accountable to delivering the outcomes they are seeking – from cleaner air and safer streets to operational efficiency and revenue generation. If we don’t deliver the desired outcome, we fail.
    </p>
    <p className={` ${theme? "text-black" : "text-white"} text-md `}>
      Over the last several months alone, we have helped our customers to increase medical response times to save lives; reduce traffic congestion to keep cities moving and created new revenue streams to tackle societal issues like homelessness.
    </p>
    <div className={`${theme? "border-black" : "border-white"} border-b-4  w-1/4 mt-4`}></div>
  </div>
</div>


<div className={`${theme? "text-black" : "text-white"} text-center font-bold text-3xl m-20`}>
<p>"AS much as you have to have vision-"</p>
<p>it is more important to be agile."</p>
<p className={`${theme? "text-black" : "text-white"} text-sm font-bold mt-6`}>Amr Salem, CEO</p>
</div>
  
           {/*  */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-20 w-full md:w-4/5 md:mx-auto py-8 text-white">

      <div className="w-full px-4 md:px-0 text-center md:text-left mt-20 mb-8 md:mb-0 md:mx-0 mx-auto">
  <p className={`${theme? "text-black" : "text-white"} text-md  max-w-xl mx-auto leading-relaxed` }>
    Pathsetter was founded with the vision of transforming how businesses harness AI. Initially focused on building a marketing automation tool, we worked with companies to streamline their marketing operations and unlock valuable insights from their data.
  </p>
  <p className={` ${theme? "text-black" : "text-white"} text-md  leading-relaxed mt-10 max-w-xl mx-auto `}>
    Over time, our platform has evolved into an innovative AI-driven solution, providing advanced enterprise data search and marketing intelligence to clients across a range of industries and global markets. But we know our clients don’t just want AI tools—they want solutions to their business challenges.
  </p>
</div>




<div className="grid grid-cols-3 gap-4 mx-auto max-w-xs sm:max-w-md md:max-w-full">
  <div className="row-span-2">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzH-V1Cc1YcBvbIjF0UBd5KnMRQAQyPU6sBw&s"
      alt="Team Image 1"
      className="rounded-lg w-full h-full object-cover"
    />
  </div>

  <div className="col-span-2 grid grid-cols-2 gap-4">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbq1IJ4ruE8LKqfoeuEHQe8IJR2ONNJHpR8g&s"
      alt="Team Image 2"
      className="rounded-lg w-full h-full object-cover"
    />
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB2XDQJpYhPH4Ak86pjqpN3Pq9MEjbOye65w&s" alt="Team Image 3"
      className="rounded-lg w-full h-full object-cover"
    />
  </div>

  <div className="col-start-2 col-end-4">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhgCtSfBnkwxbm13OHWwWt7wFlDJ2k2ntkdOzlb-IexwO25Jiv32PDDKCMGW6A0E4wonY&usqp=CAU" alt="Team Image 4"
      className="rounded-lg w-full h-auto object-cover"
    />
  </div>
</div>


</div>





<div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-28 w-full md:w-4/5 md:mx-auto py-8 text-white">
  

  <div className="grid grid-cols-2 grid-rows-2 gap-4 mb-8 md:mb-0 mx-auto max-w-xs sm:max-w-md md:max-w-full">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5ST-bR8RUw1aQl93Iir8hqU6qUNctDk3GoenivCLhcMclxTu1D07FqnDEDv92bvoJ6o&usqp=CAU"
      alt="Team"
      className="rounded-lg w-full h-full object-cover"
    />
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5ST-bR8RUw1aQl93Iir8hqU6qUNctDk3GoenivCLhcMclxTu1D07FqnDEDv92bvoJ6o&usqp=CAU"
      alt="Team"
      className="rounded-lg w-full h-full object-cover"
    />
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB2XDQJpYhPH4Ak86pjqpN3Pq9MEjbOye65w&s"
      alt="Team"
      className="rounded-lg w-full h-full object-cover"
    />
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmekf4miX3b04wr12D1-0zsVWt0dIyyBc1zCQxtPbEtPlsFLt__kb0pQVOULYCOUXypP4&usqp=CAU"
      alt="Team"
      className="rounded-lg w-full h-full object-cover"
    />
  </div>

 
 

  <div className="w-full px-8 md:px-0 text-center md:text-left mt-20 mb-8 md:mb-0 md:mx-0 mx-auto">
  <p className={`${theme? "text-black" : "text-white"} text-md  max-w-xl mx-auto leading-relaxed`}>
  Today, Pathsetter works with a diverse set of industries, including technology, finance and retail, to help businesses unlock the full potential of AI. With a dedicated team of experts, we offer robust solutions like personalised marketing automation, AI-powered business insights, and enterprise data search. </p>
  <p className={`${theme? "text-black" : "text-white"} text-md  leading-relaxed mt-10 max-w-xl mx-auto`}>
  We go beyond just delivering technology - at Pathsetterm we are committed to delivering results that align with our clients’ specific goals, from optimising marketing campaigns to driving operational efficiency and revenue growth. If we don’t deliver these outcomes, we haven’t succeeded. In recent months alone, we’ve helped our clients improve customer engagement by leveraging personalised AI solutions, uncover valuable data insights that transformed business decisions and drive measurable growth through smarter marketing strategies.  </p>
</div>


</div>

                       
                         <div className="text-white my-10 mx-auto">
  <p className={`${theme? "text-black" : "text-white"} text-4xl text-center m-10`}>Our Team</p>

  <div className="flex flex-wrap justify-center gap-2">
    {images.map((item, index) => (
      <div key={index} className="w-60 h-80 rounded-2xl overflow-hidden shadow-lg">
        <div className={`h-3/4  relative overflow-hidden`}>
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover transform transition duration-300 hover:scale-110"
          />
        </div>
        <div className="h-1/4 bg-red-100 p-4 flex-col items-center justify-center">
          <p className="text-blue-950 text-md font-bold text-center">{item.name}</p>
          <p className="text-black text-sm text-center">{item.designation}</p>
        </div>
      </div>
    ))}
  </div>
</div>

                   
    <div className="text-white flex flex-col md:flex-row justify-center items-center p-4">
  <p className={`${theme? "text-black" : "text-white"} text-xl md:text-3xl font-bold mb-4 md:mb-0 md:mr-8 text-center md:text-left`}>
    Interested in joining the team?
  </p>
  <button className={`${theme? "text-black" : "text-white"} bg-blue-800 py-3 px-6 md:px-10 rounded-full text-center`}>
    Join us
  </button>
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
