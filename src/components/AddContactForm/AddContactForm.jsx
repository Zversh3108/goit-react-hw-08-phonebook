import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import {
  Button,
  FormLabel,
  InputGroup,
  Container,
  Input,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { selectContacts } from 'redux/contacts/selectors';

export default function AddContactForm() {
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;

    const newContact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      toast({
        title: 'Alert',
        description: `${newContact.name} is already in contacts.`,
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    dispatch(addContact(newContact));
    navigate('/contacts');
    form.reset();
  };

  return (
    <Container maxW="500" width="100%">
      <form onSubmit={handleSubmit}>
        <InputGroup size="s" mb="5">
          <FormLabel width="80px">Name:</FormLabel>
          <Input
            type="text"
            name="name"
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            width="100%"
          />
        </InputGroup>
        <InputGroup size="s">
          <FormLabel width="80px">Number:</FormLabel>
          <Input
            type="number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            width="100%"
          />
        </InputGroup>
        <Button mt={4} colorScheme="teal" type="submit" w="100%">
          Add Contact
        </Button>
      </form>
    </Container>
  );
}
