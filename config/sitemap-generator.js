const SitemapGenerator = require('advanced-sitemap-generator');

// create generator
const generator = SitemapGenerator('https://XXXXXXX', { // add your site url here
    ignoreHreflang: true,
    maxDepth: 0,
    filepath: path.join(process.cwd(), 'sitemap.xml'),
    maxEntriesPerFile: 50000,
    stripQuerystring: true,
    excludeFileTypes: ['ico', 'bmp', 'ogg', 'webp', 'mp4', 'webm', 'mp3', 'ttf',  'woff', 'json', 'rss', 'atom', 'gz', 'zip', 'rar', '7z', 'css', 'js', 'gzip', 'exe', 'svg', 'xml'],
    excludeURLs: ['login', 'dashboard'],
    changeFreq: weekly,
    filepath: sitemap.xml // path to be saved
});

// register event listeners
generator.on('done', () => {
    // sitemaps created
});

// start the crawler
generator.start();