import fs from 'fs';
import axios from 'axios';
import cheerio from 'cheerio';
import { XMLBuilder } from 'fast-xml-parser';
import PQueue from 'p-queue';

const baseUrl = 'https://cordstones.com/'; // Replace with your site URL
const visitedUrls = new Set();
const urls = [];
const queue = new PQueue({ concurrency: 5, interval: 200, intervalCap: 1 }); // Limit concurrency and rate

// Function to fetch and parse a URL
const fetchUrl = async (url) => {
    try {
        const response = await axios.get(url);
        return cheerio.load(response.data);
    } catch (error) {
        console.error(`Error fetching ${url}:`, error.message);
        return null;
    }
};

// Function to crawl a URL and extract links
const crawl = async (url) => {
    if (visitedUrls.has(url) || !url.startsWith(baseUrl)) return;
    visitedUrls.add(url);

    const $ = await fetchUrl(url);
    if (!$) return;

    urls.push({
        loc: url,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'daily',
        priority: '0.5'
    });

    console.log(`Crawling: ${url}`);

    $('a[href]').each((_, element) => {
        let href = $(element).attr('href');
        if (href) {
            if (href.startsWith('/')) {
                href = new URL(href, baseUrl).href; // Handle relative links
            }
            if (!visitedUrls.has(href) && href.startsWith(baseUrl)) {
                queue.add(() => crawl(href));
            }
        }
    });
};

// Start crawling from the base URL
(async () => {
    await crawl(baseUrl);

    await queue.onIdle(); // Wait for all tasks to finish

    // Create the XML structure
    const urlset = {
        urlset: {
            "@_xmlns": "http://www.sitemaps.org/schemas/sitemap/0.9",
            url: urls
        }
    };

    // Convert the JavaScript object to XML
    const builder = new XMLBuilder({ format: true });
    const sitemap = builder.build(urlset);

    // Save the XML to a file
    fs.writeFileSync('sitemap-cst.xml', sitemap, 'utf8');

    console.log('Sitemap generated successfully!');
})();
