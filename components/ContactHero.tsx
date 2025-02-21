import { Send } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      {/* Contact Hero Section */}
      <section
        className="pt-8 lg:px-0 px-4 md:px-4 md:py-10 relative w-full min-h-[50vh] lg:min-h-[400px] flex items-center justify-start text-white text-left bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/contact-bg.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 px-4 lg:px-16 lg:mt-10 w-full md:w-3xl lg:text-left lg:w-lg text-left">
          <h1 className="text-2xl md:text-5xl font-extrabold text-left w-full lg:max-w-2xl">
            Get in Touch Lets Discuss Your Concerns.
          </h1>
          <p className="mt-4 text-base md:text-xl text-gray-200 w-full lg:max-w-2xl">
            Get in touch with us for inquiries, support, or partnership
            opportunities. We're here to help!
          </p>

          <div className="mt-6">
            <a
              href="mailto:contact@sixtusdev.net?subject=Let's%20connect!&body=Hi%20Sixtusdev%20Team,%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you%20for%20..."
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white font-semibold"
            >
              <span>Email Us</span>
              <Send size={20} className="text-gray-200 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
