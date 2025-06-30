import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const axiosPublic = useAxiosPublic();

  const createUser = async (email, password, name, photoURL) => {
    setLoading(true);
    try {
      // save to database
      const userInfo = { email, name, photoURL, password };

      const { data } = await axiosPublic.post("/user/save-user", userInfo);
      console.log("data from createUser", data);
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
      const { data } = await axiosPublic.post("/user/login", {
        email,
        password,
      });
      console.log("data from loginUser", data);
      setUser(data);
      return data;
    } catch (error) {
      console.log(error);
      return { error: error.response?.data || { message: error.message } };
    } finally {
      setLoading(false);
    }
  };

  const authDetails = {
    user,
    loading,
    createUser,
    loginUser,
  };
  return (
    <AuthContext.Provider value={authDetails}>{children}</AuthContext.Provider>
  );
};
