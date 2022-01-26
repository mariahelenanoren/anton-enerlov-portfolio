import { Contact, Layout, Page } from '../layout';
import { getContactData, getFooterData, getSeoData } from '../lib/gql';
import { IContact, IFooter, ISeo } from '../lib/types';

interface IContactPage extends IFooter, IContact, ISeo {}

export default function ContactPage({
  contactPage,
  footer,
  _site,
}: IContactPage) {
  return (
    <Page
      title="Contact"
      description={_site.globalSeo.fallbackSeo.description}
      imageUrl={_site.globalSeo.fallbackSeo.image.url}
      imageHeight={_site.globalSeo.fallbackSeo.image.height}
      imageWidth={_site.globalSeo.fallbackSeo.image.width}
      twitterCard={_site.globalSeo.fallbackSeo.twittercard}
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
  const { _site } = await getSeoData();

  return {
    props: { contactPage, footer, _site },
  };
}
