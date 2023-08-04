import React from 'react';
import {
  Button,
  InputRightElement,
  InputGroup,
  Input,
  Container,
} from '@chakra-ui/react';
import { login } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();

  const initialValues = {
    email: 'Test-user-1@gmail.com',
    password: 'Test-user-1',
  };
  const handleLoginSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;

    const userAuth = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(login(userAuth));
  };
  return (
    <Container maxW="550px" mt={8}>
      <form onSubmit={handleLoginSubmit}>
        <InputGroup size="md" mb={4}>
          <Input
            pr="4.5rem"
            type="email"
            name="email"
            value={initialValues.email}
            placeholder="Enter email"
          />
        </InputGroup>
        <InputGroup size="md" mb={4}>
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            name="password"
            value={initialValues.password}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button mt={4} colorScheme="teal" type="submit">
          Log In
        </Button>
      </form>
    </Container>
  );
};
