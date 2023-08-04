import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';
import { selectUser } from 'redux/auth/selectors';
import { Heading, Box, Container} from '@chakra-ui/react';
import { NavLinkStyled } from 'components/AuthNav/AuthNavStyled';
export default function HomePage() {
  const isUserLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <Container>
      <Box maxW="32rem" textAlign="center">
        {isUserLoggedIn ? (
          <Heading mb={5}>
            Hi <span>{user.name}!</span>
            <br />
            Welcome to the Phonebook. Check if you already have some contacts in
            your book or simply add a new one.
          </Heading>
        ) : (
          <Heading mb={5}>
            Welcome to the phonebook! Please log in or register to see the
            capabilities of this application.
          </Heading>
        )}
        <NavLinkStyled to="/logIn">GET STARTED</NavLinkStyled>
      </Box>
    </Container>
  );
}
