import { Outlet } from 'react-router-dom';
import { NavBar } from 'components/NavBar/NavBar';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Container } from '@chakra-ui/react';
import React from 'react';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Container
        maxWidth="100%"
        bgGradient="linear(to-r, green.200, pink.500) "
        pt="40"
        pb="40"
        borderRadius="15"
        mt="5"
      >
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};
export default SharedLayout;
