import React from 'react';
import { graphql } from 'gatsby';
import BlogDisplay from '../components/BlogDisplay/BlogDisplay'; 

const Blog = ({ data }) => {
  const post = data.sanityBlogPost;

  return <BlogDisplay post={post} />;
};

export const query = graphql`
  query($id: String!) {
    sanityBlogPost(id: { eq: $id }) {
      title
      author
      content {
        children {
          text
        }
      }
      tags
      slug {
        current
      }
    }
  }
`;

export default Blog;
