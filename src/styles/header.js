import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  & img {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #f5f5f5;
  border-radius: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 0.8rem;
  -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  & span {
    padding: 10px 15px;
  }
  & span:nth-child(2) {
    border-left: 1px solid #f5f5f5;
    border-right: 1px solid #f5f5f5;
    color: #e0e0e0;
  }
  & span:last-child {
    cursor: pointer;
  }
  & svg {
    display: block;
  }
`;
