import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@chakra-ui/react';
export default function Notification(props) {
  return (
    <Container centerContent display="flex" height="100vh">
      <h2>{props.message}</h2>
    </Container>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
