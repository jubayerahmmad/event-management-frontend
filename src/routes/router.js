import { createBrowserRouter } from "react-router-dom";
import Home from "../pagess/Home/Home";
import Login from "../pagess/Login/Login";
import Register from "../pagess/Register/Register";
import NotFound from "../pagess/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
