import { PhoneIcon, ZapIcon, TvIcon, DollarSignIcon } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Buy & Resell Airtime & Data",
    description:
      "Get the best rates for airtime and data top-ups across all networks.",
    icon: (
      <PhoneIcon className="w-16 h-16 p-2 text-green-500 overflow-hidden" />
    ),
    bg: "bg-secondary dark:bg-gray-900 shadow-lg rounded-md",
    link: "Get started",
    details:
      "With Xpenda, you can buy and resell airtime & data at competitive rates. Whether you're an individual or a reseller, enjoy seamless transactions with instant delivery. We support all major networks, ensuring convenience at your fingertips. Our platform integrates cutting-edge security measures to protect your transactions and guarantees real-time processing for enhanced efficiency. Maximize your profits with our low-cost pricing model and reliable service delivery, positioning yourself as a top reseller in the industry. With an intuitive dashboard and automated transaction tracking, you stay in full control of your business operations, ensuring long-term growth and profitability.",
  },
  {
    title: "Electricity Bills Payment",
    description:
      "Pay your electricity bills instantly with seamless transactions.",
    icon: <ZapIcon className="w-16 h-16 p-2 overflow-hidden text-purple-500" />,
    bg: "bg-secondary dark:bg-gray-900 shadow-lg rounded-md",
    link: "Get started",
    details:
      "No more waiting in long queues! Pay your electricity bills with Xpenda effortlessly. We support all major electricity providers, ensuring a seamless experience with instant confirmation. Never get disconnected again! Our automated system ensures accurate billing and provides instant receipts for transparency and accountability. Xpenda offers a highly secure and efficient solution, allowing customers to settle their utility bills on time without stress or hidden charges. Our service guarantees uninterrupted electricity supply, saving you from the hassle of power disconnections and unplanned outages. Enjoy round-the-clock accessibility and the convenience of managing your utility payments from anywhere, anytime.",
  },
  {
    title: "Cable TV Subscription",
    description:
      "Subscribe or renew your DStv, GOtv, and Startimes plans easily.",
    icon: <TvIcon className="w-16 h-16 p-2 overflow-hidden text-blue-500" />,
    bg: "bg-secondary dark:bg-gray-900 shadow-lg rounded-md",
    link: "Get started",
    details:
      "Keep your entertainment running with hassle-free cable TV subscriptions. Whether you need DStv, GOtv, or Startimes, Xpenda provides instant renewals so you never miss your favorite shows. Our platform is optimized for fast transactions, ensuring that your subscription is processed in real-time with comprehensive customer support. No delays, no interruptions—just seamless entertainment at your convenience. Gain access to exclusive discounts and promotional offers while enjoying a user-friendly interface that simplifies the subscription process. Never experience service disruptions again with our auto-renewal feature, ensuring continuous entertainment without manual interventions.",
  },
  {
    title: "Convert Airtime to Cash",
    description:
      "Turn excess airtime into cash and withdraw directly to your bank.",
    icon: (
      <DollarSignIcon className="w-16 h-16 p-2 overflow-hidden text-pink-500" />
    ),
    bg: "bg-secondary dark:bg-gray-900 shadow-lg rounded-md",
    link: "Get started",
    details:
      "Have extra airtime you don’t need? Convert it to cash instantly with Xpenda. Get fast payments directly to your bank account at the best rates in the market. Our system is designed for speed, security, and flexibility, allowing users to convert airtime into cash with a high success rate and minimal transaction fees. Say goodbye to unused airtime and hello to instant liquidity with Xpenda’s highly efficient and user-friendly service. Our robust platform ensures quick processing with zero hidden charges, providing you with the most value for your transactions. Whether you’re an entrepreneur or an individual seeking financial flexibility, Xpenda is your trusted partner for instant cash conversions.",
  },
];

const ServiceDetails = () => {
  return (
    <div className="py-16 bg-secondary">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Our Services in Detail
        </h2>
        <p className="text-base lg:text-center text-left max-w-3xl mx-auto mb-12">
          Explore our services in-depth and understand how Xpenda makes digital
          transactions effortless.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-sm border text-left transition-transform transform hover:scale-105 ${service.bg}`}
          >
            <div className="flex justify-start mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-[15px] opacity-90 leading-6">
              {service.details}
            </p>
            <Link
              href="/dashboard/subscriptions"
              className="mt-2 text-purple-600 text-base justify-end text-right hover:text-blue-500 flex font-semibold"
            >
              {service.link} &#8594;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
