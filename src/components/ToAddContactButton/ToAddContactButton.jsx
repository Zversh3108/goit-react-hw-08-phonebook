import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonStyled } from './ToAddContactButtonStyled';
export const ToAddContactButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contacts/addContact', { replace: true });
  };

  return <ButtonStyled onClick={handleClick}>Add Contact</ButtonStyled>;
};
