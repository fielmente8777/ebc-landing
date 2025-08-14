"use client";
import { countries } from "../../../constant";
import axios from "axios";
import { ChangeEvent, useState } from "react";
const OfferForm = () => {
  const [countryCode, setCountryCode] = useState("+91");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    PhoneNumber: "",
  });

  const [error, setError] = useState({
    fullName: "",
    PhoneNumber: "",
  });

  const validatePhone = (phone: string) => {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);
  };
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (error[name as keyof typeof error]) {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  };
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      checkIn: "",
      checkOut: "",
      fullName: "",
      PhoneNumber: "",
      EmailId: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
      isValid = false;
    }

    if (!formData.PhoneNumber.trim()) {
      newErrors.PhoneNumber = "phone number is required";
      isValid = false;
    } else if (!validatePhone(formData.PhoneNumber)) {
      newErrors.PhoneNumber = "phone number must be 10 digits";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "testmulti",
          Name: formData?.fullName,
          Contact: formData?.PhoneNumber,
          created_from: "landing page",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.Status) {
        setFormData({
          fullName: "",
          PhoneNumber: "",
        });
        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 3000);
        window.open("/thank-you", "_blank");
      } else {
        setFormData({
          fullName: "",
          PhoneNumber: "",
        });

        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className={`grid md:grid-cols-3 grid-cols-1 items-center gap-4`}
    >
      {/* Full Name Field - unchanged */}
      <div className={`border-b pb-3 border-primary flex flex-col w-full `}>
        <input
          type="text"
          name="fullName"
          aria-label="Full Name*"
          placeholder="Full Name*"
          onChange={handleInputChange}
          value={formData.fullName}
          className="outline-none border-none w-full h-full px-4 bg-transparent text-base text-[#343434] placeholder:text-[#343434]"
        />
        {error.fullName && (
          <span className="text-red-500 text-[0.5rem] px-1 w-full">
            {error.fullName}
          </span>
        )}
      </div>

      {/* Phone Number Field - unchanged */}
      <div className={`border-b pb-3 border-primary`}>
        <div className="flex items-center ps-1 w-full h-full">
          <select
            aria-label="Country Code"
            id="countryCode"
            name="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className={`text-[#343434] placeholder:text-[#343434] focus:outline-none w-full bg-transparent`}
            style={{ width: `${countryCode.length * 2}ch` }}
          >
            {countries.map((country, index) => (
              <option
                key={index + 101}
                value={country.code}
                aria-label={country.name}
                className="bg-gray-100"
              >
                {`${country.code}`}
              </option>
            ))}
          </select>

          <input
            type="tel"
            name="PhoneNumber"
            aria-label="Phone Number*"
            placeholder="Phone Number*"
            onChange={handleInputChange}
            value={formData.PhoneNumber}
            className=" ps-1 outline-none no-spinner appearance-auto border-none w-full h-full text-base text-[#343434] placeholder:text-[#343434] bg-transparent"
          />
        </div>
        {error.PhoneNumber && (
          <span className="text-red-500 text-xs px-1 w-full">
            {error.PhoneNumber}
          </span>
        )}
      </div>

      {/* Submit Button - unchanged */}
      <div className={`h-full col-span-1  flex items-center justify-center`}>
        <button
          type="submit"
          aria-label="Book Now"
          className="text-center bg-primary py-4 md:w-full px-12 mx-auto text-white hover:bg-light duration-300 transition-all ease-in-out uppercase"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="border-t-2 tracking-wider border-white w-6 h-6 rounded-full animate-spin mx-auto block" />
          ) : submitSuccess ? (
            "Thank You!"
          ) : (
            <span className="pmedium">GET MY <span className="pmedium-italic">DEAL</span></span>
          )}
        </button>
      </div>
    </form>
  );
};

export default OfferForm;
