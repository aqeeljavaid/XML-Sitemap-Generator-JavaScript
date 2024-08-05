# XML Sitemap Generator - JavaScript

This is a simple and small script that I wrote quickly for myself to create a XML sitemap of my page for Google and other search engines.

Sitemap format: [http://www.sitemaps.org/protocol.html](http://www.sitemaps.org/protocol.html)

## Features
 - Actually crawls webpages
 - Generates XML file which gets updated every time the script gets executed (Runnable via CRON)
 - Best for SEO
 - Crawls faster
 - Unlimited pages

## How to use
Configure the crawler by modifying the `generateSitemap.js` file
 - Select URL to crawl
 - Select the file to which the sitemap will be saved
 - Select change frequency (always, daily, weekly, monthly, never, etc...)
 - Choose priority (It is all relative so it may as well be 1)

Generate sitemap
 - Either send a GET request to this script or simply point your browser
 - A sitemap will be generated and saved
 - Submit sitemap.xml to Google
 - Setup a CRON Job to send web requests to this script every so often, this will keep the sitemap.xml file up to date

The script will be started as CLI script.

CLI command to create the XML file:

```
   node sitemap-generator.js
```


## sitemap.xml
Add the XML file to your `/robots.txt`.

## Credits

XML Sitemap Generator is created by [Aqeel Javaid](https://www.linkedin.com/in/aqeeljavaid/). Released under the MIT license.

Included scripts:

 - [fs](#) - Provides functions to interact with the file system.
 - [axios](https://github.com/axios/axios) - A promise-based HTTP client for making requests to external servers.
 - [cheerio](https://github.com/cheeriojs/cheerio) - A library for parsing and manipulating HTML and XML in a jQuery-like syntax.
 - [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) - Parses XML data into JavaScript objects quickly.
 - [p-queue](https://github.com/sindresorhus/p-queue) - Implements promise-based task queueing with concurrency control.
