import Grid from '@mui/material/Grid';
import ProductCard from '../components/ProductCard';
import React, { FC } from 'react';

import { ProductProps } from '../components/interfaces';

interface GridProductsProps {
  products: ProductProps[];
}

const GridProducts: FC<GridProductsProps> = ({ products }) => {
  return (
    <Grid container spacing={{ lg: 4 }} columns={{ lg: 0 }} alignItems="center">
      {products.map((product, i) => (
        <Grid item lg={3} rowSpacing={2} key={i}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridProducts;
