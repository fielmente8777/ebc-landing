"use client";
import DataContext from "@/contextApi/DataContext";
import { countries } from "../../../constant";
import { getDateInputLimits } from "@/hocks/getDateInputLimits";
import { CalenderIcon } from "@/utils/icons";
import axios from "axios";
import { ChangeEvent, useContext, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const { setIsOpen } = useContext(DataContext);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [countryCode, setCountryCode] = useState("+91"); // Default country code
  const { min } = getDateInputLimits({
    showPast: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    fullName: "",
    PhoneNumber: "",
    EmailId: "",
    message: "",
  });

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [error, setError] = useState({
    checkIn: "",
    checkOut: "",
    fullName: "",
    PhoneNumber: "",
    EmailId: "",
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleDateChange = (
    date: Date | null,
    field: "checkIn" | "checkOut"
  ) => {
    const dateString = date ? date.toISOString().split("T")[0] : "";

    setFormData((prev) => ({
      ...prev,
      [field]: dateString,
    }));

    if (field === "checkIn") {
      setStartDate(date);
      // Clear check-out error if both dates are selected
      if (date && endDate && date > endDate) {
        setEndDate(null);
        setFormData((prev) => ({ ...prev, checkOut: "" }));
      }
    } else {
      setEndDate(date);
    }

    // Clear error when date is selected
    if (error[field]) {
      setError((prev) => ({ ...prev, [field]: "" }));
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

    if (!formData.EmailId.trim()) {
      newErrors.EmailId = "Please enter your email";
      isValid = false;
    } else if (!validateEmail(formData.EmailId)) {
      newErrors.EmailId = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.PhoneNumber.trim()) {
      newErrors.PhoneNumber = "phone number is required";
      isValid = false;
    } else if (!validatePhone(formData.PhoneNumber)) {
      newErrors.PhoneNumber = "phone number must be 10 digits";
      isValid = false;
    }

    if (!formData.checkIn.trim()) {
      newErrors.checkIn = "check-in date is required";
      isValid = false;
    }

    if (!formData.checkOut.trim()) {
      newErrors.checkOut = "check-out date is required";
      isValid = false;
    } else if (startDate && endDate && startDate > endDate) {
      newErrors.checkOut = "Check-out must be after check-in";
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
          email: formData?.EmailId,
          Name: formData?.fullName,
          Contact: formData?.PhoneNumber,
          Description: `Check-in ${formData?.checkIn}, Check-out: ${formData?.checkOut}, Message: ${formData?.message}`,
          check_in: `${formData?.checkIn}`,
          check_out: `${formData?.checkOut}`,
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
          checkIn: "",
          checkOut: "",
          fullName: "",
          PhoneNumber: "",
          EmailId: "",
          message: "",
        });
        setStartDate(null);
        setEndDate(null);
        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 3000);
        if (setIsOpen) {
          setIsOpen(false);
        }
        window.open("/thank-you", "_blank");
      } else {
        setFormData({
          checkIn: "",
          checkOut: "",
          fullName: "",
          PhoneNumber: "",
          EmailId: "",
          message: "",
        });

        setStartDate(null);
        setEndDate(null);
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
      className={`flex flex-col gap-2 bg-[#F1EECB] px-6 py-8`}
      ref={formRef}
    >
      <h2 className="text-2xl text-primary pUltralight">
        BOOK YOUR MOUNTAIN <span className="pultralight-italic">ESCAPE</span>
      </h2>
      {/* Full Name Field - unchanged */}
      <div className={`bg-white flex flex-col items-center mt-4`}>
        <input
          type="text"
          name="fullName"
          aria-label="Full Name*"
          placeholder="Full Name*"
          onChange={handleInputChange}
          value={formData.fullName}
          className="outline-none border-none w-full h-full p-4 bg-transparent text-base text-[#343434] placeholder:text-[#343434]"
        />
        {error.fullName && (
          <span className="text-red-500 text-[0.5rem] px-1 w-full">
            {error.fullName}
          </span>
        )}
      </div>

      {/* Phone Number Field - unchanged */}
      <div className={`bg-white`}>
        <div className="flex items-center py-4 ps-1 w-full h-full">
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
            type="number"
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

      {/* Email Field - unchanged */}
      <div className={`bg-white`}>
        <input
          type="text"
          name="EmailId"
          aria-label="Email Id*"
          placeholder="Email Id*"
          onChange={handleInputChange}
          value={formData.EmailId}
          className="outline-none border-none w-full h-full p-4 bg-transparent text-base text-[#343434] placeholder:text-[#343434]"
        />
        {error.EmailId && (
          <span className="text-red-500 text-xs px-1 w-full">
            {error.EmailId}
          </span>
        )}
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {/* Check In Date Field - updated with icon */}
        <div
          className={`col-span-1 flex flex-col items-center bg-[#fff] relative`}
        >
          <DatePicker
            selected={startDate}
            onChange={(date) => handleDateChange(date, "checkIn")}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date(min || Date.now())}
            placeholderText="Check in"
            className="outline-none border-none w-full h-full p-4  bg-transparent text-base text-[#343434] placeholder:text-[#343434]"
            wrapperClassName="w-full h-full !flex items-center"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <CalenderIcon className="text-primary" />
          </div>
          {error.checkIn && (
            <span className="text-red-500 text-xs">{error.checkIn}</span>
          )}
        </div>

        {/* Check Out Date Field - updated with icon */}
        <div
          className={`col-span-1 flex flex-col items-center bg-[#fff] relative`}
        >
          <DatePicker
            selected={endDate}
            onChange={(date) => handleDateChange(date, "checkOut")}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate || new Date(min || Date.now())}
            placeholderText="Check out"
            className="outline-none border-none w-full h-full p-4 bg-transparent text-base text-[#343434] placeholder:text-[#343434]"
            wrapperClassName="w-full h-full !flex items-center"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <CalenderIcon className="text-primary" />
          </div>
          {error.checkOut && (
            <span className="text-red-500 text-xs ">{error.checkOut}</span>
          )}
        </div>
      </div>
      {/* message */}
      <div className={`col-span-1 flex flex-col items-center bg-[#fff] relative`}>
        <textarea
          name="message"
          aria-label="Message"
          placeholder="Plan Your Stay With Us – Get Best Deals Now!"
          onChange={handleInputChange}
          value={formData.message}
          rows={3}
          className="outline-none resize-none border-none w-full h-full p-4 bg-transparent text-base text-[#343434] placeholder:text-[#343434]"
        />
      </div>
      {/* Submit Button - unchanged */}
      <div className={`h-full`}>
        <button
          type="submit"
          aria-label="Book Now"
          className="text-center bg-primary py-4 w-full text-white hover:bg-light duration-300 transition-all ease-in-out uppercase"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="border-t-2 border-white w-6 h-6 rounded-full animate-spin mx-auto block" />
          ) : submitSuccess ? (
            "Thank You!"
          ) : (
            "BOOK YOUR STAY"
          )}
        </button>
      </div>
    </form>
  );
};

export default Form;
