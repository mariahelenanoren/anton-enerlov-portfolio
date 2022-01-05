import { getFooterData } from '../lib/gql';

export default function AboutPage() {
  return (
    <div>
      <p>About page</p>
    </div>
  );
}

export async function getStaticProps() {
  const { footer } = await getFooterData();

  return {
    props: { footer },
  };
}
