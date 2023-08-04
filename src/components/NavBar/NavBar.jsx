import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/userMenu/userMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Header } from './NavBarStyled';

export const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
