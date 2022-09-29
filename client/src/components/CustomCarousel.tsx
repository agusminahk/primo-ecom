import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { IconButton } from '@mui/material';

import React, { FC } from 'react';

const CustomDot: FC = ({ onClick, active }: any) => {
  return (
    <IconButton size="small" className={active ? 'active' : 'inactive'} onClick={() => onClick()}>
      <FiberManualRecordIcon fontSize="small" sx={{ fontSize: '50%', color: active ? 'primary.main' : 'white' }} />
    </IconButton>
  );
};

const LeftArrow: FC = ({ onClick }: any) => {
  return (
    <IconButton size="medium" sx={{ mt: '10vh' }} className="custom-left-arrow" onClick={() => onClick()}>
      <ArrowCircleLeftIcon fontSize="small" sx={{ color: 'primary.main' }} />
    </IconButton>
  );
};
const RightArrow: FC = ({ onClick }: any) => {
  return <i className="custom-right-arrow" onClick={() => onClick()} />;
};

const CustomButtonGroupAsArrows: FC = ({ onClick, next, previous }: any) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '-4%',
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

export { CustomDot, LeftArrow, RightArrow, CustomButtonGroupAsArrows };
