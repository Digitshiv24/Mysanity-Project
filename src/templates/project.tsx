import React from 'react';
import { graphql } from 'gatsby';
import HeroSection from '../components/hero/herosection';
import CategoryList from '../components/CategoryList/CategoryList'

const Home = ({ data }) => {
  const page = data.sanityProject;

  return (
    <div>
      <HeroSection title={page.name} content={page.content} image={page.image.asset.gatsbyImageData} />
      {page.content.length > 0 && (
        <CategoryList categories={page.category} />
      )}
    </div>
  );
};

export const query = graphql`
  query($id: String!) {
    sanityProject(id: { eq: $id }) {
      name
      id
      content {
        _key
        children {
          text
        }
      }
      category {
        name
        _type
        content {
          children {
            text
          }
          _key
        }
        slug {
          current
        }
        image {
          asset {
            gatsbyImageData
          }
        }
      }
      image {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;

export default Home;
