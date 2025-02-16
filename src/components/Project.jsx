import { Title, Text, Button, Container, Group, Stack } from "@mantine/core";
import PrimaryButton from "./UI/PrimaryButton";

const ProjectSection = () => {
  return (
    <Container size="lg" className="pt-8 px-20">
      <div className="flex flex-col justify-end md:flex-row  items-center gap-44">
        {/* Left Content */}
        <div className="max-w-[500px] space-y-6">
          <Title className="text-4xl md:text-5xl font-bold">
            Project
            <br />
            Management
          </Title>
          
          <Text className="text-lg text-gray-600">
            Images, videos, PDFs and audio files are supported. Create math expressions and
            diagrams directly from the app. Take photos with the mobile app and save them
            to a note.
          </Text>

          <PrimaryButton>Try Whitepace free →</PrimaryButton>
        </div>

        {/* Right Content*/}
        <div className="flex-1">
          <div className=" rounded-lg w-full h-[500px]">
          <img src="./image.png" alt="" />
          </div>

        </div>
      </div>
    </Container>
  );
};

export default ProjectSection;