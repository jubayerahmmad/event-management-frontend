import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Calendar, Clock, MapPin, Search, Users } from "lucide-react";
import Loader from "../../components/Loader";

const Events = () => {
  const axiosPublic = useAxiosPublic();

  const { data: eventData, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/event/events");

      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  console.log(eventData);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-100 mb-2">All Events</h1>
          <p className="text-gray-300">
            Discover and join amazing events in your area
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events by title..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Date Filter */}
            <div className="lg:w-64">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="all">All Dates</option>
                <option value="today">Today</option>
                <option value="currentWeek">Current Week</option>
                <option value="lastWeek">Last Week</option>
                <option value="currentMonth">Current Month</option>
                <option value="lastMonth">Last Month</option>
              </select>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventData.map((event) => (
            <div
              key={event._id}
              className="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-300 mb-3">
                  By {event.organizerName}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
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

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {event.description}
                </p>

                <button className="btn-primary">Join Event</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
