"use client";
import Footer from "@/components/footer";
import Header from "@/components/shared/header";
import emailjs from "emailjs-com";
import { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_id", // Your EmailJS service ID
        "template_id", // Your EmailJS template ID
        formData, // Send the form data
        "user_id" // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Success:", response.status, response.text);
          alert("Form submitted successfully!");
        },
        (error) => {
          console.error("Error:", error);
          alert("There was an error submitting the form. Please try again.");
        }
      );
  };

  return (
    <>
      <Header />{" "}
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="w-full max-w-[790px] p-6 rounded-lg shadow-lg">
          <h2 className="text-center text-white text-[42px] font-heading mb-6">
            Lets Get <span className="text-[#01F2A7]">Started</span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-white text-[16px] font-medium"
                >
                  First Name <span className="text-white">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-[#353539] bg-black text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-white/50"
                  required
                  placeholder="Enter First Name"
                  style={{ fontSize: "18px" }}
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-white text-[16px] font-medium"
                >
                  Last Name <span className="text-white">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-[#353539] bg-black text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-white/50"
                  required
                  placeholder="Enter Last Name"
                  style={{ fontSize: "18px" }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-white text-[16px] font-medium"
                >
                  Email <span className="text-white">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-[#353539] bg-black text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-white/50"
                  required
                  placeholder="Enter Email"
                  style={{ fontSize: "18px" }}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-white text-[16px] font-medium"
                >
                  Phone <span className="text-white">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-[#353539] bg-black text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-white/50"
                  required
                  placeholder="Enter Phone"
                  style={{ fontSize: "18px" }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="country"
                  className="block text-white text-[16px] font-medium"
                >
                  Country <span className="text-white">*</span>
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-[#353539] bg-black text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-white/50"
                  required
                  placeholder="Enter Country"
                  style={{ fontSize: "18px" }}
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-white text-[16px] font-medium"
                >
                  City <span className="text-white">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-[#353539] bg-black text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-white/50"
                  required
                  placeholder="Enter City"
                  style={{ fontSize: "18px" }}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full uppercase sm:w-[307px] py-2 px-4 bg-[#01F2A7] text-black rounded-md shadow-md hover:bg-[#01D68A] focus:outline-none focus:ring-2 focus:ring-[#01F2A7] focus:ring-opacity-50 sm:w-auto"
                style={{
                  height: "54px",
                }}
              >
                Get Started <span className="inline-block ml-2">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUpForm;
