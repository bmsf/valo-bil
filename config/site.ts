export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: 'Next.js + NextUI',
	description: 'Make beautiful websites regardless of your design experience.',
	navItems: [
		{
			label: 'Hjem',
			href: '/',
		},
		{
			label: 'Biler til salgs',
			href: '/biler-til-salgs',
		},
		{
			label: 'Informasjon',
			href: '/informasjon',
		},
		{
			label: 'Kontakt oss',
			href: '/kontakt-oss',
		},
		// {
		// 	label: 'About',
		// 	href: '/about',
		// },
	],
	navMenuItems: [
		{
			label: 'Hjem',
			href: '/',
		},
		{
			label: 'Biler til salgs',
			href: '/biler-til-salgs',
		},
		{
			label: 'Informasjon',
			href: '/informasjon',
		},
		{
			label: 'Kontakt oss',
			href: '/kontakt-oss',
		},
	],
	links: {
		github: 'https://github.com/nextui-org/nextui',
		twitter: 'https://twitter.com/getnextui',
		docs: 'https://nextui.org',
		discord: 'https://discord.gg/9b6yyZKmH4',
		sponsor: 'https://patreon.com/jrgarciadev',
	},
};
