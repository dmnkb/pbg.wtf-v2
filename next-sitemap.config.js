/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || "https://pbg.wtf/",
	generateRobotsTxt: true, // (optional)
	exclude: ["/insights", "/impressum", "/datenschutz"],
}
