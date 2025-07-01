import axios from "axios";

const useAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });
  return axiosInstance;
};

export default useAxiosInstance;
