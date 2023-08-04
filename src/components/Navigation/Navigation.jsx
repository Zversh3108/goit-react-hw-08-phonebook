
import { NavLinkStyled, NavStyled } from './NavigationStyled';
export const Navigation = () => {
  return (
    <NavStyled>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
    </NavStyled>
  );
};
