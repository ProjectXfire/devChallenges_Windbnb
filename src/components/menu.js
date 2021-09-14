import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
// Styles
import { Menu as MenuStyled } from "../styles/header";

export const Menu = ({ selected, setShowSearch }) => {
  return (
    <MenuStyled>
      <span>{selected.city}</span>
      <span>{selected.guests}</span>
      <span
        onClick={() => {
          setShowSearch(true);
          document.body.style.overflow = "hidden";
        }}
      >
        <AiOutlineSearch color="red" size="20" />
      </span>
    </MenuStyled>
  );
};
