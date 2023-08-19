import React from 'react';
import { graphql } from 'gatsby';
import HeroSection from '../components/herosection';

const Home = ({ data }) => {
  const page = data.sanityProject;

  return (
    <div>
      <HeroSection title={page.name}content={page.content} />
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
      slug {
        current
      }
    }
  }
`;

export default Home;
