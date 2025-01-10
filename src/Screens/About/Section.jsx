import { useEffect, useRef, useState } from "react";
import "./styles/Section.css";

const Section = () => {
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
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
    <div className={"max-w-[1350px] mx-auto text-center overflow-hidden"}>
      <div ref={containerRef} >
        <h1
          className={`font-bold text-[40px] text-white text-center opacity-0 mb-10 ${
            animate ? "right-in" : ""
          }`}
        >
          About The Company
        </h1>
      </div>
      <div ref={containerRef} className="max-w-[50vw] m-auto ">
        <p
          className={`text-white text-[17px] opacity-0 ${
            animate ? "left-in" : ""
          }`}
        >
          At Pathsetter.AI, we revolutionize the way businesses and public
          sector entities harness the power of their data. Our suite of
          AI-driven solutions transforms complex data into actionable insights,
          empowering you to make informed decisions and drive growth. Explore
          our products to discover how we can help you navigate your data
          journey.
        </p>
      </div>
    </div>
  );
};

export default Section;
