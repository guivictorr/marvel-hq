import { GetServerSideProps } from 'next';
import Error from '../../components/Error/styles';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import fetchJson from '../../utils/fetchJson';
import Grid from '../../components/Grid/styles';

type HeroProps = {
  data: ComicsDataProps;
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { query } = ctx;

  const { data } = await fetchJson<DataProps>(
    `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${query.hero}&orderBy=title&limit=18&${process.env.NEXT_PUBLIC_API_KEY}
        `,
  );

  return {
    props: { data },
  };
};

const Hero = ({ data }: HeroProps) => {
  return (
    <Layout>
      {data.count ? (
        <Grid>
          {data.results.map((comic, index) => (
            <Card comic={comic} key={index} />
          ))}
        </Grid>
      ) : (
        <Error>Não encontrei esse quadrinho</Error>
      )}
    </Layout>
  );
};

export default Hero;
