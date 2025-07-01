const DeleteConfirmationModal = ({
  setShowDeleteConfirmModal,
  handleDelete,
  eventToDeleteId,
}) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Confirm Delete
        </h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this event? This action cannot be
          undone.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => setShowDeleteConfirmModal(false)}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              handleDelete(eventToDeleteId, true);
              setShowDeleteConfirmModal(false);
            }}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
