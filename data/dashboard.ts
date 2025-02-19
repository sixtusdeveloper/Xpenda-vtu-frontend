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
    FaUserFriends,
    FaWifi,
    FaUser,
  } from "react-icons/fa";

  export const sidebarItems = [
    { name: "Dashboard", icon: FaTachometerAlt, link: "/dashboard" },
    { name: "Users", icon: FaUser, link: "/dashboard/users" },
    { name: "Orders", icon: FaShoppingCart, link: "/dashboard/orders" },
    {
      name: "Transactions",
      icon: FaExchangeAlt,
      link: "/dashboard/transactions",
    },
    { name: "Fund Wallet", icon: FaWallet, link: "/dashboard/fund-wallet" },
    { name: "Track Order", icon: FaHistory, link: "/dashboard/track-order" },
    { name: "Airtime", icon: FaMobileAlt, link: "/dashboard/airtime" },
    { name: "Data", icon: FaWifi, link: "/dashboard/data" },
    { name: "Cable TV", icon: FaTv, link: "/dashboard/cable-tv" },
    { name: "Electricity", icon: FaBolt, link: "/dashboard/electricity" },
    { name: "Epins", icon: FaFileInvoice, link: "/dashboard/epins" },
    { name: "Betting", icon: FaGamepad, link: "/dashboard/betting" },
    { name: "Referral", icon: FaUserFriends, link: "/dashboard/referral" },
  ];
  
// Grapgh Chart data
export const revenueData = [
  { name: "Jan", revenue: 5000 },
  { name: "Feb", revenue: 7000 },
  { name: "Mar", revenue: 6500 },
  { name: "Apr", revenue: 9000 },
  { name: "May", revenue: 12000 },
];

export const transactionsData = [
  { name: "Mon", transactions: 200 },
  { name: "Tue", transactions: 350 },
  { name: "Wed", transactions: 280 },
  { name: "Thu", transactions: 450 },
  { name: "Fri", transactions: 600 },
];

export const usersData = [
  { name: "Jan", users: 1500 },
  { name: "Feb", users: 2000 },
  { name: "Mar", users: 2500 },
  { name: "Apr", users: 3000 },
  { name: "May", users: 3500 },
];

export const referralData = [
  { month: "Jan", referrals: 5 },
  { month: "Feb", referrals: 10 },
  { month: "Mar", referrals: 15 },
  { month: "Apr", referrals: 20 },
  { month: "May", referrals: 30 },
  { month: "Jun", referrals: 45 },
];

export const servicesData = [
  { name: "Airtime", value: 4000 },
  { name: "Data", value: 6000 },
  { name: "Electricity", value: 3500 },
  { name: "Betting", value: 2500 },
];

export const deviceData = [
  { name: "Mobile", value: 7000 },
  { name: "Desktop", value: 3000 },
];

export const COLORS = ["#3b82f6", "#f97316", "#10b981", "#ef4444"];