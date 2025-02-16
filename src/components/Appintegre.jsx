import React from "react";
import { Container, Title, Text, Button } from "@mantine/core";
import PrimaryButton from "./UI/PrimaryButton";
import { ChevronRight } from "lucide-react";

const AppIntegrationHero = () => {
  return (
    <div className="relative w-full h-[500px] px-24 bg-[#051c3c] overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img src="./Element.png" alt="" className="w-full h-full object-cover" />
      </div>


      <Container className="relative z-20 h-full flex items-center">
        <div className="flex w-full gap-20 items-center">
          {/* Left side with app icons */}
          <div className="w-1/2 h-auto flex justify-center">
            <img src="./Apps.png" alt="" className="max-w-full h-auto" />
          </div>

          {/* Right side with content */}
          <div className="flex-1 flex flex-col justify-center">
            <Title className="text-4xl font-bold text-white mb-4 leading-tight">
              Work with Your Favorite Apps Using Whitepace
            </Title>

            <Text className="text-gray-300 mb-6 leading-relaxed">
              Whitepace teams up with your favorite software. Integrate with over
              1000+ apps with Zapier to have all the tools you need for your
              project success.
            </Text>

            <PrimaryButton>
               
                Read more → 
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AppIntegrationHero;
