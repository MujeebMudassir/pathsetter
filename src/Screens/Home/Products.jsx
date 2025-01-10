import React, { useState, useEffect, useRef } from "react";
import Product1 from "../../assets/images/product1.jpg";
import Product2 from "../../assets/images/product2.jpg";
import "./styles/product.css";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState("product1");
  const [prevProduct, setPrevProduct] = useState("product1");
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

  const handleProductSelect = (productId) => {
    setPrevProduct(selectedProduct);
    setSelectedProduct(productId);
  };

  const getTransitionClass = (productId) => {
    if (selectedProduct === productId) {
      return "";
    }

    const direction = selectedProduct > prevProduct ? "left" : "right";
    return `transform transition-transform ${
      selectedProduct === productId
        ? `translate-x-0 `
        : direction === "left"
        ? `-translate-x-full`
        : `translate-x-full`
    }`;
  };

  return (
    <section className="p-5 mt-10 max-w-[1440px] m-auto overflow-hidden ">
      {/* Tab buttons */}
      <div className="flex justify-center gap-5 mb-5">
        <button
          className={`text-black text-nowrap rounded-full py-2 px-5 transition ${
            selectedProduct === "product1" ? "bg-white" : " text-white"
          }`}
          onClick={() => handleProductSelect("product1")}
        >
          Product 1
        </button>
        <button
          className={`text-black text-nowrap rounded-full py-2 px-5 transition ${
            selectedProduct === "product2" ? "bg-white" : " text-white"
          }`}
          onClick={() => handleProductSelect("product2")}
        >
          Product 2
        </button>
      </div>

      <div
        className={`relative  min-h-[700px] md:min-h-[400px]  overflow-hidden`}
      >
        <div
          ref={containerRef}
          className={`absolute  top-0 w-full ${getTransitionClass("product1")} `}
          style={{ transitionDuration: "500ms" }}
        >
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-5 text-white mt-5 `}
          >            
            <div className={`flex justify-center align-middle ${isVisible?"fancy":""}`}>
              <div
                className={`flex flex-col justify-center relative items-start opacity-0 p-4 rounded-lg ${
                  isVisible ? "right-in" : ""
                }`}
              >
                {/* <div className="w-full max-w-4xl absolute top-0 left-0 h-full">
                <iframe
                color="#fff"
                  src="https://rive.app/s/-Z2iV6q_7U_y7cmtuYj6aA/embed"
                  allow="autoplay"
                  className=" w-full h-full border-none"
                ></iframe>
              </div> */}
                <p className="product text-3xl mb-4 relative shadow-md">Data Dynamo</p>
                <p className="text-justify">
                  Our flagship data engine transforms disparate datasets into
                  unified whole-of-the-company insights, empowering employees to
                  make effective, data-driven decisions using our AI stack.
                </p>
                <button className="mt-2">Learn more &gt;</button>
              </div>
            </div>
            <div
              className={`flex justify-center relative items-center opacity-0 ${
                isVisible ? "left-in" : ""
              }`}
            >
              <img
                src={Product1}
                className="rounded-[10px] h-auto max-h-[300px] object-contain hover:scale-110 transition-all duration-500"
                alt="product 1"
              />
            </div>
          </div>
        </div>
        <div
          className={`absolute top-0 w-full ${getTransitionClass("product2")}`}
          style={{ transitionDuration: "500ms" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white mt-5">
            <div className="flex justify-center items-center">
              <img
                style={{ borderRadius: "5px" }}
                height={"300px"}
                className="rounded-[10px] h-auto max-h-[300px] object-contain hover:scale-110 transition-all duration-500 "
                src={Product2}
                alt="product 2"
              />
            </div>
          <div className="fancy">
            <div className="flex justify-center flex-col relative items-start p-4 rounded-lg h-full">
            {/* <div className="w-full max-w-4xl absolute top-0 left-0 h-full">
              <iframe
              color="#fff"
                src="https://rive.app/s/-Z2iV6q_7U_y7cmtuYj6aA/embed"
                allow="autoplay"
                className=" w-full h-full border-none"
              ></iframe>
            </div> */}
               
                  <p className="product text-3xl mb-4 relative">Mess-AI</p>
                  <p className="text-justify">
                    The AI-powered marketing messenger redefines marketing by
                    delivering targeted campaigns swiftly and effectively. Key
                    features of the Mess-AI are Hyper-Personalized Marketing
                    Behavioral Science-based Insights.
                  </p>
                  <button className="mt-2">Learn more &gt;</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
