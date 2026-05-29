"use client";

import { useRef, useState } from "react";
import { X } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
const CareerPopup = () => {
  const [open, setOpen] = useState(true);

  const [formData, setFormData] = useState({
    experience: "",
    position: "",
    name: "",
    email: "",
    contact_no: "",
    cvfile: null,
  });


  const [captchaValue, setCaptchaValue] = useState(null);

  const recaptchaRef = useRef(null);

  if (!open) return null;

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "cvfile") {
      setFormData((prev) => ({
        ...prev,
        cvfile: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  /* ================= HANDLE SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();


    // Google Captcha Check
    if (!captchaValue) {
      toast.error("Please verify Google reCAPTCHA!");
      return;
    }

    try {
      const submitData = new FormData();

      submitData.append("experience", formData.experience);
      submitData.append("position", formData.position);
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("contact_no", formData.contact_no);

      if (formData.cvfile) {
        submitData.append("cvfile", formData.cvfile);
      }

      const response = await fetch(
        "https://www.vrwebconsulting.com/save-career",
        {
          method: "POST",
          body: submitData,
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Form submitted successfully!");

        // Reset Form
        setFormData({
          experience: "",
          position: "",
          name: "",
          email: "",
          contact_no: "",
          cvfile: null,
        });

        // Reset Captcha
        setCaptchaValue(null);

        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }

        // Close Popup
        setTimeout(() => {
          setOpen(false);
        }, 2000);
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
      <ToastContainer position="top-right" autoClose={2000} />

     <div className="fixed inset-0 z-[10000] overflow-y-auto bg-black/50 px-4 py-6 scrollbar-hide">
  
  <div className="flex min-h-full items-center justify-center">
    
    <div className="relative w-full max-w-xl rounded-2xl bg-white p-5 sm:p-8 shadow-2xl">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#001B5E] text-white transition hover:bg-blue-700"
          >
            <X className="h-5 w-5" />
          </button>

          {/* TITLE */}
          <h2 className="mb-8 text-center text-2xl font-bold leading-snug text-black">
            Please Provide us following information.
          </h2>

          {/* FORM */}
          <form className="space-y-5" onSubmit={handleSubmit}>

            {/* EXPERIENCE */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Experience*
              </label>

              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="h-12 w-full rounded-sm border bg-[#f8f8f8] border-gray-300 px-4 text-sm text-body-color outline-none focus:border-blue-500"
              >
                <option value="">Select Experience</option>

                <option value="0-1 Years">0-1 Years</option>
                <option value="1-3 Years">1-3 Years</option>
                <option value="3-5 Years">3-5 Years</option>
                <option value="5+ Years">5+ Years</option>
              </select>
            </div>

            {/* POSITION */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Position*
              </label>

              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Type your Position here"
                required
                className="h-12 w-full rounded-sm border bg-[#f8f8f8] border-gray-300 px-4 text-sm outline-none focus:border-blue-500"
              />
            </div>

            {/* NAME */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Name*
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Type your Name here"
                required
                className="h-12 w-full rounded-sm border bg-[#f8f8f8] border-gray-300 px-4 text-sm outline-none focus:border-blue-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email*
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email here"
                required
                className="h-12 w-full rounded-sm border bg-[#f8f8f8] border-gray-300 px-4 text-sm outline-none focus:border-blue-500"
              />
            </div>

            {/* CONTACT */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Contact Number*
              </label>

              <input
                type="text"
                name="contact_no"
                value={formData.contact_no}
                onChange={handleChange}
                placeholder="Type your Contact Number"
                required
                className="h-12 w-full rounded-sm border bg-[#f8f8f8] border-gray-300 px-4 text-sm outline-none focus:border-blue-500"
              />
            </div>

            {/* FILE */}


            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Upload CV*
              </label>

              <input
                type="file"
                name="cvfile"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="block w-full text-sm text-gray-600
                  file:mr-4
                  file:cursor-pointer
                  file:rounded-sm
                  file:border
                  file:border-gray-400
                  file:bg-gray-100
                  file:px-3
                  file:py-1
                  file:text-sm
                  file:text-black
                  hover:file:bg-gray-200"
              />
            </div>

            {/* GOOGLE CAPTCHA */}
            <div className="">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LekMQItAAAAABsp0xzraBkyd1Rz65X8cU7Po-BL"
                onChange={(token) => setCaptchaValue(token)}
              />
            </div>

            {/* BUTTONS */}
            <div className="flex justify-center gap-4 pt-3">

              <button
                type="submit"
                className="h-11 min-w-[120px] rounded-md bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700 cursor-pointer"
              >
                Submit
              </button>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="h-11 min-w-[120px] rounded-md bg-gray-500 px-6 text-sm font-semibold text-white transition hover:bg-gray-600 cursor-pointer"
              >
                Cancel
              </button>

            </div>

          </form>
          
        </div>
      </div>
      </div>
    </>
  );
};

export default CareerPopup;