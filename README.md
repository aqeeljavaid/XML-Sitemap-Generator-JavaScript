# XML Sitemap Generator - JavaScript

This is a simple and small script that I wrote quickly for myself to create a XML sitemap of my page for Google and other search engines.

Sitemap format: [http://www.sitemaps.org/protocol.html](http://www.sitemaps.org/protocol.html)

##Features
 - Actually crawls webpages like Google would
 - Generates seperate XML file which gets updated every time the script gets executed (Runnable via CRON)
 - Awesome for SEO
 - Crawls faster
 - Unlimited pages

## How to Usage
Configure the crawler by modifying the `sitemap-generator.php` file
    - Select URL to crawl
    - Select the file to which the sitemap will be saved
    - Select change frequency (always, daily, weekly, monthly, never, etc...)
    - Choose priority (It is all relative so it may as well be 1)

Generate sitemap
    - Either send a GET request to this script or simply point your browser
    - A sitemap will be generated and saved
    - Submit sitemap.xml to Google
    - Setup a CRON Job to send web requests to this script every so often, this will keep the sitemap.xml file up to date

The script can be started as CLI script or as Website. CLI is the prefered way to start this script.

CLI scripts are started from the command line, can be used with CRON and so on. You start it with the php program.

CLI command to create the XML file:

```
   node sitemap-generator.js
```


## sitemap.xml
Add the XML file to your `/robots.txt`.

Example line for the robots.txt:



## Credits

XML Sitemap Generator is created by [Aqeel Javaid](https://www.linkedin.com/in/aqeeljavaid/). Released under the MIT license.

Included scripts:

 - [fs](http://simplehtmldom.sourceforge.net/) - A HTML DOM parser written in PHP5+ let you manipulate HTML in a very easy way!.
 - [axios](http://simplehtmldom.sourceforge.net/) - A HTML DOM parser written in PHP5+ let you manipulate HTML in a very easy way!.
 - [cheerio](http://simplehtmldom.sourceforge.net/) - A HTML DOM parser written in PHP5+ let you manipulate HTML in a very easy way!.
 - [fast-xml-parser](http://simplehtmldom.sourceforge.net/) - A HTML DOM parser written in PHP5+ let you manipulate HTML in a very easy way!.
 - [p-queue](http://simplehtmldom.sourceforge.net/) - A HTML DOM parser written in PHP5+ let you manipulate HTML in a very easy way!.
