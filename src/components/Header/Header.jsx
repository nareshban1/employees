import React from "react";
import { HeaderFlex } from "./Header.css";

const Header = (props) => {
  return <HeaderFlex>{props.children}</HeaderFlex>;
};

export default Header;
