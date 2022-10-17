import { NextPage } from 'next';

import PromoCarousel from '../../components/PromoCarousel';

import Layout from '../../common/Layout';
import React from 'react';

const Home: NextPage = () => {
  return (
    <Layout>
      <PromoCarousel />
    </Layout>
  );
};

export default Home;
