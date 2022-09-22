import { Box } from '@mui/system';
import React from 'react';
import ProductCard from '../../common/ProductCard';

const index = () => {
  const ropa = [
    {
      indice: '1',
      name: 'Chomba',
      description: 'Talle Xl, 100% algodón, entrega inmédiata',
      image: 'https://i.pinimg.com/564x/cc/10/5f/cc105f9492e7222218706c227d3ee96c.jpg',
    },
    {
      indice: '2',
      name: 'Pantalon',
      description: 'Talle 42, gabardina, entrega en 24hs.',
      image: 'https://i.pinimg.com/564x/c6/23/09/c6230912bb92db6fbe49f46a4fc00fa2.jpg',
    },
    {
      indice: '3',
      name: 'Campera',
      description: 'Talle M, cuerina vegetal, no disponible para entrega inmediata ',
      image: 'https://i.pinimg.com/564x/19/bd/36/19bd369f088ba69c0a97672c39e9a7cd.jpg',
    },
  ];

  return (
    <>
      {ropa.map((prenda, i) => (
        <Box key={i}>
          <ProductCard product={prenda} />
        </Box>
      ))}
    </>
  );
};

export default index;
