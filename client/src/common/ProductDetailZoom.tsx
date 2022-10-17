import React, { FC } from 'react';
import { Card, CardMedia, Box, IconButton } from '@mui/material';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import CloseIcon from '@mui/icons-material/Close';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import ZoomInRoundedIcon from '@mui/icons-material/ZoomInRounded';
import ZoomOutRoundedIcon from '@mui/icons-material/ZoomOutRounded';

interface ZoomProps {
  imageUrl: string;
  setOpen: any;
}

const ProductDetailZoom: FC<ZoomProps> = ({ imageUrl, setOpen }) => {
  const style = {
    contentFirstBox: {
      zIndex: 9999,
      position: 'fixed',
      flexDirection: 'column',
      top: { xl: '41%', lg: '41%', md: '5%', sm: '5%', xs: '5%' },
      left: { xl: '94%', lg: '94%', md: '90%', sm: '87%', xs: '85%' },
      borderRadius: '25px',
    },
    secondBoxStyle: {
      display: { xl: 'flex', lg: 'flex', md: 'none', sm: 'none', xs: 'none' },
      flexDirection: 'column',
      mb: '35%',
      backdropFilter: 'blur(50px) ',
      backgroundColor: '#ffffff3d',
      borderRadius: '25px',
      border: '1px dashed',
      borderColor: 'highlight.main',
    },
    closeIconButtonStyle: {
      backgroundColor: 'primary.main',
      '&:hover': {
        backgroundColor: 'primary.main',
      },
    },
    closeIconStyle: {
      color: 'neutral.main',
    },
    wrapperStyle: {
      width: '100vw',
      height: '100vh',
    },
    boxComponent: {
      cursor: 'move',
    },
    cardStyle: {
      borderRadius: 0,
      width: '100vw',
    },
    cardMediaStyle: {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      userSelect: 'none',
    },
  };

  return (
    <TransformWrapper maxScale={6} initialScale={1}>
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>
          <Box sx={style.contentFirstBox}>
            <Box sx={style.secondBoxStyle}>
              <IconButton onClick={() => resetTransform()}>
                <SettingsBackupRestoreIcon color="primary" />
              </IconButton>
              <IconButton onClick={() => zoomIn()}>
                <ZoomInRoundedIcon color="primary" />
              </IconButton>
              <IconButton onClick={() => zoomOut()}>
                <ZoomOutRoundedIcon color="primary" />
              </IconButton>
            </Box>
            <IconButton sx={style.closeIconButtonStyle} onClick={() => setOpen(false)}>
              <CloseIcon fontSize="medium" sx={style.closeIconStyle} />
            </IconButton>
          </Box>
          <TransformComponent wrapperStyle={style.wrapperStyle} contentStyle={{ position: 'relative' }}>
            <Box component="div" style={style.boxComponent}>
              <Card sx={style.cardStyle}>
                <CardMedia sx={style.cardMediaStyle} component="img" image={imageUrl} alt="test" />
              </Card>
            </Box>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
};

export default ProductDetailZoom;
