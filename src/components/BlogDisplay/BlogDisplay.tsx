import React from 'react';
import { FaUser, FaTag } from 'react-icons/fa';


const BlogDisplay = ({ post }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
          {post.content.map((block) => (
            <p key={block._key} className="text-gray-800 text-lg mb-4">
              {block.children[0].text}
            </p>
          ))}
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <FaTag className="text-xl text-purple-500" />
          <ul className="flex flex-wrap">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:from-purple-600 hover:to-indigo-600 transform transition duration-300 hover:scale-105 cursor-pointer"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center text-gray-600 transition-transform duration-300 hover:scale-105">
          <FaUser className="mr-2 text-xl text-blue-500" />
          <p className="font-semibold">Written by {post.author}</p>
        </div>
      </div>
    </div>

    
  );
};

export default BlogDisplay;
