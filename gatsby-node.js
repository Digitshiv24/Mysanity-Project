const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/blog-post.tsx'); // Path to your blog post template
  const aboutTemplate = path.resolve('src/templates/about-post.tsx'); // Path to your about post template

  // Query Sanity data for blog posts
  const blogPostResult = await graphql(`
    query {
      allSanityBlogPost {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  // Create pages for each blog post using the blog post template
  blogPostResult.data.allSanityBlogPost.nodes.forEach((post) => {
    createPage({
      path: `${post.slug.current}`, // Adjust the path structure as needed
      component: blogPostTemplate,
      context: {
        id: post.id,
      },
    });
  });

  // Query Sanity data for about page
  const aboutResult = await graphql(`
    query {
      allSanityPage {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  // Create page for the about page using the about template
  aboutResult.data.allSanityPage.nodes.forEach((page) => {
    createPage({
      path: `${page.slug.current}`, // Adjust the path structure as needed
      component: aboutTemplate,
      context: {
        id: page.id,
      },
    });
  });
};
