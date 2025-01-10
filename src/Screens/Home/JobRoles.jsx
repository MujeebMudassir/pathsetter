import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { GrNext, GrPrevious } from "react-icons/gr";
import jsonData from "../../assets/images/Pdf.json";

const JobRole = ({theme}) => {
  const rolesData = jsonData.data_2;
  const tableHeaders = jsonData.table;

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = [3, 2, 2];

  const startIndex = rowsPerPage
    .slice(0, currentPage - 1)
    .reduce((acc, cur) => acc + cur, 0);
  const endIndex = startIndex + rowsPerPage[currentPage - 1];
  const currentRoles = rolesData.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < rowsPerPage.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className={`${theme?`text-black`:`text-white`} ml-4`}>
      <p className="text-lg md:text-xl mb-3 md:mb-5">
        {jsonData.page_2.split(" ").join(" \u00A0 ")}
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-sky-600">
            <tr>
              <th className="text-sm md:text-xl font-semibold p-2 md:p-3">
                {tableHeaders.Colum_1}
              </th>
              <th className="text-sm md:text-xl font-semibold p-2 md:p-3">
                {tableHeaders.Colum_2}
              </th>
              <th className="text-sm md:text-lg font-medium p-2 md:p-3 text-center">
                {tableHeaders.Colum_3}
              </th>
            </tr>
          </thead>
          <tbody>
            {currentRoles.map((role, index) => (
              <tr key={index}>
                <td className="text-sky-600 text-sm md:text-xl font-semibold p-2 md:p-3">
                  {role.name}
                </td>
                <td className="p-2 md:p-3">
                  {role.data.map((task, i) => (
                    <p key={i} className="flex mb-2 text-sm md:text-base">
                      <GoDotFill className="mt-1 mr-2" />
                      {task}
                    </p>
                  ))}
                </td>
                <td className="p-2 md:p-3 text-center w-2/6 text-sm md:text-base">
                  {role.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Conditionally render this section only on the last page */}
      {currentPage === rowsPerPage.length && (
        <div className="flex flex-col md:flex-row border-t-2 mt-4">
          <p className="text-3xl md:text-5xl text-sky-600 font-semibold mt-4">
            68%
          </p>
          <p className="ml-0 md:ml-10 mt-2 md:mt-4 text-sm md:text-base">
            Average Gen AI automation potential across all roles for up to 95%
            accuracy 68% of task execution.
          </p>
        </div>
      )}

      <div className="flex items-center mt-4">
        <button
          className={`p-2 border-2 border-sky-600 text-white rounded-full ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <GrPrevious color={`${theme?"black":"white"}`} />
        </button>

        <span className="mx-4 text-sm md:text-xl">
          {currentPage}/{rowsPerPage.length}
        </span>

        <button
          className={`p-2 border-2 border-sky-600 text-white rounded-full ${
            currentPage === rowsPerPage.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={handleNextPage}
          disabled={currentPage === rowsPerPage.length}
        >
          <GrNext color={`${theme?"black":"white"}`} />
        </button>
      </div>
    </div>
  );
};

export default JobRole;
