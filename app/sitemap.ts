export default function sitemap() {
  const base = "https://yourdomain.com";

  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/services`, lastModified: new Date() },
    { url: `${base}/career`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/privacy-policy`, lastModified: new Date() },
    { url: `${base}/terms-conditions`, lastModified: new Date() },
  ];
}
