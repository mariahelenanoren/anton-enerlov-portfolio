const BASE_URL = 'https://anton-enerlov-portfolio.vercel.com/';

import { getProjectsData } from '../lib/gql';
import { transformToRoute } from '../lib/helpers/transformRoute';

function generateSiteMap(allProjects) {
	return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
	 <loc>${`${BASE_URL}`}</loc>
     </url>
     <url>
	 <loc>${`${BASE_URL}lifestyle`}</loc>
     </url>
     <url>
	 <loc>${`${BASE_URL}about`}</loc>
     </url>
     <url>
	 <loc>${`${BASE_URL}contact`}</loc>
     </url>

     ${allProjects
				.map(({ title }) => {
					return `
       <url>
           <loc>${`${BASE_URL}${transformToRoute(title)}`}</loc>
       </url>
     `;
				})
				.join('')}
   </urlset>
 `;
}

function SiteMap() {
	// getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
	// We make an API call to gather the URLs for our site
	const { allProjects } = await getProjectsData();

	// We generate the XML sitemap with the posts data
	const sitemap = generateSiteMap(allProjects);

	res.setHeader('Content-Type', 'text/xml');
	// we send the XML to the browser
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
}

export default SiteMap;
