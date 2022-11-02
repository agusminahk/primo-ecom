import { NextPage } from 'next';

import PromoCarousel from '../../components/PromoCarousel';

import Layout from '../../common/Layout';
import React from 'react';
import { authGuard } from '../../core/hooks/authGuard/authGuard';

const Home: NextPage = () => {
  return (
    <Layout>
      <PromoCarousel />
    </Layout>
  );
};

export default authGuard()(Home);
