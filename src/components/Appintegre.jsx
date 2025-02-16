import React from "react";
import { Container, Title, Text } from "@mantine/core";
import PrimaryButton from "./UI/PrimaryButton";

const AppIntegrationHero = () => {
  return (
    <div className="relative w-full h-auto px-6 md:px-12 lg:px-24 bg-[#051c3c] md:h-[500px] flex flex-col md:flex-row items-center">
      {/* Background Image (Hidden on Mobile) */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img src="./Element.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Container with content */}
      <Container className="relative z-20 w-full flex flex-col md:flex-row items-center gap-8 md:gap-20 py-10 md:py-0">
        {/* Image Section (Centered in Mobile View) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="./Apps.png" alt="Apps" className="max-w-[80%] md:max-w-full h-auto" />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <Title className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Work with Your Favorite Apps Using Whitepace
          </Title>

          <Text className="text-gray-300 mb-6 leading-relaxed">
            Whitepace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for your
            project success.
          </Text>

          <div className="flex justify-center md:justify-start">
            <PrimaryButton>Read more →</PrimaryButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AppIntegrationHero;
