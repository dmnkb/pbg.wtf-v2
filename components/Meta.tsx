import Head from "next/head"

export default function Meta() {
	return (
		<Head>
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='/favicon/apple-touch-icon.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/favicon/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='/favicon/favicon-16x16.png'
			/>
			<link rel='manifest' href='/favicon/site.webmanifest' />
			<link
				rel='mask-icon'
				href='/favicon/safari-pinned-tab.svg'
				color='#e3f8ee'
			/>
			<link rel='shortcut icon' href='/favicon/favicon.ico' />
			<meta name='msapplication-TileColor' content='#da532c' />
			<meta
				name='msapplication-config'
				content='/favicon/browserconfig.xml'
			/>
			<meta name='theme-color' content='#ffffff' />
			<meta name='description' content={`DESCRIPTION`} />
			<title>pbg.wtf – Webentwicklung aus Pinneberg</title>
			<meta
				name='description'
				content='Moderne Webentwicklung mit pragmatischen Ansätzen. Keine Cookie-Banner, schnelle Ladezeiten. Damit das Internet wieder Spaß macht!'
			/>
		</Head>
	)
}
