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
    <section id="contact" className="py-20 px-4 lg:px-14 bg-secondary">
      <div className="max-w-6xl mx-auto text-start md:text-center">
        <div className="text-start items-center py-8 lg:text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            Get in Touch with Us
          </h2>
          <p className="text-base mt-4 p-0 lg:p-4">
            Need help? Our support team is available 24/7. Send us a message and
            we’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:gap-6 lg:gap-6 gap-2 w-full">
          <div className="border shadow-md rounded-lg p-4 md:p-4 w-full md:text-start relative md:w-1/2">
            <Image
              src="/images/contact-service.png"
              alt="profile image"
              width={500}
              height={300}
              className="rounded-lg border shadow-md contact-img"
              style={{ width: "auto", height: "auto" }}
            />
            <div className="mt-2">
              <div className="mt-4">
                <h4 className="py-2 text-lg font-bold">
                  <strong>Contact Us</strong>
                </h4>
                <div className="inline-flex py-2 items-center border rounded-lg p-2 w-full my-2">
                  <Image
                    src="/images/location.webp"
                    alt="Location"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <p className="text-sm py-1 mb-0">
                    Plot 39, Awolowo Road, Ikoyi, Lagos
                  </p>
                </div>
                <br />
                <div className="inline-flex py-2 items-center border rounded-lg p-2 w-full my-2">
                  <Image
                    src="/images/phone.png"
                    alt="Phone"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <p className="text-sm py-1 mb-0">
                    +234&nbsp;902&nbsp;2048&nbsp;105
                  </p>
                </div>
                <br />
                <div className="inline-flex items-center border rounded-lg p-2 w-full my-2">
                  <Image
                    src="/images/Gmail.png"
                    alt="Mail"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <p className="text-sm tracking-wide py-1 mb-0">
                    contact@sixtusdev.net
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border shadow-md p-4 sm:p-8 lg:py-14 lg:px-16 rounded-lg justify-start items-start space-y-4 w-full">
            {/* Contact form component imported here */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 5000);
//   };

//   return (
//     <section className="py-20 bg-secondary">
//       <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Left Side - Contact Image */}
//         <div className="flex justify-center">
//           <Image
//             src="/images/contact.png"
//             alt="Contact Xpenda Support"
//             width={500}
//             height={500}
//             className="rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Right Side - Contact Form */}
//         <div className="text-center md:text-left">
//           <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
//             Get in Touch with Us
//           </h2>
//           <p className="text-lg mt-4">
//             Need help? Our support team is available 24/7. Send us a message and
//             we’ll get back to you as soon as possible.
//           </p>

//           <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               required
//               className="w-full p-3 border rounded-lg focus:border-yellow-500"
//               onChange={handleChange}
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               required
//               className="w-full p-3 border rounded-lg focus:border-yellow-500"
//               onChange={handleChange}
//             />
//             <textarea
//               name="message"
//               rows={4}
//               placeholder="Your Message"
//               required
//               className="w-full p-3 border rounded-lg focus:border-yellow-500"
//               onChange={handleChange}
//             />
//             <Button
//               type="submit"
//               className="w-full px-6 py-6 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white font-semibold text-base rounded-lg"
//             >
//               {submitted ? "Message Sent ✅" : "Send Message"}
//             </Button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
