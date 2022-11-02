import { NextPage } from 'next';
import React, { FC } from 'react';
import FrontDoor from '../components/FrontDoor';

const Index: NextPage = () => {
  return <FrontDoor />;
};

// Index.getInitialProps = wrapper.getInitialPageProps(store => ({  }) => {
//   console.log('2. Page.getInitialProps uses the store to dispatch things', { res });
//   store.dispatch({
//     type: 'TICK',
//     payload: 'was set in error page ',
//   });
// });

export default Index;
