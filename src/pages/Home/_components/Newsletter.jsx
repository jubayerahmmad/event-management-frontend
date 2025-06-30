import { Globe } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Globe className="w-16 h-16 text-teal-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest updates, tips, and event management insights
            delivered to your inbox
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-2xl border border-gray-600 bg-gray-700 text-white placeholder-gray-400"
          />
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-2xl font-semibold transition-colors duration-200 shadow-xl">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
