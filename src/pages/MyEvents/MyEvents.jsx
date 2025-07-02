import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import MyEventsCard from "../../components/cards/MyEventsCard";
import { useState } from "react";
import toast from "react-hot-toast";
import DeleteConfirmationModal from "../../components/modals/DeleteConfirmationModal";
import EditEventModal from "../../components/modals/EditEventModal";

const MyEvents = () => {
  const axiosInstance = useAxiosInstance();
  const user = JSON.parse(localStorage.getItem("user"));
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [eventToDeleteId, setEventToDeleteId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [updateEventId, setUpdateEventId] = useState(null);

  // get all my events
  const {
    data: myEvents,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["my-events", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosInstance(`/event/my-events/${user?.email}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user?.token}`,
        },
      });

      return data;
    },
  });

  // get event by id
  const { data: singleEvent, isLoading: isSingleEventLoading } = useQuery({
    queryKey: ["event", updateEventId],
    enabled: !!updateEventId,
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `/event/events/${updateEventId}`
      );
      return data;
    },
  });

  if (error) {
    toast.error(error.response.data.message || "Something went wrong");
  }

  if (isLoading || isSingleEventLoading) {
    return <Loader />;
  }

  // handle delete
  const handleDelete = async (eventId, isDelete) => {
    setEventToDeleteId(eventId);
    setShowDeleteConfirmModal(true);

    if (isDelete) {
      // delete event
      try {
        const { data } = await axiosInstance.delete(
          `/event/events/${eventId}`,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${user?.token}`,
            },
          }
        );

        toast.success(data.message || "Event has been deleted successfully");
        refetch();
      } catch (error) {
        toast.error(error.response.data.message || "Something went wrong");
      }
    }
  };

  // handle edit
  const handleUpdate = (eventId) => {
    setShowEditModal(true);
    setUpdateEventId(eventId);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-100 mb-2">My Events</h1>
          <p className="text-gray-100">Manage your created events</p>
        </div>

        {myEvents?.length === 0 ? (
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
            {myEvents?.map((event) => (
              <MyEventsCard
                key={event._id}
                event={event}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            ))}
          </div>
        )}

        {/* Edit Modal */}
        {showEditModal && (
          <EditEventModal
            event={singleEvent}
            setShowEditModal={setShowEditModal}
            refetch={refetch}
          />
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteConfirmModal && (
          <DeleteConfirmationModal
            handleDelete={handleDelete}
            setShowDeleteConfirmModal={setShowDeleteConfirmModal}
            eventToDeleteId={eventToDeleteId}
          />
        )}
      </div>
    </div>
  );
};

export default MyEvents;
