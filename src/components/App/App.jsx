import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { refreshUser } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Loader } from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import HomePage from 'pages/Home';
import RegisterPage from 'pages/Register';
import LoginPage from 'pages/Login';

import ContactsPage from 'pages/Contacts';
import { AddContactPage } from 'pages/AddContactPage';
export default function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ChakraProvider>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            >
              <Route
                path="addContact"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<AddContactPage isOpen={true} />}
                  />
                }
              />
            </Route>
          </Route>
          <Route
            path="*"
            element={<Notification message="404 Page not found" />}
          />
        </Routes>
      )}
    </ChakraProvider>
  );
}
