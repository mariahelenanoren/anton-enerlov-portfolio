import Contact from "../components/contact/contact";
import { IContact } from "../components/contact/types";
import { getContactData } from "../lib/gql/contact";



export default function ContactPage({contactPage}: IContact) {
  return (
    <>
      <Contact contactPage={contactPage}/>
     
    </>
  )
 
  

}

export async function getStaticProps() {
  const { contactPage } = await  getContactData();

  return {

    props: { contactPage },
  };
}
