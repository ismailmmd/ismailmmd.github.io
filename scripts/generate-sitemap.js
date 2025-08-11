const fs = require('fs');
const path = require('path');

function generateSitemap() {
  const baseUrl = 'https://www.ismailm.xyz';
  const currentDate = new Date().toISOString();

  // Define your site's URLs
  const urls = [
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '1.0',
    },
  ];

  // Generate XML sitemap
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  urls.forEach((url) => {
    sitemap += `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  // Write sitemap to public directory
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  // eslint-disable-next-line no-console
  console.log('Sitemap generated successfully!');
}

// Run the function
generateSitemap();

module.exports = generateSitemap;
