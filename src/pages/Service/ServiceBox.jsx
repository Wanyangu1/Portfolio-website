/* eslint-disable react/jsx-key */
import { AiFillLayout } from "react-icons/ai";
import { MdDashboardCustomize, MdIntegrationInstructions } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";


const ServicesData = [
  {
    name: "ICT support & Network maintenance",
    description: "I can offer reliable ICT support for seamless business operations.",
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    bgColor: "bg-fuchsia-500/70",
  },
  {
    name: "Web Design&Development",
    description: "Designing, developing and hosting webapps with responsive design and providing maintenance & Support.",
    icon: <AiFillLayout className="text-4xl" />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: "Payment intergration",
    description: "Integrating paypal, M-pesa and card payments into your system.",
    icon: <MdIntegrationInstructions className="text-4xl" />,
    bgColor: "bg-lime-500/70",
  },
  {
    name: "Custom Software Solutions",
    description: "Creation of custom software solution that cater for your specific needs.",
    icon: <MdDashboardCustomize className="text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
];
const ServiceBox = () => {
  return (
    <div className="h-full mt-10 text-white">
      <div className="grid grid-cols-2 gap-6">
        {ServicesData.map(({ name, description, icon, bgColor }) => (
          <div className={`p-3 ${bgColor} min-h-[180px] rounded-xl`}>
            <div className="p-3 space-y-3">
              {icon}
              <h1 className="font-semibold text-black/60">{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBox;