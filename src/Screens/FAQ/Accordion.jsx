import { useEffect, useRef, useState } from "react";
const Accordion = ({ theme }) => {
  const faq = [
    {
      question: "How does Pathsetter.AI ensure data security?",
      answer:
        "We implement rigorous standards and systematic processes to safeguard your data, ensuring its security and compliance with industry regulations.",
    },
    {
      question: "Is Pathsetter.AI compliant with data protection regulations?",
      answer:
        "Yes, we prioritize ethical AI development, including fairness, transparency, and accountability, to ensure compliance with relevant data protection regulations.",
    },
    {
      question: "What kind of support does Pathsetter.AI offer?",
      answer:
        "We offer comprehensive support, including deployment and configuration services, technical support, and training to ensure smooth integration and operation of our solutions.",
    },
    {
      question:
        "Can Pathsetter.AI solutions integrate with my existing systems?",
      answer:
        "Yes, our solutions are designed for easy integration and scalability, ensuring they work seamlessly with your existing systems and processes.",
    },
    {
      question: "How long does it take to implement Pathsetter.AI solutions?",
      answer:
        "The implementation timeline varies based on the complexity and scope of the project. Typically, our team works closely with your organization to ensure a smooth and timely deployment, often taking a few weeks to a few months.",
    },
    {
      question:
        "What kind of data do we need to provide for Pathsetter.AI solutions to work effectively?",
      answer:
        "The effectiveness of our solutions depends on the quality and comprehensiveness of the data you provide. We work with structured and unstructured data, including transactional data, customer information, text documents, images, and more.",
    },
    {
      question: "How do you ensure the accuracy of the AI models?",
      answer:
        "We utilize advanced machine learning algorithms and continuous model training with updated datasets to ensure high accuracy. Additionally, our models are tested rigorously to validate their performance before deployment.",
    },
    {
      question:
        "Can Pathsetter.AI solutions be customized to fit our specific needs?",
      answer:
        "Yes, our solutions are highly customizable. We work with you to understand your unique requirements and tailor our AI tools to meet your specific business objectives.",
    },
    {
      question:
        "How does Pathsetter.AI handle data privacy and compliance during AI implementation?",
      answer:
        "Data privacy and compliance are top priorities for us. We adhere to strict data protection protocols and ensure that all our processes comply with relevant regulations, such as GDPR and CCPA.",
    },
    {
      question:
        "What kind of training and support do you offer for using Pathsetter.AI solutions?",
      answer:
        "We provide comprehensive training and ongoing support to ensure your team can effectively use our solutions. This includes hands-on training sessions, detailed documentation, and dedicated support from our technical team.",
    },
    {
      question:
        "How does Pathsetter.AI integrate with our existing IT infrastructure?",
      answer:
        "Our solutions are designed to seamlessly integrate with your existing IT infrastructure. We offer APIs and other integration tools to ensure smooth data flow and interoperability with your current systems.",
    },
    {
      question: "Can Pathsetter.AI solutions scale as our data grows?",
      answer:
        "Yes, our solutions are built to scale with your organization's growth. Whether you are dealing with increasing data volumes or expanding operations, our AI tools can scale accordingly to meet your needs.",
    },
    {
      question:
        "What are the typical challenges during AI implementation, and how does Pathsetter.AI address them?",
      answer:
        "Common challenges include data quality issues, integration with existing systems, and user adoption. We address these by conducting thorough data assessments, offering robust integration tools, and providing comprehensive training and support.",
    },
    {
      question: "How do you measure the success of AI implementation?",
      answer:
        "Success is measured through key performance indicators (KPIs) specific to your business goals, such as improved decision-making accuracy, increased operational efficiency, reduced costs, and enhanced customer satisfaction.",
    },
    {
      question: "What industries can benefit from Pathsetter.AI's solutions?",
      answer:
        "Our solutions are versatile and can be applied across various industries, including healthcare, finance, retail, manufacturing, public sector, and more. We tailor our tools to address the unique challenges and opportunities within each industry.",
    },
    {
      question:
        "How does Pathsetter.AI handle updates and maintenance for AI models?",
      answer:
        "We provide regular updates and maintenance for our AI models to ensure they remain accurate and effective. Our team monitors the performance and retrains the models as necessary to incorporate new data and evolving business needs.",
    },
    {
      question:
        "What are the costs associated with implementing Pathsetter.AI solutions?",
      answer:
        "Costs vary depending on the scope and scale of the implementation. We offer flexible pricing models and work with you to ensure that our solutions provide a strong return on investment.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);
  const handleOpenClick = (i) => {
    if (i === openIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(i);
    }
  };

  useEffect(() => {
    const handleClick = (event) => {
      console.log("Window clicked:", event);
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpenIndex(null);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="relative max-w-[1350px] z-30  mx-auto w-full pb-20 md:mb-50 px-2">
      <div ref={containerRef}>
        {faq.map((item, index) => (
          <div
            key={index}
            className={`my-4 m-auto box-border w-full rounded-md border-2 ease-in duration-200 
              ${theme ? 'text-black' : 'text-white'} 
              ${theme ? 'bg-[#ace4da] border-black hover:bg-white hover:text-black' : 'bg-[#000824] hover:bg-gray-200 hover:text-[#03091D]'}
              ${openIndex === index 
                ? 'bg-[#03091D] text-black' 
                : openIndex === null 
                  ? 'bg-[#03091D] text-black' 
                  : theme 
                    ? 'hover:bg-white' 
                    : 'hover:bg-gray-200 hover:text-[#000824]'
              }`}
          >
            <button
              onClick={(event) => {
                handleOpenClick(index);
              }}
              className="w-full px-4 py-4 text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
            >
              <div className="flex items-center justify-between">
                <span className="questions font-sans font-[600] text-sm md:text-2xl">
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-500 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                openIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="px-4 py-2 text-[12px] md:text-[22px] font-[600] ">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
