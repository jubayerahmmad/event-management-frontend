import { useQuery } from "@tanstack/react-query";

import Loader from "../../components/Loader";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import { format } from "date-fns";
import { Calendar, Clock, Edit, MapPin, Trash2, Users } from "lucide-react";
import MyEventsCard from "../../components/cards/MyEventsCard";

const MyEvents = () => {
  const axiosInstance = useAxiosInstance();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user from my events", user);

  const {
    data: myEvents,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["my-events"],
    queryFn: async () => {
      const { data } = await axiosInstance(`/event/events/${user?.email}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user?.token}`,
        },
      });
      return data;
    },
  });

  console.log("error from my events", error);

  if (isLoading) {
    return <Loader />;
  }

  console.log(myEvents);

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-100 mb-2">My Events</h1>
          <p className="text-gray-100">Manage your created events</p>
        </div>

        {myEvents.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">
              No events yet
            </h3>
            <p className="text-gray-100 mb-4">
              Create your first event to get started
            </p>
            <a
              href="/add-event"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Create Event
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myEvents.map((event) => (
              <MyEventsCard key={event._id} event={event} />
            ))}
          </div>
        )}

        {/* Edit Modal
    {showEditModal && editingEvent && (
      <EditEventModal
        event={editingEvent}
        onUpdate={handleUpdate}
        onClose={() => {
          setShowEditModal(false);
          setEditingEvent(null);
        }}
      />
    )} */}

        {/* Delete Confirmation Modal */}
        {/* {showDeleteConfirm && eventToDelete && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Confirm Delete</h3>
          <p className="text-gray-600 mb-6">
            Are you sure you want to delete "{eventToDelete.title}"? This action cannot be undone.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => setShowDeleteConfirm(false)}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              // onClick={handleDeleteConfirm}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    )} */}
      </div>
    </div>
  );
};

export default MyEvents;
