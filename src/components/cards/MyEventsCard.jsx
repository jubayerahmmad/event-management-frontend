import { format } from "date-fns";
import { Calendar, Clock, Edit, MapPin, Trash2, Users } from "lucide-react";

const MyEventsCard = ({ event }) => {
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

        <div className="flex space-x-2">
          <button
            // onClick={() => handleEdit(event)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
          >
            <Edit className="w-4 h-4 mr-1" />
            Update
          </button>
          <button
            // onClick={() => handleDeleteClick(event)}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
          >
            <Trash2 className="w-4 h-4 mr-1" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyEventsCard;
