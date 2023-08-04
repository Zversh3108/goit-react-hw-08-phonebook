import { useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Button } from '@chakra-ui/react';
import { UserMenuStyled } from './UserMenuStyled';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuStyled>
      <p>{user.email}</p>
      <Button size="xs" mb="0.5" onClick={() => handleLogout()}>
        Logout
      </Button>
    </UserMenuStyled>
  );
};
