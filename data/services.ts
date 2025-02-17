// /app/data/servicesData.ts
export type Service = {
    title: string;
    description: string;
    icon: string; // Store icon name as a string, we'll map it to the icon in the component
    bg: string;
  };
  
  export const services: Service[] = [
    {
      title: "Buy & Resell Airtime & Data",
      description:
        "Get the best rates for airtime and data top-ups across all networks.",
      icon: "PhoneIcon", // Use the icon's name
      bg: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      title: "Electricity Bills Payment",
      description:
        "Pay your electricity bills instantly with seamless transactions.",
      icon: "ZapIcon",
      bg: "bg-gradient-to-r from-blue-400 to-blue-700",
    },
    {
      title: "Cable TV Subscription",
      description:
        "Subscribe or renew your DStv, GOtv, and Startimes plans easily.",
      icon: "TvIcon",
      bg: "bg-gradient-to-r from-red-400 to-pink-500",
    },
    {
      title: "Convert Airtime to Cash",
      description:
        "Turn excess airtime into cash and withdraw directly to your bank.",
      icon: "DollarSignIcon",
      bg: "bg-gradient-to-r from-green-400 to-teal-500",
    },
  ];
  