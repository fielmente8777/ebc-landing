"use client";

import { useRef, useState } from "react";
import useBookingForm from "@/hocks/useBookingForm";
import { countries } from "../../../constant";
import useClickOutside from "@/hocks/useClickOutside";

const NewForm = () => {
  const {
    isSubmitting,
    errors,
    handleSubmit,
    formData,
    handleChange,
    setFieldValue,
  } = useBookingForm({
    includeMessage: true,
    includePeopleCount: true,
    onSubmitSuccess: () => {
      setFieldValue("adults", 0);
      setFieldValue("kids", 0);
      setShowPeopleDropdown(false);
    },
  });

  const [showPeopleDropdown, setShowPeopleDropdown] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const totalAdults = formData.adults || 0;
  const totalKids = formData.kids || 0;
  const totalPeople = totalAdults + totalKids;

  const peopleText =
    totalPeople > 0
      ? `${totalAdults} Adult${totalAdults > 1 ? "s" : ""}${
          totalKids > 0 ? `, ${totalKids} Kid${totalKids > 1 ? "s" : ""}` : ""
        }`
      : "Select no. of people*";

  useClickOutside(dropDownRef, () => {
    if (showPeopleDropdown) {
      setShowPeopleDropdown(false);
    }
  });

  return (
    <div className="border border-new-secondary rounded-xl bg-[#06110A] p-4 lg:p-6  w-full">
      <h2 className="text-white text-[30px] font-primary mb-4">Inquire Now!</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Full Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name*"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-[48px] rounded-md bg-[#EAEAEA] px-4 text-sm text-black placeholder:text-[#555] focus:outline-none"
          />

          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <div className="flex items-center h-[48px] rounded-md bg-[#EAEAEA] overflow-hidden">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={(e) => setFieldValue("countryCode", e.target.value)}
              className="bg-transparent px-3 text-sm text-black outline-none cursor-pointer"
            >
              {countries.map((country, idx) => (
                <option key={idx} value={country.code}>
                  {country.code}
                </option>
              ))}
            </select>

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 bg-transparent h-full px-2 text-sm text-black placeholder:text-[#555] focus:outline-none"
            />
          </div>

          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-[48px] rounded-md bg-[#EAEAEA] px-4 text-sm text-black placeholder:text-[#555] focus:outline-none"
          />

          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Number of People */}
        <div className="relative">
          <div
            onClick={() => setShowPeopleDropdown(!showPeopleDropdown)}
            className="w-full h-[48px] rounded-md bg-[#EAEAEA] px-4 flex items-center justify-between cursor-pointer"
          >
            <span
              className={`text-sm ${
                totalPeople > 0 ? "text-black" : "text-[#666]"
              }`}
            >
              {peopleText}
            </span>

            <DropDown />
          </div>

          {/* Popup */}
          {showPeopleDropdown && (
            <div
              className="absolute top-full left-0 z-50 w-[190px] rounded-lg border border-new-secondary bg-white p-3 shadow-xl"
              ref={dropDownRef}
            >
              {/* Adults */}
              <div className="mb-4">
                <p className="text-sm text-black font-medium mb-2">Adults</p>

                <div className="flex items-center justify-between border border-new-secondary rounded-md px-3 py-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      setFieldValue(
                        "adults",
                        Math.max(0, (formData.adults || 0) - 1)
                      )
                    }
                    className="text-[#B99252] text-lg font-semibold"
                  >
                    <span className="sr-only">minusIcon</span>
                    <MinusIcon />
                  </button>

                  <span className="text-sm text-black">
                    {formData.adults || 0}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setFieldValue("adults", (formData.adults || 0) + 1)
                    }
                    className="text-[#B99252] text-lg font-semibold"
                  >
                    <span className="sr-only">pluseIcon</span>
                    <PluseIcon />
                  </button>
                </div>
              </div>

              {/* Kids */}
              <div>
                <p className="text-sm text-black font-medium mb-2">Kids</p>

                <div className="flex items-center justify-between border border-new-secondary rounded-md px-3 py-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      setFieldValue(
                        "kids",
                        Math.max(0, (formData.kids || 0) - 1)
                      )
                    }
                    className="text-[#B99252] text-lg font-semibold"
                  >
                    <span className="sr-only">minusIcon</span>
                    <MinusIcon />
                  </button>

                  <span className="text-sm text-black">
                    {formData.kids || 0}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setFieldValue("kids", (formData.kids || 0) + 1)
                    }
                    className="text-[#B99252] text-lg font-semibold"
                  >
                    <span className="sr-only">pluseIcon</span>
                    <PluseIcon />
                  </button>
                </div>
              </div>
            </div>
          )}

          {errors.adults && (
            <p className="text-red-500 text-xs mt-1">{errors.adults}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            name="message"
            placeholder="Tell us something about your enquiry!"
            value={formData.message || ""}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-md bg-[#EAEAEA] px-4 py-3 text-sm text-black placeholder:text-[#555] resize-none focus:outline-none"
          />

          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-md bg-new-secondary text-new-dark text-sm font-medium tracking-[1px] hover:opacity-90 transition disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "GET A CALL BACK"}
        </button>
      </form>
    </div>
  );
};

export default NewForm;

export const DropDown = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 8L12 16L19 8H5Z"
      fill="#B89258"
    />
  </svg>
);

export const PluseIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM16 13H13V16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16V13H8C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11H11V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13Z"
      fill="#B89258"
    />
  </svg>
);

export const MinusIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM17.25 12.75H6.75C6.55109 12.75 6.36032 12.671 6.21967 12.5303C6.07902 12.3897 6 12.1989 6 12C6 11.8011 6.07902 11.6103 6.21967 11.4697C6.36032 11.329 6.55109 11.25 6.75 11.25H17.25C17.4489 11.25 17.6397 11.329 17.7803 11.4697C17.921 11.6103 18 11.8011 18 12C18 12.1989 17.921 12.3897 17.7803 12.5303C17.6397 12.671 17.4489 12.75 17.25 12.75Z"
      fill="#B89258"
    />
  </svg>
);
