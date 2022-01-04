import { getLandingData } from '../lib/gql';

export default function OutdoorPage() {
  return (
    <div>
      <p>Outdoor page</p>
    </div>
  );
}

export async function getStaticProps() {
  const landingData = await getLandingData();

  console.log(landingData);
  return {
    props: {},
  };
}
