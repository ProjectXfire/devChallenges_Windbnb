import styled from "styled-components";

export const ActionButtons = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border: 0;
  border-radius: 10px;
  margin-right: 10px;
  background-color: ${(props) => props.color};
  color: white;
  cursor: pointer;
  & svg {
    margin-right: 5px;
  }
  &:active {
    transform: scale(0.9);
  }
  &:hover {
    background-color: ${(props) => props.color};
    opacity: 0.8;
  }
`;
