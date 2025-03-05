const OurProgram = () => {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-start text-center text-white overflow-hidden">
      {/* Fixed Background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/new-program.webp')" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4 lg:pl-20 lg:pr-8 text-left">
        <h1 className="text-4xl font-extrabold md:text-5xl leading-snug">
          Join Thousands of Users Earning with Xpenda
        </h1>
        <p className="mt-4 text-base opacity-95">
          Our programs are designed to help you earn some income while using our
          platform. You can earn by referring friends, family, and colleagues to
          use our platform. You can also earn by participating in our
          promotional programs.
        </p>
        <a
          href="/programs"
          className="mt-6 py-3 px-6 text-base font-semibold rounded-none inline-block bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white shadow-lg hover:ease-in-out hover:scale-105 transition-all duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default OurProgram;
