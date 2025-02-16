import { Title, Text, Button, Container, Image } from "@mantine/core";
import PrimaryButton from "./UI/PrimaryButton";

const WorkTogetherSection = () => {
  return (
    <Container size="lg" className=" px-20">
      <div className="flex flex-col-reverse md:flex-row items-center gap-20">
        {/* Left Content */}
        <div className="flex-1">
          <img src="./img2.png" alt="" />
        </div>

        {/* Right Content */}
        <div className="max-w-[500px] space-y-6">
          <Title className="text-4xl md:text-5xl font-bold">
            Work{" "}
            <span className="inline ">
              together
            </span>
          </Title>
          
          <Text className="text-lg text-gray-600">
            With whitepace, share your notes with your colleagues and collaborate on them.
            You can also publish a note to the internet and share the URL with others.
          </Text>

            <PrimaryButton>Try Whitepace free →</PrimaryButton>
        </div>
      </div>
    </Container>
  );
};

export default WorkTogetherSection;