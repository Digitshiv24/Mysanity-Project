import React from 'react';
import { graphql } from 'gatsby';

const Blog = ({ data }) => {
  const post = data.sanityBlogPost;

  return (
    <div>
      <div>
        {post.content.map((block) => (
          <p key={block._key}>{block.children[0].text}</p>
        ))}
      </div>
      <p>By {post.author}</p>
      <ul>
        {post.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
    
  );
};

export const query = graphql`
  query($id: String!) {
    sanityBlogPost(id: { eq: $id }) {
      title
      author
      content {
        _key
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
