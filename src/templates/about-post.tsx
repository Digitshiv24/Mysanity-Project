import { graphql } from 'gatsby';
import React from 'react';
import AboutContent from '../components/AboutContent/AboutContent';

const About = ({ data }) => {
  const page = data.sanityPage;

  return (
    <div>
      {page && (
        <div>
          <AboutContent content={page.content} title={page.title} />
        </div>
      )}
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    sanityPage(slug: { current: { eq: $slug } }) {
      id
      title
      slug {
        current
      }
      content {
        children {
          text
        }
      }
    }
  }
`;

export default About;
