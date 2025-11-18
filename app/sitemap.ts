export default function sitemap() {
  const lastModified = new Date();

  return [
    // Home
    {
      url: "https://agile-website-tan.vercel.app/",
      lastModified,
      priority: 1.0,
      changeFrequency: "monthly",
    },

    // Main Pages
    {
      url: "https://agile-website-tan.vercel.app/about",
      lastModified,
    },
    {
      url: "https://agile-website-tan.vercel.app/services",
      lastModified,
    },
    {
      url: "https://agile-website-tan.vercel.app/contact",
      lastModified,
    },
    {
      url: "https://agile-website-tan.vercel.app/career",
      lastModified,
    },

    // Legal Pages
    {
      url: "https://agile-website-tan.vercel.app/privacy-policy",
      lastModified,
    },
    {
      url: "https://agile-website-tan.vercel.app/terms-conditions",
      lastModified,
    },

    // Industries Pages
    {
      url: "https://agile-website-tan.vercel.app/industries/ecommerce",
      lastModified,
    },
    {
      url: "https://agile-website-tan.vercel.app/industries/finance",
      lastModified,
    },
    {
      url: "https://agile-website-tan.vercel.app/industries/gaming",
      lastModified,
    },
    {
      url: "https://agile-website-tan.vercel.app/industries/healthcare",
      lastModified,
    },
    {
      url: "https://agile-website-tan.vercel.app/industries/realestate",
      lastModified,
    },
    {
      url: "https://agile-website-tan.vercel.app/industries/supply",
      lastModified,
    },

    // Web & Mobile Pages
    {
      url: "https://agile-website-tan.vercel.app/service/frameworks",
      lastModified,
    },
    {
      url: "https://agile-website-tan.vercel.app/service/lightspeed",
      lastModified,
    },
    {
      url: "https://agile-website-tan.vercel.app/service/mobile-app",
      lastModified,
    },
    {
      url: "https://agile-website-tan.vercel.app/service/python",
      lastModified,
    },
    {
      url: "https://agile-website-tan.vercel.app/service/technologies",
      lastModified,
    },
    {
      url: "https://agile-website-tan.vercel.app/service/web-devlopment",
      lastModified,
    },
  ];
}
