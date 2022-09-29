import Grid from '@mui/material/Grid';
import ProductCard from '../common/ProductCard';
import falseRequest from '../static/clothesExample.json';
import React, { FC } from 'react';

const GridProducts: FC = () => {
  return (
    <Grid container spacing={{ lg: 4 }} columns={{ lg: 0 }} alignItems="center">
      {falseRequest.clothes.map((product, i) => (
        <Grid item lg={3} rowSpacing={2} key={i}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridProducts;
