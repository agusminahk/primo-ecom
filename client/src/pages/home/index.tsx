import { NextPage } from 'next';

import PromoCarousel from '../../components/PromoCarousel';

import Layout from '../../components/Layout';
import React from 'react';

const home: NextPage = () => {
  return (
    <Layout>
      <PromoCarousel />
    </Layout>
  );
};

export default home;
