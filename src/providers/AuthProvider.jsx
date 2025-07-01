import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import useAxiosInstance from "../hooks/useAxiosInstance";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const axiosInstance = useAxiosInstance();

  const createUser = async (email, password, name, photoURL) => {
    setLoading(true);
    try {
      // save to database
      const userInfo = { email, name, photoURL, password };

      const { data } = await axiosInstance.post("/user/save-user", userInfo);

      setUser(data);
      return data;
    } catch (error) {
      console.log(error);
      return { error: error.response?.data || { message: error.message } };
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (email, password) => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.post("/user/login", {
        email,
        password,
      });

      if (data?.token) {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
      }
      return data;
    } catch (error) {
      console.log(error);
      return { error: error.response?.data || { message: error.message } };
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const authDetails = {
    user,
    loading,
    createUser,
    loginUser,
    logoutUser,
  };
  return (
    <AuthContext.Provider value={authDetails}>{children}</AuthContext.Provider>
  );
};
