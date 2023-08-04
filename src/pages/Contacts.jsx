import AddContactForm from 'components/AddContactForm/AddContactForm';
import SearchContactByName from 'components/SearchContact/SearchContact';
import ContactList from 'components/ContactList/ContactList';
import { Flex, Box, Grid } from '@chakra-ui/react';
export default function ContactsPage() {
  return (
    <Flex direction="column" align="left">
      <SearchContactByName title={'Search contact by name'} />
      <Grid templateColumns="1fr 1fr" gap={4} mt={4}>
        <Box>
          <ContactList />
        </Box>
        <Box>
          <AddContactForm />
        </Box>
      </Grid>
    </Flex>
  );
}
