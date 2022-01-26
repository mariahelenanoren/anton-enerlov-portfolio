import { Contact, Layout, Page } from '../layout';
import { getContactData, getFooterData } from '../lib/gql';
import { IContact, IFooter } from '../lib/types';

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
