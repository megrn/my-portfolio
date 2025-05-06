// pages/sitemap.xml.js
export async function getServerSideProps({ res }) {
    const baseUrl = "https://megern.dev";
    const pages = ["", "about", "services", "projects", "contact", "blog"];
  
    const urls = pages
      .map(
        (page) =>
          `<url>
    <loc>${baseUrl}/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === "" ? "1.0" : "0.7"}</priority>
  </url>`
      )
      .join("");
  
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
  </urlset>`;
  
    res.setHeader("Content-Type", "application/xml");
    res.write(xml);
    res.end();
  
    return { props: {} };
  }
  
  export default function Sitemap() {
    // getServerSideProps handles the response
    return null;
  }
  