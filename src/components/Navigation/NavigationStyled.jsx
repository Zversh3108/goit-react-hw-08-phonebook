import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const NavLinkStyled = styled(NavLink)`
  color: #59504c;
  padding: 10px 10px;
  display: block;
  transition: color 0.4s, background-color 0.4s;
  &:hover {
    color: #061a8c;
  }
  &.active {
    color: #061a8c;
    border-bottom: 3px solid #59504c;
  }
`;
export const NavStyled = styled.nav`
  margin-right: 15px;
  display: flex;
  align-items: center;
`;
