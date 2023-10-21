import styled from 'styled-components';

export const List = styled.ul`
  margin: 0 auto;
  width: 480px;
  padding-top: 15px;
  padding-bottom: 15px;
`;
export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Button = styled.button`
  background-color: #0b1a0d;
  border-radius: 10px;
  color: white;
  padding: 5px 5px;
  cursor: pointer;
  &:hover {
    background-color: lightgreen;
  }

`;

export const LookButton = styled.div`
  text-align: center;
  padding: 5px 10px;
  cursor: pointer;
`;
