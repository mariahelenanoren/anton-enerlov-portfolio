import { getFooterData } from '../lib/gql';

export default function Contact() {
  return (
    <div>
      <p>Contact page</p>
    </div>
  );
}

export async function getStaticProps() {
  const { footer } = await getFooterData();

  return {
    props: { footer },
  };
}
