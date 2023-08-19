import { graphql } from 'gatsby';
import React from 'react';

const about = ({ data }) => {
  const page = data.sanityPage;

  return (
    <div>
      {page && (
        <div>
          <h1>{page.title}</h1>
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
    }
  }
`;

export default about;
