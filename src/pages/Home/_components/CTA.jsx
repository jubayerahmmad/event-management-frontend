import { Award } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-teal-600">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Award className="w-16 h-16 text-white mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of event organizers who trust HeroEvents for their
            events
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-2xl text-lg font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Create Your Free Account
          </Link>
          <Link
            to="/events"
            className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-3 rounded-2xl text-lg font-semibold transition-all duration-200"
          >
            Browse Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
