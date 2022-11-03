import { Box } from '@mui/material';
import type { PropsWithChildren, FC } from 'react';
import Navbar from '../components/Navbar';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundImage: {
          xl: 'radial-gradient(at -20% 23%, hsla(42, 79%, 64%, 1), transparent 25%), radial-gradient(at -15% 33%, hsla(338, 79%, 64%, 1), transparent 20%), radial-gradient(at 110% 0%, hsla(338, 79%, 64%, 1), transparent 40%)',
          lg: 'radial-gradient(at -30% 23%, hsla(42, 79%, 64%, 1), transparent 25%), radial-gradient(at -25% 33%, hsla(338, 79%, 64%, 1), transparent 20%), radial-gradient(at 110% 0%, hsla(338, 79%, 64%, 1), transparent 30%)',
          md: '',
          sm: '',
          xs: '',
        },
        // backgroundSize: 'cover',
        // backgroundAttachment: 'fixed',
        // // backgroundColor: 'neutral.main',
        // filter:
        //   'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#6e73ff",GradientType=1)',
      }}>
      <Navbar />
      {children}
    </Box>
  );
};

export default Layout;

/* Background styles */
// body {
//   background-color: #ffffff;
//   background-image:
//       radial-gradient(at 47% 33%, hsl(234.17, 55.00000000000001%, 37%) 0, transparent 59%),
//       radial-gradient(at 82% 65%, hsl(281.18, 100%, 80%) 0, transparent 55%);
// }

// /* Glassmorphism card effect */
// .card {
//   backdrop-filter: blur(25px) saturate(89%);
//   -webkit-backdrop-filter: blur(25px) saturate(89%);
//   background-color: rgba(147, 184, 253, 0.21);
//   border-radius: 12px;
//   border: 1px solid rgba(255, 255, 255, 0.125);
// }

/* Generated by https://generator.ui.glass/ */

// background-color: #ffffff;
// backgroundImage: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(12,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23FE64FF'/%3E%3Cstop offset='1' stop-color='%23F292FF'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(249,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23302D95'/%3E%3Cstop offset='1' stop-color='%23524DFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='49.5'%3E%3Cpath d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='16.5' transform='' cx='500' cy='100' r='40'/%3E%3Cpath transform='' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='15'%3E%3Cpath transform='' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='33' transform='' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
// background-attachment: fixed;
// background-size: cover;

// background-color: #e5e5f7;
// opacity: 1;
// background-image: radial-gradient(#444cf7 0.9500000000000001px, #e5e5f7 0.9500000000000001px);
// background-size: 19px 19px;

// background-color: #ffffff;
// opacity: 0.7;
// background-image: radial-gradient(#ffa8fc 0.35000000000000003px, #ffffff 0.35000000000000003px);
// background-size: 7px 7px;

{
  /* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'><rect fill='#ffffff' width='1600' height='900'/><defs><linearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(12,0.5,0.5)'><stop offset='0' stop-color='#FE64FF'/><stop offset='1' stop-color='#F292FF'/></linearGradient><linearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(249,0.5,0.5)'><stop offset='0' stop-color='#302D95'/><stop offset='1' stop-color='#524DFF'/></linearGradient></defs><g fill='#FFF' fill-opacity='0' stroke-miterlimit='10'><g stroke='url(#a)' stroke-width='49.5'><path d='M1409 581 1450.35 511 1490 581z'/><circle stroke-width='16.5' transform='' cx='500' cy='100' r='40'/><path transform='' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/></g><g stroke='url(#b)' stroke-width='15'><path transform='' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/><rect stroke-width='33' transform='' x='1039' y='709' width='100' height='100'/><path transform='' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/></g></g></svg> */
}
