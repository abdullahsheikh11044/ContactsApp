import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import Login from "./features/user/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
