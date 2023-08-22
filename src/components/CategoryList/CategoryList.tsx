import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const CategoriesGrid = ({ categories }) => {
  console.log(categories)
  return (
    <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
      {categories.map((category) => {
        const categoryImage = getImage(category.image.asset);

        return (
          <Link
            to={`/${category.slug.current}`}
            key={category.slug.current} 
            className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-xl transform transition duration-300 hover:scale-105 bg-current"
          >
            <div className="relative overflow-hidden rounded-md hover:animate-pulse">
              <GatsbyImage
                image={categoryImage}
                alt={category.name}
                className="object-cover w-full h-40 rounded-t-lg"
              />
            </div>
            <div className=' p-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-b-lg'>
              <h3 className="text-white font-bold text-2xl md:text-xl lg:text-2xl xl:text-sm font-sans hover:font-serif">{category.name}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoriesGrid;
