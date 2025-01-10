import { useEffect, useRef, useState } from "react";
import card1 from "../../assets/images/product1.jpg";
import card2 from "../../assets/images/product2.jpg";

const Projects = () => {

    const containerRef = useRef([]);
    const [isImg, setIsImg] = useState(Array(4).fill(false));
    const images = [
        {
            src:card1
        },
        {
            src:card2
        },
        {
            src:card1
        },
        {
            src:card2
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const index = containerRef.current.indexOf(entry.target);
                setIsImg((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
                observer.unobserve(entry.target); // Stop observing after visibility is set
              }
            });
          },
          { threshold: 0.4 }
        );
    
        containerRef.current.forEach((containerRef) => {
          if (containerRef) {
            observer.observe(containerRef);
          }
        });
    
        return () => {
          containerRef.current.forEach((containerRef) => {
            if (containerRef) {
              observer.unobserve(containerRef);
            }
          });
        };
      }, []);

    return(
        <div className="max-w-[1350px] mx-auto mt-10 p-5">
            <h1 className="text-[40px] font-bold text-center text-white">Our Projects</h1>
            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        images.map((img, index)=>
                          <div key={index} className="h-50 w-50 max-h-50 rounded-lg overflow-hidden">
                            <img className="object-cover  h-full w-full"  ref={(el) => (containerRef.current[index] = el)} src={img.src} alt="" />
                          </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;