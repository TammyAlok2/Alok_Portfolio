export const revalidate = 3; // Revalidate every 3 seconds

export default async function sitemap() {
  const baseUrl = "https://pavan-updated-portfolio.vercel.app"; // Replace with your actual domain

  // Define static routes based on your portfolio sections
  const staticRoutes = [
    { url: `${baseUrl}#home`, changeFrequency: "yearly", priority: 1 },
    { url: `${baseUrl}#services`, changeFrequency: "yearly", priority: 1 },
    { url: `${baseUrl}#projects`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}#skills`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/experience`, changeFrequency: "yearly", priority: 0.85 },
    { url: `${baseUrl}#contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/resume`, changeFrequency: "yearly", priority: 0.9 },
  ];

  // Generate sitemap in JSON format (Next.js will convert to XML automatically)
  return staticRoutes?.map((route) => ({
    url: route.url,
    lastModified: new Date().toISOString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
