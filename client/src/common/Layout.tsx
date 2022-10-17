import type { PropsWithChildren, FC } from 'react';
import Navbar from '../components/Navbar';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
