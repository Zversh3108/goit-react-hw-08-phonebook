import { NavLinkStyled, AuthNavStyled } from './AuthNavStyled';
export const AuthNav = () => {
  return (
    <AuthNavStyled>
      <NavLinkStyled to="/register">SignUp</NavLinkStyled>
      <NavLinkStyled to="/login">Login</NavLinkStyled>
    </AuthNavStyled>
  );
};
