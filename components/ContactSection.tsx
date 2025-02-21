"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = { fullName: "", email: "", message: "" };

    if (!formData.fullName) {
      formIsValid = false;
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email) {
      formIsValid = false;
      newErrors.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message) {
      formIsValid = false;
      newErrors.message = "Please enter your message.";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission, e.g., send form data to a server
      console.log("Form submitted successfully:", formData);
      setFormData({ fullName: "", email: "", message: "" });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="contact-us" className="p-4 lg:px-14 bg-secondary">
      <div className="max-w-6xl mx-auto text-start md:text-center">
        <div className="text-start items-center py-8 lg:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            Get in Touch with Us
          </h2>
          <p className="text-base mt-4 p-0 lg:py-2">
            Need help? Our support team is available 24/7. Send us a message and
            we’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start lg:gap-4 gap-2 w-full">
          <div className="border shadow-md rounded-none w-full md:text-start relative md:w-full">
            <Image
              src="/images/contact-service.png"
              alt="profile image"
              width={500}
              height={300}
              className="rounded-tl-lg rounded-tr-lg border shadow-md contact-img"
              style={{ width: "auto", height: "auto" }}
            />
            <div className="px-4 py-2 w-full">
              <div className="mt-2">
                <h4 className="py-2 text-lg font-bold">
                  <strong>Contact Us</strong>
                </h4>
                <div className="inline-flex py-2 items-center border rounded-none p-2 w-full my-2">
                  <Image
                    src="/images/location.webp"
                    alt="Location"
                    width={30}
                    height={30}
                    className="mr-2"
                  />
                  <p className="text-base py-1 mb-0">
                    Plot 39, Awolowo Road, Ikoyi, Lagos
                  </p>
                </div>
                <br />
                <div className="inline-flex py-2 items-center border rounded-none p-2 w-full my-2">
                  <Image
                    src="/images/phone.png"
                    alt="Phone"
                    width={30}
                    height={30}
                    className="mr-2"
                  />
                  <p className="text-base py-1 mb-0">
                    +234&nbsp;902&nbsp;2048&nbsp;105
                  </p>
                </div>
                <br />
                <div className="inline-flex items-center border rounded-none p-2 w-full my-2">
                  <Image
                    src="/images/Gmail.png"
                    alt="Mail"
                    width={30}
                    height={30}
                    className="mr-2"
                  />
                  <p className="text-base tracking-wide py-1 mb-0">
                    contact@sixtusdev.net
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border shadow-md p-4 sm:py-8 sm:px-4 lg:py-6 lg:px-8 rounded-none justify-start items-start space-y-4 w-full">
            <h4 className="bg-gradient-to-r from-pink-600 via-yellow-600 to-purple-600 text-transparent bg-clip-text text-2xl font-extrabold text-left py-1">
              Send Us a Message
            </h4>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
