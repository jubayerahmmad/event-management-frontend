const Loader = () => {
  return (
    <div className="flex gap-3 justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
      <span className="text-blue-500 text-2xl font-bold">Loading...</span>
    </div>
  );
};

export default Loader;
