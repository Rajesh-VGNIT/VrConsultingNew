
"use client";

import NewsLatterBox from "./NewsLatterBox";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  /* ================= FORM STATE ================= */

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contact: "",
    address: "",
    budget: "",
    requirement: "",
    message: "",
  });

  /* ================= RECAPTCHA ================= */

  const [captchaValue, setCaptchaValue] = useState(null);

  const recaptchaRef = useRef(null);

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ================= HANDLE SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check reCAPTCHA
    if (!captchaValue) {
      toast.error("Please verify Google reCAPTCHA!");
      return;
    }

    try {
      const response = await fetch(
        "https://www.vrwebconsulting.com/save-contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            fullname: formData.fullname,
            email: formData.email,
            contact: formData.contact,
            address: formData.address,
            budget: formData.budget,
            requirement: formData.requirement,
            message: formData.message,
          }),
        }
      );

      const result = await response.json();

      console.log(result);

      if (response.ok && result.success) {
        toast.success("Form submitted successfully!", {
          toastId: "form-success",
          autoClose: 2000,
        });

        // Reset Form
        setFormData({
          fullname: "",
          email: "",
          contact: "",
          address: "",
          budget: "",
          requirement: "",
          message: "",
        });

        // Reset Captcha
        setCaptchaValue(null);

        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      } else {
        toast.error(result.message || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);

      toast.error("Server error. Please try again!");
    }
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
          {/* LEFT SIDE */}
          <div className="w-full px-4 lg:w-7/12 xl:w-7/12">
            <div className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[25px]">
              
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-xl xl:text-2xl">
                Connect With VR Consulting Support
              </h2>

              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will respond to your inquiry via email as soon
                as possible.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">

                  {/* NAME */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark">
                        Your Name*
                      </label>

                      <input
                        type="text"
                        placeholder="Enter your name"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark">
                        Your Email*
                      </label>

                      <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark">
                        Your Phone*
                      </label>

                      <input
                        type="tel"
                        placeholder="Enter your phone"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* CITY */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark">
                        Your City*
                      </label>

                      <input
                        type="text"
                        placeholder="Enter your city"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* BUDGET */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark">
                        Your Budget
                      </label>

                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="Enter your budget"
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* REQUIREMENT */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark">
                        Your Requirement*
                      </label>

                      <select
                        required
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleChange}
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary"
                      >
                        <option value="" disabled>
                          Select Requirement
                        </option>

                        <option value="Create a New Website">
                          Create a New Website
                        </option>

                        <option value="Redesign my Website">
                          Redesign my Website
                        </option>

                        <option value="Website Maintenance">
                          Website Maintenance
                        </option>

                        <option value="Mobile App (Android/iOS)">
                          Mobile App (Android/iOS)
                        </option>

                        <option value="Hybrid Mobile App">
                          Hybrid Mobile App
                        </option>

                        <option value="SEO">
                          SEO
                        </option>

                        <option value="SMO">
                          SMO
                        </option>

                        <option value="PPC / Adwords">
                          PPC / Adwords
                        </option>

                        <option value="E-commerce Solution">
                          E-commerce Solution
                        </option>

                        <option value="Software Dev (CRM/MLM/PMS)">
                          Software Dev (CRM/MLM/PMS)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label className="mb-3 block text-sm font-medium text-dark">
                        Your Message
                      </label>

                      <textarea
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden focus:border-primary"
                      ></textarea>
                    </div>
                  </div>

                  {/* RECAPTCHA */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LekMQItAAAAABsp0xzraBkyd1Rz65X8cU7Po-BL"
                        onChange={(token) => setCaptchaValue(token)}
                      />

                      {/* {!captchaValue && (
                        <p className="mt-2 text-sm text-red-500">
                          Please verify reCAPTCHA
                        </p>
                      )} */}
                    </div>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div className="w-full px-4">
                    <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">

                      <div className="group inline-block">
                        <button
                          type="submit"
                          className="relative flex h-12 w-40 items-center justify-center overflow-hidden rounded-md border border-primary text-sm font-semibold uppercase cursor-pointer"
                        >
                          <span className="absolute inset-0 translate-x-[-100%] bg-primary transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>

                          <span className="relative z-10 flex items-center gap-2 text-primary transition-colors duration-300 group-hover:text-white">
                            Submit
                          </span>
                        </button>
                      </div>

                    </div>
                  </div>

                </div>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full px-4 lg:w-5/12 xl:w-5/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;





