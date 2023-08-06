import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/userMenu/userMenu';

import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Header } from './NavBarStyled';
import { MobileAuthNav } from 'components/MobileAuthNav/MobileAuthNav';
export const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <MobileAuthNav />}
    </Header>
  );
};
