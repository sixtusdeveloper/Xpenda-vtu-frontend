// Dashboard Sidebar Data
import {
    FaTachometerAlt,
    FaWallet,
    FaShoppingCart,
    FaExchangeAlt,
    FaMobileAlt,
    FaTv,
    FaBolt,
    FaGamepad,
    FaFileInvoice,
    FaHistory,
    FaBars,
  } from "react-icons/fa";

  export const sidebarItems = [
    { name: "Dashboard", icon: FaTachometerAlt, link: "/dashboard" },
    { name: "Orders", icon: FaShoppingCart, link: "/dashboard/orders" },
    {
      name: "Transactions",
      icon: FaExchangeAlt,
      link: "/dashboard/transactions",
    },
    { name: "Fund Wallet", icon: FaWallet, link: "/dashboard/fund-wallet" },
    { name: "Track Order", icon: FaHistory, link: "/dashboard/track-order" },
    { name: "Airtime", icon: FaMobileAlt, link: "/dashboard/airtime" },
    { name: "Data", icon: FaMobileAlt, link: "/dashboard/data" },
    { name: "Cable TV", icon: FaTv, link: "/dashboard/cable-tv" },
    { name: "Electricity", icon: FaBolt, link: "/dashboard/electricity" },
    { name: "Epins", icon: FaFileInvoice, link: "/dashboard/epins" },
    { name: "Betting", icon: FaGamepad, link: "/dashboard/betting" },
  ];