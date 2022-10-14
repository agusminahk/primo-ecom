import { useRouter } from 'next/router';
import { NextPage } from 'next';
import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

import Layout from '../../common/Layout';
import MainProductCard from '../../components/MainProductCard';
import CarouselRecommended from '../../common/CarouselRecommended';

const ProductDetail: FC = () => {
  const router = useRouter();
  const { product } = router.query;

  if (!product) return null;

  const styles = {
    firstBoxStyle: { display: 'flex', flexDirection: 'column', width: '100%' },
  };

  return (
    <Layout>
      <MainProductCard productId={product as string} />
      <Box sx={styles.firstBoxStyle}>
        <Typography variant="h3" sx={{ m: '1%' }}>
          Some things that might interest you
        </Typography>
        <CarouselRecommended productId={product as string} />
      </Box>
    </Layout>
  );
};

export default ProductDetail;
