import React, { useEffect, useRef } from "react";

const ProductSvgLine2 = ({ isVisible }) => {
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
      className="h-[100%] absolute top-1/2  translate-y-[-50%] -z-10"
    >
      <svg
        width="1897"
        height="595"
        viewBox="0 0 1897 595"
        fill="none"
        style={{ width: "100%", height: "100%" }}
      >
        <path
          ref={pathRef}
          d="M29.0001 188C29.0001 188 659.628 142.455 647.128 305.455C634.628 468.455 -51.1279 305.545 4.37209 462.545C59.8721 619.545 1112.87 613.975 1397.87 557.545C1518.52 533.656 1688.87 472.905 1732.37 444.045C1775.87 415.184 1868.87 357.045 1885.37 272.545C1901.87 188.045 1913.87 82.5446 1806.87 82.5445C1699.87 82.5445 1749.37 -22.9554 1660.37 6.04452"
          stroke="#fff"
          strokeWidth={15}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ProductSvgLine2;
