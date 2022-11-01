import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { IconButton, Card, Box, CardMedia } from '@mui/material';
import { CardAsDotsbtnAnimation, CardAsDotsbtnAnimationBackward } from '../utils/animation';

import React, { FC } from 'react';
import { ArrowProps, ButtonGroupProps, DotProps } from 'react-multi-carousel';

const stylesGlobal = {
  cardStyle1: {
    borderRadius: '0.5px',
    height: '80%',
    width: '100%',
  },
  cardStyle2: {
    borderRadius: '3px',
    height: { xl: '5rem', lg: '5rem', md: '4rem', sm: '3rem', xs: '3rem' },
    width: { xl: '5rem', lg: '5rem', md: '4rem', sm: '3rem', xs: '3rem' },
  },
  cardMediaStyle: {
    cursor: 'pointer',
  },
  leftArrowStyle: { position: 'absolute', mt: '-20%', ml: '2%' },
  rightArrowStyle: { position: 'absolute', mt: '-20%', ml: '92%' },
  leftArrowProductStyle: { position: 'absolute', ml: '2%' },
  rightArrowProductStyle: { position: 'absolute', ml: '94%' },
  buttonGroupStyle: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '-5.5%',
    marginBottom: '4%',
  },
};

interface CardDotsParams extends DotProps {
  images: string[];
}

export const CustomDot: FC<DotProps> = ({ onClick, active }) => {
  const style = {
    iconStyle: { fontSize: '50%', color: active ? 'primary.main' : 'white' },
  };
  return (
    <IconButton size="small" className={active ? 'active' : 'inactive'} onClick={onClick}>
      <FiberManualRecordIcon fontSize="small" sx={style.iconStyle} />
    </IconButton>
  );
};

export const CustomDotMobile: FC<DotProps> = ({ onClick, active }) => {
  const style = {
    btnStyle: {
      width: '10%',
      height: '2px',
      bgcolor: active ? 'highlight.main' : 'primaryTransparent.main',
      backdropFilter: active ? 'blur(50px)' : 'invert(100%) blur(30px) ',
      m: '1%',
      borderRadius: '25px',
    },
  };
  return <Box component="div" onClick={onClick} sx={style.btnStyle}></Box>;
};

export const CardAsDots: FC<CardDotsParams> = ({ index, onClick, active, images }) => {
  const style = {
    boxStyle: {
      animation: active ? `${CardAsDotsbtnAnimation} 0.25s both` : `${CardAsDotsbtnAnimationBackward} 0.25s both`,
      m: '2%',
      position: 'relative',
      width: '100%',
    },
  };
  return (
    <Box component="div" key={index} sx={style.boxStyle}>
      <Card onClick={onClick} sx={stylesGlobal.cardStyle1}>
        <CardMedia component="img" image={`${images[index ?? 0]}`} sx={stylesGlobal.cardMediaStyle} />
      </Card>
    </Box>
  );
};

export const CardAsDots2: FC<CardDotsParams> = ({ index, onClick, active, images }) => {
  const style = {
    boxStyle: {
      animation: active ? `${CardAsDotsbtnAnimation} 0.25s both` : `${CardAsDotsbtnAnimationBackward} 0.25s both`,
      m: '2%',
      position: 'relative',
      width: '100%',
    },
  };
  return (
    <Box component="div" key={index} sx={style.boxStyle}>
      <Card onClick={onClick} sx={stylesGlobal.cardStyle2}>
        <CardMedia component="img" image={`${images[index ?? 0]}`} sx={stylesGlobal.cardMediaStyle} />
      </Card>
    </Box>
  );
};

export const LeftArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <IconButton size="medium" sx={stylesGlobal.leftArrowStyle} className="custom-left-arrow" onClick={onClick}>
      <ArrowCircleLeftIcon fontSize="small" color="primary" />
    </IconButton>
  );
};

export const RightArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <IconButton size="medium" sx={stylesGlobal.rightArrowStyle} className="custom-right-arrow" onClick={onClick}>
      <ArrowCircleRightIcon fontSize="small" color="primary" />
    </IconButton>
  );
};

export const LeftArrowProduct: FC<ArrowProps> = ({ onClick }) => {
  return (
    <IconButton size="medium" sx={stylesGlobal.leftArrowProductStyle} className="custom-left-arrow" onClick={onClick}>
      <ArrowCircleLeftIcon fontSize="small" color="primary" />
    </IconButton>
  );
};
export const RightArrowProduct: FC<ArrowProps> = ({ onClick }) => {
  return (
    <IconButton size="medium" sx={stylesGlobal.rightArrowProductStyle} className="custom-right-arrow" onClick={onClick}>
      <ArrowCircleRightIcon fontSize="small" color="primary" />
    </IconButton>
  );
};

export const CustomButtonGroupAsArrows: FC<ButtonGroupProps> = ({ next, previous }) => {
  return (
    <div style={stylesGlobal.buttonGroupStyle}>
      <IconButton size="medium" className="custom-left-arrow" onClick={previous}>
        <ArrowCircleLeftIcon fontSize="small" color="primary" />
      </IconButton>
      <IconButton size="medium" className="custom-right-arrow" onClick={next}>
        <ArrowCircleRightIcon fontSize="small" color="primary" />
      </IconButton>
    </div>
  );
};
