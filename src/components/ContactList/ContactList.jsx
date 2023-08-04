import React, { useEffect } from 'react';
import {
  Box,
  Button,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Notification from 'components/Notification/Notification';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { selectError } from 'redux/contacts/selectors';
import { useDispatch } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const { contacts } = useSelector(selectContacts);

  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    if (normalizedFilter === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = filterContacts();
  const hasContacts = filteredContacts.length > 0;

  const listItemHoverBgColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box mt={4}>
      {isError ? (
        <Notification message={'Sorry, something went wrong'} />
      ) : hasContacts ? (
        <List>
          {filteredContacts.map(contact => (
            <ListItem
              key={contact.id}
              _hover={{
                bg: listItemHoverBgColor,
                transition: 'background-color 0.6s',
              }}
              p={2}
              borderRadius="md"
              color="black"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
              mb="2"
            >
              <Text>
                {contact.name}: {contact.number}
              </Text>
              <Button
                colorScheme="red"
                size="sm"
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      ) : (
        <Notification
          message={
            filter
              ? `No contacts with name '${filter}'`
              : 'No contacts in your phonebook'
          }
        />
      )}
    </Box>
  );
}
