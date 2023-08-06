import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  padding: 24px 35px;
  position: relative;
  color: inherit;
  font-weight: bold;

  &:hover {
    color: #061a8c;
    border-bottom-color: transparent;
  }

  &.active {
    color: #061a8c;
    
    border-bottom-color: #59504c;

    &::after {
      content: '';
      position: absolute;
      bottom: 0; /* Змінили позиціонування відносно родича */
      left: 0;
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background-image: linear-gradient(to right, #e31045, #e45eeb);
    }
  }

  :not(:last-child) {
    margin-right: 30px;
  }
`;

export const NavStyled = styled.nav`
  margin-right: 15px;
  margin-left: 15px;
  display: flex;
  align-items: center;
`;
