import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    quote: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    bgColor: "bg-white",
    img: "/user1.png"
  },
  {
    id: 2,
    name: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    quote: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    bgColor: "bg-blue-500",
    img: "/user2.png"
  },
  {
    id: 3,
    name: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    quote: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    bgColor: "bg-blue-400",
    img: "/user3.png"
  }
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-12">
          What Our Clients Says
        
        </h2>

        <div className="flex gap-6 w-full justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${
                testimonial.bgColor
              } rounded-lg p-8 shadow-lg transition-all duration-300 w-full max-w-sm ${
                index === activeIndex ? 'scale-105' : 'scale-95'
              }`}
            >
              <div className="mb-6">
                <span className="text-4xl font-serif text-gray-600">"</span>
                <p className={`text-lg ${index === 0 ? 'text-gray-800' : 'text-white'}`}>
                  {testimonial.quote}
                </p>
              </div>
               <div>
                {/* Border Line */}
                <div className="border border-black w-full " />
                
               </div>
              <div className="flex items-center mt-6">
                <img
                    src={testimonial.img}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className={`font-medium ${index === 0 ? 'text-gray-800' : 'text-white'}`}>
                    {testimonial.name}
                  </h3>
                  <p className={`text-sm ${index === 0 ? 'text-gray-600' : 'text-white/80'}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-blue-500 w-4' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;