import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Element = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const Button = styled.button`
  font-size: 16px;
  width: 100px;
  height: 30px;
  padding: 5px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  outline: none;
  background-color: rgb(101, 227, 255);
  box-shadow: 0px 3px 5px 1px rgba(45, 90, 124, 0.2);
  transition: background-color 250ms linear, transform 250ms ease-in-out;

  &:hover {
    background-color: rgb(0, 149, 255);
    color: #ffffff;
    transform: scale(1.2);
  }
`;
