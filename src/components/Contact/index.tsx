"use client";

import NewsLatterBox from "./NewsLatterBox";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";


const Contact = () => {
  
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    budget: "",
    requirement: "",
    message: "",
  });

  // Generate captcha
  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
    let code = "";

    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setCaptcha(code);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Captcha validation
    if (userCaptcha !== captcha) {
      toast.error("Invalid verification code!");
      return;
    }

    // Success message
    toast.success("Form submitted successfully!", {
    toastId: "form-success", // unique ID
    autoClose: 2000,             
    pauseOnHover: true,
    closeOnClick: true
  });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      budget: "",
      requirement: "",
      message: "",
    });

    setUserCaptcha("");
    generateCaptcha();
  };

  

  return (
    <section
      id="contact"
      className="overflow-hidden md:py-10 lg:py-18"
    >
      {/* Toast container */}
        <ToastContainer position="top-right" autoClose={2000} />

      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl xl:text-2xl">
                Connect With VR Consulting Support
              </h2>

              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will respond to your inquiry via email as soon
                as possible.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">

                  {/* Name */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Name*
                      </label>

                      <input
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Email*
                      </label>

                      <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Phone*
                      </label>

                      <input
                        type="number"
                        placeholder="Enter your phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your City*
                      </label>

                      <input
                        type="text"
                        placeholder="Enter your city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                      />
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Budget
                      </label>

                      <input
                        type="text"
                         name="budget"
                         value={formData.budget}
                         onChange={handleChange}
                        placeholder="Enter your budget"
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                      />
                    </div>
                  </div>

                  {/* Requirement */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Requirement*
                      </label>

                      <select
                        required
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleChange}
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      >
                        <option value="" disabled>
                          Select Requirement
                        </option>

                        <option>Create a New Website</option>
                        <option>Redesign my Website</option>
                        <option>Website Maintenance</option>
                        <option>Mobile App (Android/iOS)</option>
                        <option>Hybrid Mobile App</option>
                        <option>SEO</option>
                        <option>SMO</option>
                        <option>PPC / Adwords</option>
                        <option>E-commerce Solution</option>
                        <option>Software Dev (CRM/MLM/PMS)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Message
                      </label>

                      <textarea
                         name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                      ></textarea>
                    </div>
                  </div>

                  {/* Captcha */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Verification Code
                      </label>

                      <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-md bg-gray-200 px-6 py-3 text-lg font-bold tracking-widest text-black">
                          {captcha}
                        </div>

                        <button
                          type="button"
                          onClick={generateCaptcha}
                          className="rounded-md bg-primary px-4 py-2 text-white cursor-pointer"
                        >
                          Refresh
                        </button>
                      </div>

                      <input
                        type="text"
                        value={userCaptcha}
                        onChange={(e) => setUserCaptcha(e.target.value)}
                        placeholder="Enter Verification Code"
                        required
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="w-full px-4">
                    {/* <button
                      type="submit"
                      className="rounded-md bg-primary px-8 py-3 text-white transition hover:bg-primary/90 cursor-pointer"
                    >
                      Submit
                    </button> */}

                    <div className=" flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                      
                                      <div  className="inline-block group">
                                      <button type="submit" className="relative flex items-center justify-center w-40 h-12 overflow-hidden rounded-md border border-primary text-sm font-semibold uppercase cursor-pointer">
                                        <span className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                                        <span className="relative z-10 flex items-center gap-2 text-primary group-hover:text-white transition-colors duration-300">
                                          Submit
                                        </span>
                    
                                      </button>
                                    </div>
                                      
                                    </div>

                  {/* <button
                      type="submit"
                      className="inline-block group w-40 h-12 overflow-hidden rounded-md border border-primary text-sm font-semibold uppercase cursor-pointer"
                    >
                      <span className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                      <span className="relative z-10 flex items-center justify-center w-full h-full text-primary group-hover:text-white transition-colors duration-300">
                        Submit
                      </span>
                  </button> */}
                    
                  </div>

                </div>
              </form>
            </div>
          </div>

          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};


// Reusable Input Component
const Input = ({ label, name, value, onChange, type = "text" }) => (
  <div className="w-full px-4 md:w-1/2">
    <div className="mb-8">
      <label className="mb-3 block text-sm font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border bg-[#f8f8f8] px-4 py-3"
        required
      />
    </div>
  </div>
);

export default Contact;