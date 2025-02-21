import React from "react";

const ContactMap = () => {
  return (
    <section id="our-location" className="w-full h-[500px]">
      <iframe
        className="w-full h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.876123456789!2d3.421234567890!3d6.456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf1234567890%3A0xabcdef1234567890!2sPlot%2039%2C%20Awolowo%20Road%2C%20Ikoyi%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1610000000000"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Our Location"
      ></iframe>
    </section>
  );
};

export default ContactMap;
