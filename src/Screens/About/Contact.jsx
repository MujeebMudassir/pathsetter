import axios from "axios";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";

const initialUserDetail = {
  Phone: "",
  Email: "",
  Name: "",
  Company: "",
  Industry: "",
  Designation: "",
};

const initialErrors = {
  Email: "",
  Name: "",
  Company: "",
  Industry: "",
  Designation: "",
};

const words = [
  "E-commerce",
  "Technology",
  "Finance",
  "Healthcare",
  "Education",
];

const ContactUs = ({ setSelected, theme }) => {
  const [userDetail, setUserDetail] = useState(initialUserDetail);
  const [errors, setErrors] = useState(initialErrors);
  const [isFocused, setIsFocused] = useState(false);
  const [filteredWords, setFilteredWords] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prev) => ({ ...prev, [name]: value }));

    if (name === "Industry") {
      setFilteredWords(
        words.filter((word) => word.toLowerCase().includes(value.toLowerCase()))
      );
    }
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { ...initialErrors };

    if (!userDetail.Email) {
      newErrors.Email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(userDetail.Email)) {
      newErrors.Email = "Email address is invalid";
      isValid = false;
    }

    ["Name", "Company", "Industry", "Designation"].forEach((field) => {
      if (!userDetail[field]) {
        newErrors[field] = `${field} is required`;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setSelected(userDetail);
      try {
        const response = await axios.post(
          "https://pathsettermailer.onrender.com/lead-send-email",
          {
            name: userDetail.Name,
            email: userDetail.Email,
            phone: userDetail.Phone,
            industry: userDetail.Industry,
            orgName: userDetail.Company,
            designation: userDetail.Designation,
          }
        );
  
    
  
        // Reset form fields and errors
        setUserDetail(initialUserDetail);
        setErrors(initialErrors);
        setIsFocused(false);
        setFilteredWords([]);
  
        // Add your own logic to handle successful email
      } catch (error) {
        console.log("Failed to send email:", error);
      }
    }
  };

  return (
    <div className="max-w-[1100px] mx-auto w-full my-10 md:my-20 px-2">
      <h1
        className={`font-bold  text-[30px] ${
          theme ? "text-black" : "text-white"
        } text-center`}
      >
        QuickScan!
      </h1>
      <p
        className={`${
          theme ? "text-black" : "text-white"
        } text-[20px] text-center`}
      >
        Evaluate Your Industry Competitiveness with GenAI.
      </p>

      <form className="mt-10 flex justify-center" onSubmit={handleSubmit}>
        <div className="w-full">
          <div className="grid gap-x-16 md:gap-y-5 md:grid-cols-2">
            <InputField
              label="Industry"
              name="Industry"
              value={userDetail.Industry}
              error={errors.Industry}
              handleInputChange={handleInputChange}
              isFocused={isFocused}
              setIsFocused={setIsFocused}
              filteredWords={filteredWords}
              setUserDetail={setUserDetail}
              userDetail={userDetail}
              theme={theme}
            />
            <InputField
              label="Name"
              name="Name"
              value={userDetail.Name}
              error={errors.Name}
              handleInputChange={handleInputChange}
              theme={theme}
            />
            <InputField
              label="Designation"
              name="Designation"
              value={userDetail.Designation}
              error={errors.Designation}
              handleInputChange={handleInputChange}
              theme={theme}
            />
            <InputField
              label="Email"
              name="Email"
              value={userDetail.Email}
              error={errors.Email}
              handleInputChange={handleInputChange}
              theme={theme}
            />
            <InputField
              label="Company"
              name="Company"
              value={userDetail.Company}
              error={errors.Company}
              handleInputChange={handleInputChange}
              theme={theme}
            />
            <InputField
              label="Phone (optional)"
              name="Phone"
              value={userDetail.Phone}
              handleInputChange={handleInputChange}
              theme={theme}
            />
          </div>
          <div className="flex justify-center mt-8">
            <button
              className={` ${
                theme ? "bg-[#ff93e2ea]" : "bg-[#df04a5e1]"
              } flex justify-center  py-2 px-4 rounded-full mt-2 ${
                theme ? "text-black" : "text-white"
              }`}
              type="submit"
              style={{ alignItems: "center" }}
            >
              <IoIosSend className="mr-2" size={20} />
              Get Result
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const InputField = ({
  label,
  name,
  value,
  error,
  handleInputChange,
  isFocused,
  setIsFocused,
  filteredWords,
  setUserDetail,
  userDetail,
  theme,
}) => (
  <div className="mb-5 relative">
    <label
      htmlFor={name}
      className={`block ${theme ? "text-black" : "text-white"}  mb-2 ms-6`}
    >
      {label}
    </label>
    <input
      type="text"
      name={name}
      id={name}
      value={value}
      className={`w-full border-0 py-4 pl-6 pr-20  ring-1 ring-inset  ${
        theme
          ? "bg-[#ace4da] ring-[#03091dd5] placeholder:text-gray-700 text-black shadow-[0_2px_10px_rgba(25,25,25,0.582)]"
          : "bg-[#03091dd5] ring-[#01CEAD] placeholder:text-gray-400 text-white shadow-[#01ceac91]"
      }  focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 rounded-full shadow-lg `}
      onChange={handleInputChange}
      onFocus={() => setIsFocused && setIsFocused(true)}
      onBlur={() => setIsFocused && setTimeout(() => setIsFocused(false), 200)}
      placeholder={`e.g. ${label}`}
    />
    {isFocused && filteredWords && filteredWords.length > 0 && (
      <ul
        className={`absolute ${
          theme
            ? " shadow-[#03091d00] bg-[#ace4da] text-black"
            : "shadow-[#10234d] bg-[#03091d] text-white"
        }  w-full mt-1 rounded-lg shadow-lg max-h-40 overflow-y-auto z-10 ring-1`}
      >
        {filteredWords.map((word, index) => (
          <li
            key={index}
            className={`py-2 px-4 cursor-pointer ${
              theme
                ? "hover:bg-gray-600 hover:text-white shadow-[#01ceac91]"
                : " hover:bg-gray-200 hover:text-black shadow-[#10234d]"
            } `}
            onMouseDown={() => {
              setUserDetail({
                ...userDetail,
                Industry: word,
              });
              setIsFocused(false);
            }}
          >
            {word}
          </li>
        ))}
      </ul>
    )}
    {error && <p className="text-red-500 text-sm ml-5">{error}</p>}
  </div>
);

export default ContactUs;
