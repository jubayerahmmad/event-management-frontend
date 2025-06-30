import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Calendar } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  console.log("user from Navbar", user);

  // const navigate = useNavigate();

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
      isActive ? "text-blue-600" : "text-gray-300 hover:text-blue-600"
    }`;

  return (
    <nav className="bg-gray-800 shadow-xl sticky top-0 z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white logo">
                HeroEvents
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/events" className={navLinkClass}>
              Events
            </NavLink>
            <NavLink to="/add-event" className={navLinkClass}>
              Add Event
            </NavLink>
            <NavLink to="/my-events" className={navLinkClass}>
              My Events
            </NavLink>

            {!user ? (
              <div className="flex items-center space-x-2">
                <NavLink
                  to="/register"
                  className="text-teal-400 hover:text-teal-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Sign In
                </NavLink>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white focus:outline-none"
                >
                  <img
                    src={
                      user?.photoURL
                        ? user.photoURL
                        : "https://i.pravatar.cc/150?img=13"
                    }
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border-2 border-teal-600"
                  />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-700">
                    <div className="px-4 py-2 text-sm text-gray-300 border-b border-gray-700">
                      <div className="font-medium text-white">{user?.name}</div>
                      <div className="text-gray-400 text-xs">{user?.email}</div>
                    </div>
                    <button
                      // onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="flex flex-col p-2 space-y-1 bg-gray-800 border-t border-gray-700">
              <NavLink
                to="/"
                className="px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
              >
                Home
              </NavLink>
              <NavLink
                to="/events"
                className="px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
              >
                Events
              </NavLink>
              <NavLink
                to="/add-event"
                className="px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
              >
                Add Event
              </NavLink>
              <NavLink
                to="/my-events"
                className="px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
              >
                My Events
              </NavLink>

              {!user ? (
                <div className="pt-2 border-t border-gray-700">
                  <NavLink
                    to="/register"
                    className="block px-3 py-2 text-teal-400 hover:text-teal-300 hover:bg-gray-700 rounded-md transition-colors duration-200"
                  >
                    Register
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="block px-3 py-2 text-blue-400 hover:text-blue-300 font-medium hover:bg-gray-700 rounded-md transition-colors duration-200"
                  >
                    Sign In
                  </NavLink>
                </div>
              ) : (
                <div className="px-3 py-2 pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-2 mb-2">
                    <img
                      src={"https://i.pravatar.cc/150?img=13"}
                      alt="Profile"
                      className="w-8 h-8 rounded-full object-cover border-2 border-gray-600"
                    />
                    <span className="text-white">{"User Name"}</span>
                  </div>
                  <button
                    // onClick={handleLogout}
                    className="text-red-400 hover:text-red-300 transition-colors duration-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
