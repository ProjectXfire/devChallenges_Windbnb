import React from "react";
// Styles
import { Header as HeaderStyled } from "../styles/header";

export const Header = ({ children }) => {
  return <HeaderStyled>{children}</HeaderStyled>;
};
