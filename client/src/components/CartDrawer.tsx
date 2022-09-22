import { Drawer } from '@mui/material';
import { FC } from 'react';

interface DrawerProps {
  open: boolean;
  onClose: any;
}

const CartDrawer: FC<DrawerProps> = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      CartDrawer
    </Drawer>
  );
};

export default CartDrawer;
