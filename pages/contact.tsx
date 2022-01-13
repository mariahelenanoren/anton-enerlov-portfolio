import Contact from '../components/contact/contact';
import { getContactData } from '../lib/gql/contact';
import { getFooterData } from '../lib/gql';
import { IContact } from '../lib/gql/contact/types';
import { Layout } from '../layout/layout';
import { IFooter } from '../components/footer/types';
import { Page } from '../components';

interface IContactPage extends IFooter, IContact {}

export default function ContactPage({ contactPage, footer }: IContactPage) {
  return (
    <Page
      title="Contact"
      description="Feel free to contact me with any questions or business inquiries."
    >
      <Layout footer={footer}>
        <Contact contactPage={contactPage} />
      </Layout>
    </Page>
  );
}

export async function getStaticProps() {
  const { contactPage } = await getContactData();
  const { footer } = await getFooterData();

  return {
    props: { contactPage, footer },
  };
}
