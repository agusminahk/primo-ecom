import React, { FC } from 'react';
import { Card, CardMedia, Box, IconButton } from '@mui/material';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import CloseIcon from '@mui/icons-material/Close';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import ZoomInRoundedIcon from '@mui/icons-material/ZoomInRounded';
import ZoomOutRoundedIcon from '@mui/icons-material/ZoomOutRounded';

const ProductDetailZoom = ({ imageUrl, setOpen }: any) => {
  return (
    <TransformWrapper maxScale={6} initialScale={1}>
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>
          <Box
            sx={{
              zIndex: 9999,
              position: 'fixed',
              flexDirection: 'column',
              top: { xl: '41%', lg: '41%', md: '5%', sm: '5%', xs: '5%' },
              left: { xl: '94%', lg: '94%', md: '90%', sm: '87%', xs: '85%' },
              borderRadius: '25px',
            }}>
            <Box
              sx={{
                display: { xl: 'flex', lg: 'flex', md: 'none', sm: 'none', xs: 'none' },
                flexDirection: 'column',
                mb: '35%',
                backdropFilter: 'blur(50px) ',
                backgroundColor: '#ffffff3d',
                borderRadius: '25px',
                border: '1px dashed',
                borderColor: 'highlight.main',
              }}>
              <IconButton onClick={() => resetTransform()}>
                <SettingsBackupRestoreIcon sx={{ color: 'primary.main' }} />
              </IconButton>
              <IconButton onClick={() => zoomIn()}>
                <ZoomInRoundedIcon sx={{ color: 'primary.main' }} />
              </IconButton>
              <IconButton onClick={() => zoomOut()}>
                <ZoomOutRoundedIcon sx={{ color: 'primary.main' }} />
              </IconButton>
            </Box>

            <IconButton
              sx={{
                backgroundColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.main',
                },
              }}
              onClick={() => setOpen(false)}>
              <CloseIcon fontSize="medium" sx={{ color: 'neutral.main' }} />
            </IconButton>
          </Box>
          <TransformComponent
            wrapperStyle={{ width: '100vw', height: '100vh' }}
            contentStyle={{ position: 'relative' }}>
            <Box component="div" style={{ cursor: 'move' }}>
              <Card
                sx={{
                  borderRadius: 0,
                  width: '100vw',
                }}>
                <CardMedia
                  style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    userSelect: 'none',
                  }}
                  component="img"
                  image={imageUrl}
                  alt="test"
                />
              </Card>
            </Box>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
};

export default ProductDetailZoom;
