module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://kayanpereira.tech/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/portrait.jpeg", // Path is relative to the root
          siteName: "Kayan Pereira Fullstack Developer", // Used in manifest.json
          shortName: "Kayan Pereira", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#321371", // Used in manifest.json
          themeColor: "#0f2227", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        }
      },
    },
  ],
};
