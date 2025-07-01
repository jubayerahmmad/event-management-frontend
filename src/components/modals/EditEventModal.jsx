import { useForm } from "react-hook-form";
import { FileText, Users, Calendar, Clock, MapPin } from "lucide-react";
import toast from "react-hot-toast";

const EditEventModal = ({ setShowEditModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    toast.error("This feature is not available yet! Please try again later.");
  };
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-8">
            <h1 className="text-3xl font-bold text-white">Edit Event</h1>
            <p className="text-blue-100 mt-2">
              Fill in the details to edit your event
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
            {/* Event Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                <FileText className="w-4 h-4 inline mr-1" />
                Event Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                {...register("title", { required: true })}
                className={`w-full px-4 py-2 border rounded-lg text-gray-300 ${
                  errors.title ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter event title"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Name */}
            <div>
              <label
                htmlFor="organizerName"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                <Users className="w-4 h-4 inline mr-1" />
                Organizer Name *
              </label>
              <input
                type="text"
                id="organizerName"
                name="organizerName"
                {...register("organizerName", { required: true })}
                className={`w-full px-4 py-2 border rounded-lg text-gray-300  ${
                  errors.organizerName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter organizer name"
              />
              {errors.organizerName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.organizerName.message}
                </p>
              )}
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  {...register("date", { required: true })}
                  className={`w-full px-4 py-2 border rounded-lg text-gray-300  ${
                    errors.date ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.date && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.date.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  <Clock className="w-4 h-4 inline mr-1" />
                  Time *
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  {...register("time", { required: true })}
                  className={`w-full px-4 py-2 border rounded-lg text-gray-300  ${
                    errors.time ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.time && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.time.message}
                  </p>
                )}
              </div>
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                <MapPin className="w-4 h-4 inline mr-1" />
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                {...register("location", { required: true })}
                className={`w-full px-4 py-2 border rounded-lg text-gray-300 ${
                  errors.location ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter event location"
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                {...register("description", { required: true })}
                className={`w-full px-4 py-2 border rounded-lg text-gray-300  ${
                  errors.description ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Describe your event..."
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Attendee Count */}
            <div>
              <label
                htmlFor="attendeeCount"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Initial Attendee Count
              </label>
              <input
                type="number"
                id="attendeeCount"
                name="attendeeCount"
                min="0"
                {...register("attendeeCount", { required: true })}
                className={`w-full px-4 py-2 border rounded-lg text-gray-300  ${
                  errors.attendeeCount ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.attendeeCount && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.attendeeCount.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setShowEditModal(false)}
                className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={() =>
                  toast.error(
                    "This feature is not available yet! Please try again later."
                  )
                }
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Update Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEventModal;
