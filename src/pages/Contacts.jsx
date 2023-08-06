import React, { Suspense } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import SearchContactByName from 'components/SearchContact/SearchContact';
import ContactList from 'components/ContactList/ContactList';
import { ToAddContactButton } from 'components/ToAddContactButton/ToAddContactButton';

import { Outlet } from 'react-router-dom';

export default function ContactsPage() {
  return (
    <Flex direction="column">
      <Flex justifyContent="end" alignItems="center">
        <Box>
          <ToAddContactButton />
        </Box>
      </Flex>

      <Box mt={4}>
        <SearchContactByName title={'Search contact by name'} />
      </Box>

      <Box mt={4}>
        <ContactList />
      </Box>

      <Box mt={4}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Box>
    </Flex>
  );
}
