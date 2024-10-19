import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/page/MainLayout";
import NotFound from "../NotFound";
import Auth from "../modules/Auth/pages/Auth";
import Login from "../modules/Auth/pages/Login";
import SendOTP from "../modules/Auth/components/SendOTP";
import MatchOTP from "../modules/Auth/components/MatchOTP";
import NewPassword from "../modules/Auth/components/NewPassword";
import PrivateRouter from "./PrivateRouter";
import { appRoutes } from "./AppRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRouter children={<MainLayout />} />,
    errorElement: <NotFound />,
    children: appRoutes.map(({ path, element, children }) => ({
      path: path,
      element: element,
      children: children,
    })),
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "send-otp",
        element: <SendOTP />,
      },
      {
        path: "match-otp",
        element: <MatchOTP />,
      },
      {
        path: "new-password",
        element: <NewPassword />,
      },
    ],
  },
]);

export default router;
