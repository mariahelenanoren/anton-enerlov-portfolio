import Contact from '../components/contact/contact';
import { getContactData } from '../lib/gql/contact';
import { getFooterData } from '../lib/gql';
import { IContactPage } from '../lib/gql/contact/types';
import { Layout } from '../layout/layout';

export default function ContactPage({ contactPage, footer }: IContactPage) {
	return (
		<Layout footer={footer}>
			<Contact contactPage={contactPage} />
		</Layout>
	);
}

export async function getStaticProps() {
	const { contactPage } = await getContactData();
	const { footer } = await getFooterData();

	return {
		props: { contactPage, footer },
	};
}
