interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://blog-template-gray.vercel.app/', // Write here your website url
	author: 'Amirhossein Zarei', // Site author
	title: 'Amirhossein Blog', // Site title.
	description: "Welcome to Amirhossein's blog, where I share my thoughts and experiences.", // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: "Check out this post on Amirhossein's blog!", // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
