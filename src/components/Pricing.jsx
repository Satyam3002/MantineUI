import { Text } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import PrimaryButton from "./UI/PrimaryButton";

const PricingPlans = () => {
  const plans = [
    {
      title: "Free",
      price: "$0",
      description: "Capture ideas and find them quickly",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
    },
    {
      title: "Personal",
      price: "$11.99",
      description: "Keep home and family on track",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
    },
    {
      title: "Organization",
      price: "$49.99",
      description: "Capture ideas and find them quickly",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity, 
          Evernote has the right plan for you.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 relative">
        {plans.map((plan, index) => (
          <div
            key={plan.title}
            className={`relative flex-1 min-w-[300px] max-w-[380px] p-8 border border-gray-200 rounded-lg transition-transform duration-300 
              ${index === 1 ? "bg-primary text-white scale-105 z-10 shadow-lg" : "bg-white text-black z-0"}
            `}
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
              </div>
              <p className={`text-sm ${index === 1 ? "text-gray-200" : "text-gray-600"}`}>{plan.description}</p>
            </div>

            <div className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <IconCheck
                    size={20}
                    className={`flex-shrink-0 mt-1 ${index === 1 ? "text-white" : "text-blue-500"}`}
                  />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <PrimaryButton>Try Whitepace free →</PrimaryButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
