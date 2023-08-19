const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/blog-post.tsx');
  const aboutTemplate = path.resolve('src/templates/about-post.tsx');
  const projectTemplate = path.resolve('src/templates/project.tsx');

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
      path: `${post.slug.current}`,
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

  // Create pages for about pages using the about template
  aboutResult.data.allSanityPage.nodes.forEach((page) => {
    createPage({
      path: `${page.slug.current}`,
      component: aboutTemplate,
      context: {
        id: page.id,
        slug: page.slug.current
      },
    });
  });

  // Query Sanity data for home page
  const homeResult = await graphql(`
    query {
      allSanityProject { 
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  // Create pages for home pages using the home template
  homeResult.data.allSanityProject.nodes.forEach((page) => {
    createPage({
      path: `${page.slug.current}`,
      component: projectTemplate,
      context: {
        id: page.id,
        slug: page.slug.current

      },
    });
  });
};
