/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My First Sanity Project",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "au0f4v4g",
        dataset: "production",
        token: "skXpxBMWWQN9uh2YEfIObVXTVNKlqasS8jN6T1eg6nqwHGn0HuXqmU8IfFtc2dyexg3g0r6owTAiOAzCs4mFP2JzjN93ngmGdqol4vnIBZP5ZBp1xpTJKHQIYpvS5Dmx8B6Lam68mPvPaw68Va0K29Xd4rmlzO7OPRPYMuEFmilrE6Pb3cy9",
        apiVersion: "2023-08-24",
        watchMode: false,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
