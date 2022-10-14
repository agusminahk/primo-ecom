import { NextPage } from 'next';
import React, { FC } from 'react';
import GridProducts from '../../common/GridProducts';
import Layout from '../../common/Layout';
import { ProductProps, CardProps } from '../../components/interfaces';
import falseRequest from '../../static/clothesNewExample.json';

const ProductIndex: FC<NextPage> = () => {
  return (
    <Layout>
      <GridProducts products={falseRequest.clothes} />
    </Layout>
  );
};

export default ProductIndex;
