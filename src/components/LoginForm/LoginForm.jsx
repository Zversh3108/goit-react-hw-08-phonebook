import React, { useState, useEffect } from 'react';
import {
  Button,
  InputRightElement,
  InputGroup,
  Input,
  useToast,
  Container,
} from '@chakra-ui/react';
import { login } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectLoggedError } from 'redux/auth/selectors';

export const LoginForm = () => {
  const toast = useToast();
  const isError = useSelector(selectLoggedError);
  useEffect(() => {
    if (isError) {
      toast({
        title: 'Alert',
        description: `Login error. Incorrect login or password`,
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  }, [isError, toast]);
  const initialValues = {
    email: 'Test-user-1@gmail.com',
    password: 'Test-user-1',
  };

  const [formData, setFormData] = useState(initialValues);
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();

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
            placeholder="Enter email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
        </InputGroup>
        <InputGroup size="md" mb={4}>
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={e =>
              setFormData({ ...formData, password: e.target.value })
            }
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
