import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Layout from '../../components/Layout';
import MainProductCard from '../../components/MainProductCard';
import CarouselRecommended from '../../common/CarouselRecommended';
const productDetail: FC = () => {
  const router = useRouter();
  const { product } = router.query;

  if (!product) return null;

  return (
    <Layout>
      <MainProductCard productId={product as string} />
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Typography variant="h3" sx={{ m: '1%' }}>
          Some things that might interest you
        </Typography>
        <CarouselRecommended productId={product as string} />
      </Box>
    </Layout>
  );
};

export default productDetail;
