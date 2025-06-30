const HowItWorks = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get started with <span className="logo">HeroEvents</span> in just
            three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Create Account
            </h3>
            <p className="text-gray-300">
              Sign up for free and set up your profile in minutes
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Create Events
            </h3>
            <p className="text-gray-300">
              Use our intuitive form to create and customize your events
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Manage & Grow
            </h3>
            <p className="text-gray-300">
              Track attendance, engage with participants, and grow your
              community
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
