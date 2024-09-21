import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/page/MainLayout";
import NotFound from "../NotFound";
import Dashboard from "../modules/Dashboard/page/Dashboard";
import Students from "../modules/Students/pages/Students";
import Invoices from "../modules/Invoices/pages/Invoices";
import InvoiceCreate from "../modules/Invoices/components/InvoiceCreate";
import SingleInvoice from "../modules/Invoices/components/SingleInvoice";
import EBLBankLtd from "../modules/Accounts/pages/EBLBankLtd";
import Profile from "../modules/Setup/pages/Profile";
import Settings from "../modules/Setup/pages/Settings";
import Auth from "../modules/Auth/pages/Auth";
import Login from "../modules/Auth/pages/Login";
import SendOTP from "../modules/Auth/components/SendOTP";
import MatchOTP from "../modules/Auth/components/MatchOTP";
import NewPassword from "../modules/Auth/components/NewPassword";

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
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "invoices",
        children: [
          {
            path: "create",
            element: <InvoiceCreate />,
          },
          {
            path: "list",
            element: <Invoices />,
          },
          {
            path: "list/:id",
            element: <SingleInvoice />,
          },
        ],
      },
      {
        path: "accounts",
        children: [
          {
            path: "banks",
            children: [
              {
                path: "ebl",
                element: <EBLBankLtd />,
              },
            ],
          },
        ],
      },

      {
        path: "/setup",
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
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
