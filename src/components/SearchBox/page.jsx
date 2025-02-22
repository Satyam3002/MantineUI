import React, { useState, useEffect } from "react";
import { TextInput, Button, Container, Title, Group } from "@mantine/core";
import { Search } from "lucide-react";

const SearchTypingAnimation = () => {
  const phrases = [
    "GeeksforGeeks courses",
    "Complete Interview Preparation",
    "Learn Python C++ JavaScript",
  ];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBetweenPhrases = 1500;

    const typeText = () => {
      const currentPhrase = phrases[phraseIndex];

      if (!isDeleting) {
        if (text.length < currentPhrase.length) {
          setText((prev) => currentPhrase.slice(0, prev.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseBetweenPhrases);
        }
      } else {
        if (text.length > 0) {
          setText((prev) => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    };

    const timeoutId = setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, phraseIndex]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#e6fff8] to-[#ffffff] flex justify-center items-center">
      <Container className="flex flex-col items-center w-full max-w-4xl p-4">
        <Title order={1} className="text-4xl font-bold mb-8 text-center">
          Hello, What Do You Want To Learn?
        </Title>

        {/* Search Input Field */}
        <div className="relative w-full">
          <TextInput
            value={text}
            readOnly
            placeholder="Search..."
            size="xl"
            radius="md"
            className="w-full px-4 py-8 rounded-lg focus:outline-none focus:border-blue-500 text-lg"
          />
          <Search className="absolute pr-4  right-4 top-1/2 transform -translate-y-1/2 text-green-600" size={48} />
        </div>

        {/* Action Buttons */}
        <Group spacing="md" mt="md">
          <Button variant="outline" color="gray" radius="md">
            Master DS & ML
          </Button>
          <Button color="dark" radius="md">
            Courses @90% Refund
          </Button>
          <Button variant="outline" color="gray" radius="md">
            Full Stack Live Classes
          </Button>
        </Group>
      </Container>
    </div>
  );
};

export default SearchTypingAnimation;
