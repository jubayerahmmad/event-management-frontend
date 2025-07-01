import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import { Search } from "lucide-react";
import Loader from "../../components/Loader";
import EventCard from "../../components/cards/EventCard";
import { useState } from "react";
import toast from "react-hot-toast";

const Events = () => {
  const axiosInstance = useAxiosInstance();
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");

  const {
    data: eventData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["events", search],
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `/event/events?search=${search}`
      );

      return data;
    },
  });

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
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search events by title..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Date Filter */}
            <div className="lg:w-64">
              <select
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  toast.error(
                    "This feature is not available yet! Please try again later."
                  );
                }}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-300 rounded-lg text-gray-300"
              >
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

        {isLoading ? (
          <Loader />
        ) : (
          // Events Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventData.map((event) => (
              <EventCard key={event._id} event={event} refetch={refetch} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
