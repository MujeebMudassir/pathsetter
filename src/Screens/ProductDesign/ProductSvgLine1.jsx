import React, { useEffect, useRef } from "react";

const ProductSvgLine1 = ({ isVisible }) => {
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
    <div ref={containerRef} className="h-[100%] absolute top-1/2 translate-y-[-50%] -z-50">
      <svg
        width="1922"
        height="598"
        viewBox="0 0 1922 578"
        fill="none"
        style={{ width: "100%", height: "100%" }}
      >
        <path
          ref={pathRef}
          d="M1921 376C1921 376 785 65.4999 1155.5 11.9999C1526 -41.5001 1796 119 1817.5 209C1839 299 1549.5 559.5 1304 576C1058.5 592.5 1 209 1 209"
          stroke="#fff"
          strokeWidth={15}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ProductSvgLine1;
