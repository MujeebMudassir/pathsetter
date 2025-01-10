import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Popup = ({ setPopupView }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    organizationName: "",
    designation: "",
    phoneNumber: "",
    email: "",
    message: "",
    industry:""
  });

  const [errors, setErrors] = useState({});

  // Handle form inputs change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate the form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.organizationName)
      newErrors.organizationName = "Organization Name is required";
    if (!formData.designation)
      newErrors.designation = "Designation is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    if (!formData.industry) newErrors.message = "Industry is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/thank-you");
      try {
        const response = await axios.post(
          "https://pathsettermailer.onrender.com/send-email",
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phoneNumber,
            message: formData.message,
            orgName: formData.organizationName,
            designation: formData.designation,
            industry:formData.industry
          }
        );
        console.log("Form submitted successfully:", response.data);
        setFormData({
          name: "",
          organizationName: "",
          designation: "",
          phoneNumber: "",
          email: "",
          message: "",
          industry:""
        });
        // navigate("/thank-you");

        // Handle success (e.g., show a success message or redirect)
      } catch (error) {
        console.error("There was an error submitting the form:", error);
        // Handle error (e.g., show an error message)
      } finally {
        console.log({
          name: formData.name,
          email: formData.email,
          phone: formData.phoneNumber,
          message: formData.message,
          orgName: formData.organizationName,
          designation: formData.designation,
        });
      }
    }
  };
  return (
    <>
      <div className="absolute top-[70%]  left-[50%] w-11/12 md:w-1/2 md:h-1/2 translate-x-[-50%] translate-y-[-50%] inset-0 flex items-center justify-center z-[100] md:z-50">
        <div className="bg-[#010614]  w-full max-w-lg mx-auto rounded-lg shadow-lg p-6 relative">
          <button
            className="absolute top-3 right-3 text-white text-3xl hover:text-gray-700"
            onClick={() => setPopupView(false)}
          >
            &times;
          </button>
          <div className="w-full">
            <form className="text-white" onSubmit={handleSubmit}>
              <p className="">Name</p>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                placeholder="Name"
                required
                onChange={handleChange}
                className="px-5 h-10 w-full bg-transparent my-3 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 rounded-md shadow-lg shadow-[#10234d]"
              />
              <p>Phone Number (Optional)</p>
              <input
                name="phoneNumber"
                type="number"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "textfield",
                }}
                className="px-5 h-10 w-full bg-transparent my-3 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 rounded-md shadow-lg shadow-[#10234d]"
              />
              <p>Organization Name</p>
              <input
                name="organizationName"
                type="text"
                required
                placeholder="Organization Name"
                value={formData.organizationName}
                onChange={handleChange}
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "textfield",
                }}
                className="px-5 h-10 w-full bg-transparent my-3 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 rounded-md shadow-lg shadow-[#10234d]"
              />
  <p>Industry</p>
              <input
                name="industry"
                type="text"
                required
                placeholder="Industry"
                value={formData.industry}
                onChange={handleChange}
                className="px-5 h-10 w-full bg-transparent my-3 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 rounded-md shadow-lg shadow-[#10234d]"
              />
              <p>Designation</p>
              <input
                name="designation"
                type="text"
                required
                placeholder="Designation"
                value={formData.designation}
                onChange={handleChange}
                className="px-5 h-10 w-full bg-transparent my-3 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 rounded-md shadow-lg shadow-[#10234d]"
              />
              <p>Work Email</p>
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="px-5 h-10 w-full bg-transparent my-3 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 rounded-md shadow-lg shadow-[#10234d]"
              />
              <p>Message</p>
              <textarea
                name="message"
                placeholder="Your Vision, Our AI - How Can We Assist You?"
                value={formData.message}
                onChange={handleChange}
                required
                className="px-5 w-full bg-transparent h-20 my-3 mb-5 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 rounded-md shadow-lg shadow-[#10234d]"
              />
              <button
                type="submit"
                className="bg-[#3F8DCB] text-white py-2 px-3 rounded-md hover:bg-[#336b9f] focus:outline-none"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
