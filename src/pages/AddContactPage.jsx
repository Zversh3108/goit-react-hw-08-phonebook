import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import AddContactForm from 'components/AddContactForm/AddContactForm';
import { useNavigate } from 'react-router-dom';

export const AddContactPage = ({ isOpen }) => {
  const navigate = useNavigate();
  const OnCloseModal = () => {
    navigate('/contacts');
  };
  return (
    <Modal isOpen={isOpen} onClose={OnCloseModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Модальне вікно</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <AddContactForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
