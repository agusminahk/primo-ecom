import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { IconButton, Button, Card, Box, CardMedia, keyframes } from '@mui/material';

import React, { FC } from 'react';

const CustomDot: FC = ({ onClick, active }: any) => {
  return (
    <IconButton size="small" className={active ? 'active' : 'inactive'} onClick={() => onClick()}>
      <FiberManualRecordIcon fontSize="small" sx={{ fontSize: '50%', color: active ? 'primary.main' : 'white' }} />
    </IconButton>
  );
};

const CustomDotMobile: FC = ({ onClick, active }: any) => {
  return (
    <Box
      component="div"
      onClick={() => onClick()}
      sx={{
        width: '10%',
        height: '2px',
        bgcolor: active ? 'highlight.main' : 'primaryTransparent.main',
        backdropFilter: active ? 'blur(50px)' : 'invert(100%) blur(30px) ',
        m: '1%',
        borderRadius: '25px',
      }}></Box>
  );
};

const btnAnimation = keyframes`
0% {
  transform: scale(1); opacity: 85%
}
100% {
  transform: scale(1.1); opacity: 100%
}
`;

const btnAnimationBackward = keyframes`
0% {
  transform: scale(1.1); opacity: 100%
}
100% {
  transform: scale(1); opacity: 85%
}
`;

const btnOpacity = keyframes`
0% {
  opacity: 85%
}
100% {
  opacity: 100%
}
`;

const CardAsDots = ({ index, onClick, active, images }: any) => {
  return (
    <Box
      component="div"
      key={index}
      sx={{
        animation: active ? `${btnAnimation} 0.25s both` : `${btnAnimationBackward} 0.25s both`,
        m: '2%',
        position: 'relative',
        width: '100%',
      }}>
      <Card
        onClick={() => onClick()}
        sx={{
          borderRadius: '0.5px',
          height: '80%',
          width: '100%',
        }}>
        <CardMedia component="img" image={`${images[index]}`} sx={{ cursor: 'pointer' }} />
      </Card>
    </Box>
  );
};

const CardAsDots2 = ({ index, onClick, active, images }: any) => {
  return (
    <Box
      component="div"
      key={index}
      sx={{
        animation: active ? `${btnAnimation} 0.25s both` : `${btnAnimationBackward} 0.25s both`,
      }}>
      <Card
        onClick={() => onClick()}
        sx={{
          borderRadius: '3px',
          height: { xl: '5rem', lg: '5rem', md: '4rem', sm: '3rem', xs: '3rem' },
          width: { xl: '5rem', lg: '5rem', md: '4rem', sm: '3rem', xs: '3rem' },
        }}>
        <CardMedia component="img" image={`${images[index]}`} sx={{ cursor: 'pointer' }} />
      </Card>
    </Box>
  );
};

const LeftArrow: FC = ({ onClick }: any) => {
  return (
    <IconButton
      size="medium"
      sx={{ position: 'absolute', mt: '-20%', ml: '2%' }}
      className="custom-left-arrow"
      onClick={() => onClick()}>
      <ArrowCircleLeftIcon fontSize="small" sx={{ color: 'primary.main' }} />
    </IconButton>
  );
};
const RightArrow: FC = ({ onClick }: any) => {
  return (
    <IconButton
      size="medium"
      sx={{ position: 'absolute', mt: '-20%', ml: '92%' }}
      className="custom-right-arrow"
      onClick={() => onClick()}>
      <ArrowCircleRightIcon fontSize="small" sx={{ color: 'primary.main' }} />
    </IconButton>
  );
};

const LeftArrowProduct: FC = ({ onClick }: any) => {
  return (
    <IconButton size="medium" sx={{ position: 'absolute' }} className="custom-left-arrow" onClick={() => onClick()}>
      <ArrowCircleLeftIcon fontSize="small" sx={{ color: 'primary.main' }} />
    </IconButton>
  );
};
const RightArrowProduct: FC = ({ onClick }: any) => {
  return (
    <IconButton size="medium" sx={{ position: 'absolute' }} className="custom-right-arrow" onClick={() => onClick()}>
      <ArrowCircleRightIcon fontSize="small" sx={{ color: 'primary.main', ml: '100%' }} />
    </IconButton>
  );
};

const CustomButtonGroupAsArrows: FC = ({ onClick, next, previous }: any) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '-5.5%',
        marginBottom: '4%',
      }}>
      <IconButton size="medium" className="custom-left-arrow" onClick={previous}>
        <ArrowCircleLeftIcon fontSize="small" sx={{ color: 'primary.main' }} />
      </IconButton>
      <IconButton size="medium" className="custom-right-arrow" onClick={next}>
        <ArrowCircleRightIcon fontSize="small" sx={{ color: 'primary.main' }} />
      </IconButton>
    </div>
  );
};

export {
  CustomDot,
  LeftArrow,
  RightArrow,
  LeftArrowProduct,
  RightArrowProduct,
  CustomButtonGroupAsArrows,
  CardAsDots,
  CustomDotMobile,
  CardAsDots2,
};
