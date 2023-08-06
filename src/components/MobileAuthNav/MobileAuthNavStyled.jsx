import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MobileAuthNavLinkStyled = styled(NavLink)`
  padding: 0;
  margin: 0;
  width: 100%;
  display: block;
  color: inherit;
  font-weight: bold;
  text-align: left;
  position: relative;

  &:hover {
    color: #061a8c;
    border-bottom-color: transparent;
  }

  &.active {
    color: #061a8c;
    border-bottom: 2px solid #59504c;
  }
`;
