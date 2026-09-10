"use client";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import { contact } from "../../constant";

declare global {
  interface Window {
    oaiq?: (
      command: string,
      eventName: string,
      data?: Record<string, unknown>
    ) => void;
  }
}

interface BookingFormData {
  name: string;
  countryCode: string;
  phone: string;
  email: string;
  checkIn?: string;
  checkOut?: string;
  message?: string;
  adults?: number;
  kids?: number;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  checkIn?: string;
  checkOut?: string;
  adults?: string;
  kids?: string;
  [key: string]: string | undefined;
}

interface UseBookingFormProps {
  includeCheckIn?: boolean;
  includeCheckOut?: boolean;
  includeMessage?: boolean;
  includePeopleCount?: boolean; // New prop for people count field
  formHid?: string;
  onSubmitSuccess?: () => void;
}

const initialFormData: BookingFormData = {
  name: "",
  countryCode: "+91",
  phone: "",
  email: "",
  checkIn: "",
  checkOut: "",
  message: "",
  adults: 1,
  kids: 0,
};

const useBookingForm = ({
  includeCheckIn,
  includeCheckOut,
  includeMessage,
  includePeopleCount = false,
  formHid,
  onSubmitSuccess,
}: UseBookingFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  const debouncedEmail = useDebounce(formData.email, 500);
  const debouncedPhone = useDebounce(formData.phone, 500);
  const debouncedName = useDebounce(formData.name, 500);

  const validateEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string): boolean => {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);
  };

  // Debounced Email Validation
  useEffect(() => {
    if (debouncedEmail && !validateEmail(debouncedEmail)) {
      setErrors((prev) => ({
        ...prev,
        email: "Invalid email format",
      }));
    } else if (debouncedEmail && validateEmail(debouncedEmail)) {
      setErrors((prev) => ({
        ...prev,
        email: undefined,
      }));
    }
  }, [debouncedEmail]);

  // Debounced Phone Validation
  useEffect(() => {
    if (debouncedPhone && !validatePhone(debouncedPhone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Phone must be 10-15 digits",
      }));
    } else if (debouncedPhone && validatePhone(debouncedPhone)) {
      setErrors((prev) => ({
        ...prev,
        phone: undefined,
      }));
    }
  }, [debouncedPhone]);

  // Debounced Name Validation
  useEffect(() => {
    if (debouncedName && !debouncedName.trim()) {
      setErrors((prev) => ({
        ...prev,
        name: "Name cannot be empty",
      }));
    } else if (debouncedName && debouncedName.trim()) {
      setErrors((prev) => ({
        ...prev,
        name: undefined,
      }));
    }
  }, [debouncedName]);

  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name cannot be empty";
      isValid = false;
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Phone must be 10-15 digits";
      isValid = false;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (includeCheckIn && !formData.checkIn) {
      newErrors.checkIn = "Check-in date is required";
      isValid = false;
    }

    if (includeCheckOut && !formData.checkOut) {
      newErrors.checkOut = "Check-out date is required";
      isValid = false;
    }

    // Optional validation for people count
    if (includePeopleCount) {
      if (formData.adults === undefined || formData.adults < 1) {
        newErrors.adults = "At least 1 adult required";
        isValid = false;
      }
      if (
        formData.kids !== undefined &&
        (formData.kids < 0 || formData.kids > 10)
      ) {
        newErrors.kids = "Kids must be between 0 and 10";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  }, [formData, includeCheckIn, includeCheckOut, includePeopleCount]);

  // handle form submission
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  // Handle number input changes for adults/kids
  const handleNumberChange = (field: "adults" | "kids", increment: boolean) => {
    setFormData((prevFormData) => {
      const currentValue = prevFormData[field] || 0;
      const newValue = increment
        ? currentValue + 1
        : Math.max(0, currentValue - 1);

      // Optional: Set max limit (e.g., 20)
      const maxLimit = field === "adults" ? 20 : 10;
      const finalValue = Math.min(maxLimit, Math.max(0, newValue));

      return {
        ...prevFormData,
        [field]: finalValue,
      };
    });

    // Clear error for this field if it exists
    if (errors[field]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
    }
  };

  const setFieldValue = (
    field: keyof BookingFormData,
    value: string | number
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));

    if (errors[field as keyof FormErrors]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
    }
  };

  // reset form
  const resetForm = () => {
    setFormData({
      ...initialFormData,
      adults: includePeopleCount ? 2 : undefined,
      kids: includePeopleCount ? 1 : undefined,
    });
    setErrors({});
  };

  // handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const descriptionPart = [];
      if (includeCheckIn) {
        descriptionPart.push(`Check-in: ${formData.checkIn}`);
      }
      if (includeCheckOut) {
        descriptionPart.push(`Check-out: ${formData.checkOut}`);
      }
      if (includeMessage) {
        descriptionPart.push(`Message: ${formData.message}`);
      }
      if (includePeopleCount) {
        descriptionPart.push(`Adults: ${formData.adults}`);
        descriptionPart.push(`Kids: ${formData.kids || 0}`);
      }
      const description = descriptionPart.join("\n");

      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: contact.formDomain,
          Name: formData.name,
          email: formData.email,
          Contact: formData.countryCode + formData.phone,
          check_in: formData.checkIn,
          check_out: formData.checkOut,
          Description: description,
          created_from: "webform",
          source_url: window.location.href,
          // Include people count in the payload if needed
          ...(includePeopleCount && {
            adults: formData.adults,
            kids: formData.kids,
          }),
          // hId: contact.formHid ? contact.formHid : formHid,
        }
      );

      if (data.Status) {
        setSubmitSuccess(true);
        resetForm();

        if (
          typeof window !== "undefined" &&
          typeof window.oaiq === "function"
        ) {
          window.oaiq("measure", "lead_created", { type: "customer_action" });
        }

        if (onSubmitSuccess) {
          onSubmitSuccess();
        }

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
        window.open("/thank-you/", "_blank");
      } else {
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (e) {
      console.error(e);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    errors,
    isSubmitting,
    setIsSubmitting,
    submitSuccess,
    setSubmitSuccess,
    includeCheckIn,
    includeCheckOut,
    includeMessage,
    includePeopleCount,
    onSubmitSuccess,
    handleChange,
    handleNumberChange, // New method for increment/decrement
    setFieldValue,
    handleSubmit,
    resetForm,
  };
};

export default useBookingForm;
