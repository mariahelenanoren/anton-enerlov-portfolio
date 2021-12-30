import { Footer } from "../components/footer";
import { IFooter } from "../components/footer/types";
import { getFooterData } from "../lib/gql/footer/getFooterData";

export default function OutdoorPage({footer}: IFooter) {
	console.log(footer)
	return (
		<div>
			<p>Outdoor page</p>
			<Footer footer={footer}/>
		</div>
	);
}

export async function getStaticProps() {
	const { footer } = await getFooterData()
	return {
		props: {footer},
	};
}
