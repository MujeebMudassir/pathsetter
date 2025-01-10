import React from "react";
import SimpleBarChart from "../ProductDesign/SimpleBarChart";
import jsonData from "../../assets/images/Pdf.json";

const Investment = ({theme}) => {
  const description = jsonData.data_3.Description;

  const formatValue = (value) => {
    if (value.includes("m")) {
      return parseFloat(value.replace(/[^0-9.]/g, "")) * 1000000; // Convert million to actual value
    } else if (value.includes("K")) {
      return parseFloat(value.replace(/[^0-9.]/g, "")) * 1000; // Convert thousand to actual value
    }
    return parseFloat(value.replace(/[^0-9.]/g, ""));
  };

  const graph1Data = [
    {
      name: jsonData.data_3.graph_1_key_2,
      value: formatValue(jsonData.data_3.graph_1_key_1),
      formattedValue: jsonData.data_3.graph_1_key_1,
    },
    {
      name: jsonData.data_3.graph_1_key_4,
      value: formatValue(jsonData.data_3.graph_1_key_3),
      formattedValue: jsonData.data_3.graph_1_key_3,
    },
  ];

  const graph2Data = [
    {
      name: jsonData.data_3.graph_2_key_2,
      value: formatValue(jsonData.data_3.graph_2_key_1),
      formattedValue: jsonData.data_3.graph_2_key_1,
    },
    {
      name: jsonData.data_3.graph_2_key_4,
      value: formatValue(jsonData.data_3.graph_2_key_3),
      formattedValue: jsonData.data_3.graph_2_key_3,
    },
  ];

  return (
    <div className={`${theme?`text-black`:`text-white`} md:ml-4`}>
      <p className=" text-xl md:text-2xl font-semibold">
        {jsonData.page_3.split(" ").join("\u00A0")}
      </p>

      <p className=" mt-4 text-sm md:text-base">{description}</p>

      <div className="flex flex-col md:flex-row mt-10">
        <div className="w-full mb-8 md:mb-0">
          <SimpleBarChart data={graph1Data} color="#204ecf" />
        </div>
        <div className="w-full">
          <SimpleBarChart data={graph2Data} color="#0089f9" />
        </div>
      </div>
    </div>
  );
};

export default Investment;
