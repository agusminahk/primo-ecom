import Grid from '@mui/material/Grid';
import ProductCard from '../components/ProductCard';
import React, { FC } from 'react';

import { ProductProps } from '../components/interfaces';
import { Box } from '@mui/material';

interface GridProductsProps {
  products: ProductProps[];
}

const GridProducts: FC<GridProductsProps> = ({ products }) => {
  return (
    <Box sx={{ mx: '10%', display: 'flex' }}>
      <Grid container spacing={{ lg: 4 }} columns={{ lg: 0 }} alignItems="center">
        {products.map((product, i) => (
          <Grid item lg={3} rowSpacing={2} key={product._id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridProducts;
