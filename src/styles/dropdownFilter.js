import styled, { keyframes, css } from "styled-components";
import { colors } from "../styles/colors";
import { device } from "../utils/screens";

export const DropdownFilterBackground = styled.section`
  position: ${(props) => (props.showSearch ? "absolute" : "block")};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.5;
  cursor: pointer;
`;

export const DropdownFilter = styled.div`
  position: absolute;
  top: -100%;
  right: 0;
  left: 0;
  background-color: white;
  ${(props) => {
    if (props.showSearch === null) {
      return "";
    }
    if (props.showSearch) {
      return animationShow;
    } else {
      return animationHide;
    }
  }}
`;

export const FilterContainer = styled.div`
  margin: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  & svg {
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 0.8rem;

  & p:last-child {
    color: #9e9e9e;
  }
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const MenuDropdown = styled.div`
  margin: 5px 5px;
`;

export const MenuHeader = styled.div`
  border: 1px solid ${colors.border};
  border-radius: 15px;
  -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  padding: 0 10px;
  cursor: pointer;
  &:hover {
    border-radius: 15px;
    background-color: ${colors.bkg_dropdown_header};
  }
  &:active {
    border-radius: 15px;
    background-color: ${colors.bkg_dropdown_header};
  }
`;

export const MenuOptions = styled.div`
  padding: 0 10px;
  & svg {
    margin-right: 5px;
  }
  & li {
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
    cursor: pointer;
    &:hover {
      background-color: ${colors.bkg_dropdown_item};
    }
  }
  & div {
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const showFilter = keyframes`
  0% {
    top: -100%;
  }
  100%{
    top: 0;
  }
`;
const hideFilter = keyframes`
  0% {
    top: 0;
  }
  100%{
    top: -100%;
  }
`;

const animationShow = css`
  animation: ${showFilter} 0.5s forwards;
`;

const animationHide = css`
  animation: ${hideFilter} 1s backwards;
`;
