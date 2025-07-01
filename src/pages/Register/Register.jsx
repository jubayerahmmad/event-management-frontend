import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Image,
  Calendar,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const Register = () => {
  const { createUser } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      setIsSubmitting(true);

      const { name, email, password, photoURL } = data;
      const res = await createUser(email, password, name, photoURL);
      // console.log("res from onSubmit", res);

      if (res?.token) {
        localStorage.setItem("user", JSON.stringify(res));
        toast.success("User registered successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
      reset();
    }
  };
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex flex-row-reverse min-h-screen">
        {/* Left side */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-teal-600 via-blue-600 to-blue-700 p-12 items-center justify-center overflow-hidden">
          <div className="z-10 max-w-md">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white logo">
                HeroEvents
              </span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Join our community of event creators
            </h2>
            <p className="text-teal-100 text-lg leading-relaxed mb-8">
              "Organize, Explore, and Join Events with Ease. Every great event
              starts with a single step. Take yours today and create memorable
              experiences."
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-teal-100">
                <Users className="w-5 h-5" />
                <span className="text-sm">Join 10,000+ event organizers</span>
              </div>
              <div className="flex items-center space-x-3 text-teal-100">
                <Calendar className="w-5 h-5" />
                <span className="text-sm">Create unlimited events</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Register form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 bg-gray-900">
          <div className="w-full max-w-md">
            {/* Mobile logo */}
            <div className="lg:hidden flex justify-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white logo">
                  HeroEvents
                </span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">
                  Create account
                </h1>
                <p className="text-gray-300">
                  Join us and start creating amazing events
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-200"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      {...register("name", { required: true })}
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-gray-700 text-white placeholder-gray-400 ${
                        errors.name
                          ? "border-red-500 bg-red-900/20"
                          : "border-gray-600"
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-400 text-sm font-medium">
                      {errors.name?.message || "Name is required"}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-200"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      {...register("email", { required: true })}
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-gray-700 text-white placeholder-gray-400 ${
                        errors.email
                          ? "border-red-500 bg-red-900/20"
                          : "border-gray-600"
                      }`}
                      placeholder="Enter your email"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-sm font-medium">
                      {errors.email?.message || "Email is required"}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-200"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      {...register("password", {
                        required: true,
                        pattern: {
                          value:
                            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{6,}$/,
                          message:
                            "Password must contain at least 6 characters, at least one uppercase letter, one lowercase letter and one number",
                        },
                      })}
                      className={`w-full pl-12 pr-12 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-gray-700 text-white placeholder-gray-400 ${
                        errors.password
                          ? "border-red-500 bg-red-900/20"
                          : "border-gray-600"
                      }`}
                      placeholder="Create a password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-400 text-sm font-medium">
                      {errors.password?.message || "Password is required"}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="photoURL"
                    className="block text-sm font-semibold text-gray-200"
                  >
                    Profile Photo URL{" "}
                    <span className="text-gray-400 font-normal">
                      (Optional)
                    </span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Image className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="photoURL"
                      name="photoURL"
                      type="url"
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-gray-700 text-white placeholder-gray-400 ${
                        errors.photoURL
                          ? "border-red-500 bg-red-900/20"
                          : "border-gray-600"
                      }`}
                      placeholder="https://example.com/photo.jpg"
                      {...register("photoURL", { required: false })}
                    />
                  </div>
                  {errors.photoURL && (
                    <p className="text-red-400 text-sm font-medium">
                      {errors.photoURL?.message || "Photo URL is optional"}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="auth-btn"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Creating account...</span>
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </button>

                <div className="text-center">
                  <p className="text-gray-300">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
