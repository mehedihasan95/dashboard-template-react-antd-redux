import { RouteObject } from "react-router-dom";
import EBLBankLtd from "../modules/Accounts/pages/EBLBankLtd";
import Dashboard from "../modules/Dashboard/page/Dashboard";
import InvoiceCreate from "../modules/Invoices/components/InvoiceCreate";
import SingleInvoice from "../modules/Invoices/components/SingleInvoice";
import Invoices from "../modules/Invoices/pages/Invoices";
import SingleOrder from "../modules/Orders/components/SingleOrder";
import Orders from "../modules/Orders/page/Orders";
import Profile from "../modules/Setup/pages/Profile";
import Settings from "../modules/Setup/pages/Settings";
import Students from "../modules/Students/pages/Students";

type AppRouteObject = RouteObject & {
  children?: AppRouteObject[];
};

export const appRoutes: AppRouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "orders",
    element: <Orders />,
  },
  {
    path: "orders/:id",
    element: <SingleOrder />,
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
];
