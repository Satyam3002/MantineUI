import { Title, Text, Container, Group } from "@mantine/core";
import PrimaryButton from "./UI/PrimaryButton";
import { Button } from "@mantine/core";

const HeroSection = () => {
  return (
    <div className="bg-[#002B5B] w-full relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-50">
        <img src="./Element.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10">
        {/* Navigation */}
        <header>
          <Container size="lg" className="py-4 px-20">
            <div className="flex items-center justify-between">
              <div className="text-white text-2xl font-bold">
                <img src="./Logo Icon.png" alt="" />
                whitepace
              </div>
              
              <div className="hidden md:flex items-center space-x-12">
                <nav className="flex items-center space-x-12">
                  <Button variant="subtle" color="gray" className="text-white">
                    Products
                  </Button>
                  <Button variant="subtle" color="gray" className="text-white">
                    Solutions
                  </Button>
                  <Button variant="subtle" color="gray" className="text-white">
                    Resources
                  </Button>
                  <Button variant="subtle" color="gray" className="text-white">
                    Pricing
                  </Button>
                </nav>
                <div className="flex items-center space-x-4">
                  <Button variant="subtle" className="text-primary bg-lightyellow px-6 py-2 rounded-lg">
                    Login
                  </Button>
                  <PrimaryButton>Try Whitepace free →</PrimaryButton>
                </div>
              </div>
            </div>
          </Container>
        </header>
        <Container size="lg" className="pt-20 px-20 pb-32">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <Title order={1} className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
                Get More Done with whitepace
              </Title>
              <Text className="text-gray-200 text-lg max-w-xl">
                Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
              </Text>
              <Group>
                <PrimaryButton>Try Whitepace free →</PrimaryButton>
              </Group>
            </div>
            {/* Right Image */}
            <div className="hidden md:block relative z-20">
              <img src="./image.png" alt="" className="relative" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;