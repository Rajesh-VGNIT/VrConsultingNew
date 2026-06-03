"use client";

import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import Breadcrumb1 from "@/components/Common/Breadcrumb1";

const Contact = () => {
  /* ================= FORM STATE ================= */

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contact: "",
    contact_time: "",
    address: "",
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

    if (!captchaValue) {
      toast.error("Please verify Google reCAPTCHA!");
      return;
    }

    try {
      const response = await fetch(
        "https://www.vrwebconsulting.com/mlm-query",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

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
          contact_time: "",
          address: "",
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
    <>
      <Breadcrumb1
        pageName="Project Live Demo"
        description=""
      />

      <section
        id="contact"
        className="overflow-hidden md:py-10 lg:py-18"
      >
        <ToastContainer position="top-right" autoClose={2000} />

        <div className="container">
          <div data-aos="fade-up" className="-mx-4 flex flex-wrap">

            <div className="mx-auto mt-[30px] w-full px-4 sm:mt-[40px] lg:mt-0 lg:w-7/12 xl:w-7/12">
              <div className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[25px]">

                <h2 className="mb-10 text-center text-2xl font-bold text-black sm:text-3xl lg:text-xl xl:text-2xl">
                  Please Provide us following information.
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="-mx-4 flex flex-wrap">

                    {/* NAME */}
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label className="mb-3 block text-sm font-medium text-dark">
                          Name*
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
                          Email*
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

                    {/* CONTACT TIME */}
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label className="mb-3 block text-sm font-medium text-dark">
                          Contact Time*
                        </label>

                        <select
                          required
                          name="contact_time"
                          value={formData.contact_time}
                          onChange={handleChange}
                          className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary"
                        >
                          <option value="">
                            Select Time
                          </option>

                          <option value="8AM to 12PM">
                            8AM to 12PM
                          </option>

                          <option value="12PM to 4PM">
                            12PM to 4PM
                          </option>

                          <option value="4PM to 10PM">
                            4PM to 10PM
                          </option>

                          <option value="10PM to 2AM">
                            10PM to 2AM
                          </option>

                          <option value="Any Time">
                            Any Time
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* CONTACT NUMBER */}
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label className="mb-3 block text-sm font-medium text-dark">
                          Contact Number*
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

                    {/* ADDRESS */}
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label className="mb-3 block text-sm font-medium text-dark">
                          Address/City*
                        </label>

                        <textarea
                          rows={5}
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Enter your address/city"
                          required
                          className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden focus:border-primary"
                        />
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
                      </div>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <div className="w-full px-4">
                      <div className="flex justify-center">

                        <div className="group inline-block">
                          <button
                            type="submit"
                            className="relative flex h-12 w-40 items-center justify-center overflow-hidden rounded-md border border-primary text-sm font-semibold uppercase cursor-pointer"
                          >
                            <span className="absolute inset-0 translate-x-[-100%] bg-primary transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>

                            <span className="relative z-10 text-primary transition-colors duration-300 group-hover:text-white">
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

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;