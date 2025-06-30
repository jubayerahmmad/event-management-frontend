import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const Banner = () => {
  const { user } = useAuth();
  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center min-h-[600px] flex items-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gray-900/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Organize, Explore, and Join Events
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            {" "}
            with Ease
          </span>
        </h1>
        <p className="md:text-lg mb-8 max-w-3xl mx-auto text-gray-300">
          Create, organize, and manage events effortlessly. Connect with your
          community and make every gathering memorable with our comprehensive
          event management platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {user ? (
            <>
              <Link
                to="/events"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl text-lg font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Browse Events
              </Link>
              <Link
                to="/add-event"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-2xl text-lg font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Create Event
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl text-lg font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="bg-gray-700 hover:bg-gray-600 text-white border-2 border-gray-600 px-8 py-3 rounded-2xl text-lg font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
