import React from 'react';
import { MobileAuthNavLinkStyled } from './MobileAuthNavStyled';
import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  Portal,
} from '@chakra-ui/react';

export const MobileAuthNav = () => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton isActive={isOpen} as={Button}>
            Sign In
          </MenuButton>
          <Portal>
            <MenuList>
              <MenuItem>
                <MobileAuthNavLinkStyled to="/login">
                  Login
                </MobileAuthNavLinkStyled>
              </MenuItem>
              <MenuItem>
                <MobileAuthNavLinkStyled to="/register">
                  Sign Up
                </MobileAuthNavLinkStyled>
              </MenuItem>
            </MenuList>
          </Portal>
        </>
      )}
    </Menu>
  );
};
