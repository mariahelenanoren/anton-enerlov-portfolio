import Contact from "../components/contact/contact";
import { IContact } from "../components/contact/types";
import { getContactData } from "../lib/gql/contact";
import { getFooterData } from '../lib/gql';

export default function ContactPage({contactPage}: IContact) {

  return (
      <Contact contactPage={contactPage}/>  
  )
}

export async function getStaticProps() {
  const { contactPage } = await getContactData();
  const { footer } = await getFooterData();

  return {
    props: { contactPage, footer },
  };
}
