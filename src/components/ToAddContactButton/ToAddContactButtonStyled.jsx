import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  background-color: teal;
  margin-top: 10px;
  color: white;
  padding: 6px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #008080;
  }

  &:active {
    transform: scale(0.95);
  }
`;
