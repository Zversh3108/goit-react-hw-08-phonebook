import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import {
  Input,
  InputGroup,
  Stack,
  InputRightElement,
  FormLabel,
  Container,
  FormControl,
  Button,
  useToast,
} from '@chakra-ui/react';

export const RegisterForm = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;

    const newUser = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    if (newUser.password.length >= 7) {
      dispatch(register(newUser));
      form.reset();
    } else {
      toast({
        title: 'Alert',
        description: `Password must be at least 7 characters in length`,
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container maxW="550px" mt={8}>
        <FormControl>
          <Stack spacing={5}>
            <InputGroup alignItems="center">
              <FormLabel width="90px">Name:</FormLabel>
              <Input
                variant="filled"
                name="name"
                type="text"
                placeholder="Enter name"
              />
            </InputGroup>
            <InputGroup alignItems="center">
              <FormLabel width="90px">Email:</FormLabel>
              <Input
                variant="filled"
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </InputGroup>
            <InputGroup alignItems="center">
              <FormLabel width="90px">Password:</FormLabel>
              <Input
                type={show ? 'text' : 'password'}
                name="password"
                variant="filled"
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>

            <Button mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
          </Stack>
        </FormControl>
      </Container>
    </form>
  );
};
