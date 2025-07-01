import { format } from "date-fns";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import toast from "react-hot-toast";

const EventCard = ({ event }) => {
  return (
    <div className="bg-gray-800  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-2xl font-bold text-gray-100 mb-2">{event.title}</h3>
        <p className="text-sm text-gray-300 mb-3">By {event.organizerName}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-300">
            <Calendar className="w-4 h-4 mr-2" />
            {format(new Date(event.date), "MMM d, yyyy")}
          </div>
          <div className="flex items-center text-sm text-gray-300">
            <Clock className="w-4 h-4 mr-2" />
            {event.time}
          </div>
          <div className="flex items-center text-sm text-gray-300">
            <MapPin className="w-4 h-4 mr-2" />
            {event.location}
          </div>
          <div className="flex items-center text-sm text-gray-300">
            <Users className="w-4 h-4 mr-2" />
            {event.attendeeCount} attendees
          </div>
        </div>

        <p className="text-gray-300 text-sm mb-4 flex-grow">
          {event.description}
        </p>

        <button
          onClick={() =>
            toast.error(
              "This feature is not available yet! Please try again later."
            )
          }
          className={`px-6 py-2 rounded-xl text-xl font-semibold w-full mt-auto bg-blue-500 hover:bg-blue-600`}
        >
          Join Event
        </button>
      </div>
    </div>
  );
};

export default EventCard;
