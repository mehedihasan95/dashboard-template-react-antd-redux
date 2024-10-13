import { MenuProps } from "antd";
import { NavLink } from "react-router-dom";
import Iconify from "../../configuration/IconifyConfig/IconifyConfig";

export type NavigationItem = {
  key: string;
  label: string;
  to?: string;
  icon: string;
  children?: NavigationItem[];
  category?: string;
};

const icons = { create: "pajamas:todo-add", list: "typcn:th-list" };

export const navigationMenu: NavigationItem[] = [
  {
    category: "MAIN MENU",
    key: "main-menu",
    label: "MAIN MENU",
    icon: "mdi:menu",
    children: [
      {
        key: "/",
        to: "/",
        label: "Dashboard",
        icon: "streamline:dashboard-circle-solid",
      },
    ],
  },
  {
    category: "PAGES",
    key: "pages",
    label: "PAGES",
    icon: "mdi:file-document-multiple",
    children: [
      {
        key: "/students",
        to: "/students",
        label: "Students",
        icon: "ph:student-fill",
      },
      {
        key: "/invoices",
        to: "/invoices",
        label: "Invoices",
        icon: "basil:invoice-solid",
        children: [
          {
            key: "/invoices/create",
            to: "/invoices/create",
            label: "Invoice Create",
            icon: icons.create,
          },
          {
            key: "/invoices/list",
            to: "/invoices/list",
            label: "Invoice List",
            icon: icons.list,
          },
        ],
      },
      {
        key: "/accounts",
        to: "/accounts",
        label: "Accounts",
        icon: "carbon:account",
        children: [
          {
            key: "/accounts/banks",
            to: "/accounts/banks",
            label: "Banks",
            icon: "radix-icons:dot-filled",
            children: [
              {
                key: "/accounts/banks/ebl",
                to: "/accounts/banks/ebl",
                label: "EBL Bank Ltd",
                icon: icons.list,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    category: "RESTAURANT",
    key: "restaurant",
    label: "RESTAURANT",
    icon: "carbon:restaurant",
    children: [
      {
        key: "/orders",
        to: "/orders",
        label: "Orders",
        icon: "lsicon:order-outline",
      },
    ],
  },

  {
    category: "PAYMENT",
    key: "payment",
    label: "PAYMENT",
    icon: "mage:dollar",
    children: [
      {
        key: "/payroll",
        to: "/payroll",
        label: "Payroll",
        icon: "mage:dollar",
      },
    ],
  },
  {
    category: "SETTINGS",
    key: "settings",
    label: "SETTINGS",
    icon: "uil:setting",
    children: [
      {
        key: "/setup/profile",
        to: "/setup/profile",
        label: "Profile",
        icon: "iconamoon:profile-circle-fill",
      },
      {
        key: "/setup/settings",
        to: "/setup/settings",
        label: "Settings",
        icon: "uil:setting",
      },
    ],
  },
];

export const renderMenuItem = (
  item: NavigationItem
): Required<MenuProps>["items"][number] => ({
  key: item.key,
  label: item.children ? (
    item.label
  ) : (
    <NavLink
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? "bold" : "normal",
        };
      }}
      to={String(item.to)}
    >
      {item.label}
    </NavLink>
  ),
  icon: <Iconify icon={item.icon} />,
  children: item.children?.map(renderMenuItem),
  type: item.category ? "group" : "item",
});
