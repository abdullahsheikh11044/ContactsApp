import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import Login from "./features/user/login";
import Register from "./features/user/register";
import Authorization from "./layouts/authorization";
import UserPage from "./features/user/userPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
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
    path: "/users",
    element: <UserPage />,
  },
  {
    element: <Authorization />,
    children: [],
  },
]);

export default router;
