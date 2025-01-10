import React, { useEffect, useRef } from "react";

const ProductSvgLine4 = ({ isVisible }) => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;
    path.style.transition = "stroke-dashoffset 5s ease-out"; // Adding transition

    const handleScroll = () => {
      if (isVisible) {
        const container = containerRef.current;
        const containerRect = container.getBoundingClientRect();

        const scrollProgress =
          (window.innerHeight - containerRect.top) / containerRect.height;

        if (scrollProgress >= 0 && scrollProgress <= 1) {
          const drawLength = pathLength * scrollProgress;
          path.style.strokeDashoffset = pathLength - drawLength;
        } else if (scrollProgress > 1) {
          path.style.strokeDashoffset = 0; // Complete the animation
        } else {
          path.style.strokeDashoffset = pathLength; // Reset the animation
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="h-[100%] w-[100%] absolute top-1/2 translate-y-[-50%] -z-10"
    >
      <svg
        width="1877"
        style={{ width: "100%", height: "100%" }}
        height="2382"
        viewBox="0 0 1877 2382"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M0.5 1C0.5 1 1872 263.5 1876.5 456.5C1881 649.5 -57.5 723.5 80 942.5C217.5 1161.5 1873.5 1219 1876.5 1436C1879.5 1653 -21.5 1882.5 80 2066.5C181.5 2250.5 1876.5 2381.5 1876.5 2381.5"
          stroke="#fff"
          strokeWidth={15}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ProductSvgLine4;
