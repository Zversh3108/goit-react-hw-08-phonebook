import React from 'react';

import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectLoggedError } from 'redux/auth/selectors';

import { RegisterForm } from 'components/RegistrationForm/RegistrationForm';
import Notification from 'components/Notification/Notification';
export default function Register() {
  const isLoggedError = useSelector(selectLoggedError);

  return (
    <div>
      <RegisterForm />
      {isLoggedError && (
        <Notification message="The given e-mail address was already used to create another account. Try again using another e-mail address." />
      )}
    </div>
  );
}
