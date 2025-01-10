import React, { useState } from "react";
import FixedNavbar from "../Home/FixedNavbar";
import logo from "../../assets/images/Logonew.png";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import bgPng from "../../assets/images/gradientPng.png";
import "./ContactUs.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Colors from "../../constants/Colors";
import { useSelector } from "react-redux";
import logoBlack from "../../assets/images/logoBlack.png"

const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    organizationName: '',
    designation: '',
    phoneNumber: '',
    email: '',
    message: '',
    industry:""
  });

  const [errors, setErrors] = useState({});
  const theme = useSelector((state) => state.theme.value);

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
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.organizationName) newErrors.organizationName = 'Organization Name is required';
    if (!formData.designation) newErrors.designation = 'Designation is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.industry) newErrors.industry = 'industry is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate("/thank-you");
      try {
        const response = await axios.post('https://pathsettermailer.onrender.com/send-email', { name: formData.name, email: formData.email,industry:formData.industry, phone: formData.phoneNumber, message: formData.message, orgName: formData.organizationName, designation: formData.designation, });
        console.log('Form submitted successfully:', response.data);
        setFormData({
          name: '',
          organizationName: '',
          designation: '',
          phoneNumber: '',
          email: '',
          message: '',
          industry:""
        })
        // navigate('/thank-you');

        // Handle success (e.g., show a success message or redirect)
      } catch (error) {
        console.error('There was an error submitting the form:', error);
        // Handle error (e.g., show an error message)
      } finally {
        console.log({ name: formData.name, email: formData.email, phone: formData.phoneNumber, message: formData.message, orgName: formData.organizationName, designation: formData.designation, })
      }
    }
  };
  return (
    <div className={` ${theme ? `bg-[#e8fdfb]`:`bg-[#03091D]`}`}>
      <div className="relative">
        <div
          id="mainContainer"
          className="h-[9vh] max-w-[1350px] mx-auto w-full flex flex-col justify-center items-center relative text-white"
        >
          <div className="absolute left-3 top-2 flex gap-3 items-center">
            <img src={theme?logoBlack:logo} className="w-[250px] md:w-[300px]"></img>
          </div>
          <FixedNavbar />
        </div>

      </div>

      <div className="max-w-[1350px] grid md:grid-cols-2 items-center gap-20 mx-auto w-[90vw] min-h-[91vh] relative ">
        <img
          src={bgPng}
          alt=""
          className="absolute left-1/2 -z-50  opacity-40 transform -translate-x-1/2 bottom-0 min-w-[1000px] w-full"
        />
        <div className="text-white  md:text-left">
          <h2 className={`text-4xl md:text-5xl font-Montserrat gradient-text bg-gradient-to-br from-[#01CEAD] via-[${Colors.tealColor}] to-purple-600 mt-12 font-bold text-transparent bg-clip-text`}>
            Begin Your AI Journey with Us
          </h2>
          <p className={`${theme? "text-black" : "text-white"} md:text-2xl text-2xl mt-6 mb-6 font-Montserrat  md:ml-0`}>
            Get a Demo and Learn How AI Can Streamline Your Business
          </p>
          <p className={`${theme? "text-black" : "text-white"} mb-6 mx-auto font-Montserrat`}>
            Unlock the true potential of AI, customized for your success.
            Our innovative solutions are crafted to simplify processes,
            boost efficiency, and drive growth.
            Whether you're new to AI or seeking to enhance your current systems,
            we're here to support you every step of the way.

          </p>
          {/* Hide For Now */}
          {/* <div className="text-white   mb-6  md:mx-auto  ">
            <div className="mt-2 mb-2">
              <p className="flex text-xl font-Montserrat">
                <FaPhoneVolume className="mt-1 mr-4" fontSize={20} />
                Lorem ipsum dolor sit.
              </p>
            </div>
            <div className="mt-3 mb-3">
              <p className="flex text-xl font-Montserrat">
                <HiOutlineMail className="mt-1 mr-4" fontSize={22} />
                Lorem ipsum dolor sit.
              </p>
            </div>
            <div className="mt-2 mb-2">
              <p className="flex text-xl font-Montserrat ">
                <IoLocationSharp className="mt-1 mr-4" fontSize={23} />
                Lorem ipsum dolor sit.
              </p>
            </div>
          </div> */}
        </div>

        <form className={`${theme? "text-black" : "text-white"} md:mt-20 md:mb-10` }onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            required
            onChange={handleChange}
            className={`md:h-10 px-5 bg-transparent w-full md:my-3 h-10 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 rounded-md shadow-lg ${theme ?`shadow-[#b4c5eb]`:'shadow-[#10234d]'}`}
          />
           <p>Industry</p>
          <input
            name="industry"
            type="text"
            required
            placeholder="Industry"
            value={formData.industry}
            onChange={handleChange}
            className={`px-5 md:h-10 w-full bg-transparent md:my-3 h-10 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 rounded-md shadow-lg ${theme ?`shadow-[#b4c5eb]`:'shadow-[#10234d]'}`}
          />

          <p>Organization Name</p>
          <input
            name="organizationName"
            type="text"
            required
            placeholder="Organization Name"
            value={formData.organizationName}
            onChange={handleChange}
            className={`px-5 md:h-10 w-full bg-transparent md:my-3 h-10 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 rounded-md shadow-lg ${theme ?`shadow-[#b4c5eb]`:'shadow-[#10234d]'}`}
          />

          <p>Designation</p>
          <input
            name="designation"
            type="text"
            required
            placeholder="Designation"
            value={formData.designation}
            onChange={handleChange}
            className={`px-5 md:h-10 w-full bg-transparent md:my-3 h-10 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 rounded-md shadow-lg ${theme ?`shadow-[#b4c5eb]`:'shadow-[#10234d]'}`}
          />

          <p>Phone Number (Optional)</p>
          <input
            name="phoneNumber"
            type="number"

            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            style={{
              WebkitAppearance: 'none',
              MozAppearance: 'textfield',
            }}
            className={`px-5 md:h-10 w-full bg-transparent md:my-3 h-10 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 rounded-md shadow-lg ${theme ?`shadow-[#b4c5eb]`:'shadow-[#10234d]'}`}
          />

          <p>Work Email</p>
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`px-5 md:h-10 w-full bg-transparent md:my-3 h-10 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-2 rounded-md shadow-lg ${theme ?`shadow-[#b4c5eb]`:'shadow-[#10234d]'}  `}
          />

          <p>Message</p>
          <textarea
            name="message"
            placeholder="Your Vision, Our AI - How Can We Assist You?"
            value={formData.message}
            onChange={handleChange}
            required
            className={`px-5 w-full bg-transparent md:h-32 h-20 md:my-3 mb-10 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 rounded-md shadow-lg ${theme ?`shadow-[#b4c5eb]`:'shadow-[#10234d]'}`}
          />

          <button type="submit" className="bg-[#3F8DCB] outline-none py-2 px-3 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
