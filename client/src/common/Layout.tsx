import Navbar from '../components/Navbar';
import { FC } from 'react';

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
