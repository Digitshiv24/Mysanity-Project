import React from 'react';


const AboutContent = ({ content,title }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-600 font-serif">
        {title}
      </h2>
      <div className="space-y-4">
        {content.map((block, index) => (
          <div key={block._key}>
            <p
              className={`text-gray-800 text-base md:text-lg leading-relaxed ${
                index === 0 ? 'font-semibold' : ''
              }`}
            >
              {block.children[0].text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutContent;
