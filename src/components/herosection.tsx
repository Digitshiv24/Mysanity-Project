import React from 'react';

const HeroSection = ({ title, content }) => {
  return (
    <div className="bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-700  flex flex-col justify-center items-center p-6">
      <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight animate-fadeInUp mb-8">
        {title}
      </h2>
      {content.map((block) => (
        <p key={block._key} className="text-gray-800 my-4 text-lg md:text-xl">
          {block.children[0].text}
        </p>
      ))}
    </div>
  );
};

export default HeroSection;
