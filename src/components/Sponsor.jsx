import React from 'react';

const SponsorsSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold inline-block relative">
          Our sponsors
          <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-300/60 -z-10"></span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-20 md:gap-36">
        <div className="w-36">
          <img src="/Apple.png" alt="Apple" className="w-full h-auto" />
        </div>
        <div className="w-36">
          <img src="/Microsoft.png" alt="Microsoft" className="w-full h-auto" />
        </div>
        <div className="w-36">
          <img src="/Slack.png" alt="Slack" className="w-full h-auto" />
        </div>
        <div className="w-36">
          <img src="/Google.png" alt="Google" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;