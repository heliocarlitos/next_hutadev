/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://nexthutadev.vercel.app',
  generateRobotsTxt: true, // gera automaticamente o robots.txt
  sitemapSize: 5000,
  exclude: ['/admin/*', '/login/*', '/drafts/*'], // páginas privadas que não quer indexar
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/login', '/drafts'],
      },
    ],
  },
}
