import { IconCheck } from "@tabler/icons-react";
import PrimaryButton from "./UI/PrimaryButton";

const PricingCard = ({ plan, isHighlighted }) => {
  return (
    <div
      className={`relative flex-1 min-w-[300px] max-w-[380px] p-8 border border-gray-200 rounded-lg transition-transform duration-300 
        ${isHighlighted ? "bg-primary text-white scale-105 z-10 shadow-lg" : "bg-white text-black z-0"}
      `}
    >
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
        <div className="mb-2">
          <span className="text-4xl font-bold">{plan.price}</span>
        </div>
        <p className={`text-sm ${isHighlighted ? "text-gray-200" : "text-gray-600"}`}>{plan.description}</p>
      </div>

      <div className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <IconCheck
              size={20}
              className={`flex-shrink-0 mt-1 ${isHighlighted ? "text-white" : "text-blue-500"}`}
            />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <PrimaryButton>Try Whitepace free →</PrimaryButton>
    </div>
  );
};

export default PricingCard;
