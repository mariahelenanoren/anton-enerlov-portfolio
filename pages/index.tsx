import { getHeaderData } from '../lib/gql/header/getHeaderData';

export default function Home({ header }: { header: any }) {
  return (
    <div>
      <p>{header.titel}</p>
    </div>
  );
}

export async function getStaticProps() {
  const { header } = await getHeaderData();

  return {
    props: { header },
  };
}
