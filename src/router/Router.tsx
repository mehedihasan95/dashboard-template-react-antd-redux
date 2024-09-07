import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/page/MainLayout";
import NotFound from "../NotFound";
import Dashboard from "../modules/Dashboard/page/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
