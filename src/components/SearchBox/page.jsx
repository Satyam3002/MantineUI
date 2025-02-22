import React, { useState, useEffect } from 'react';

const SearchTypingAnimation = () => {
  const phrases = [
    'GeeksforGeeks courses',
    'Complete Interview Preparation',
    'Learn Python C++ JavaScript'
  ];
  const [text, setText] = useState('');
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
      <div className="flex flex-col items-center w-full max-w-4xl p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Hello, What Do You Want To Learn?
        </h1>

        <div className="relative w-full">
          <input
            type="text"
            value={text}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 text-lg"
            readOnly
            placeholder="Search..."
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <button className="px-4 py-2 rounded-md bg-gray-200 border border-gray-300">
            Master DS & ML
          </button>
          <button className="px-4 py-2 rounded-md bg-blue-900 text-white">
            Courses @90% Refund
          </button>
          <button className="px-4 py-2 rounded-md bg-gray-200 border border-gray-300">
            Full Stack Live Classes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchTypingAnimation;
