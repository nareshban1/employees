import React from "react";
import { ButtonContainer } from "./Button.css";

const Button = ({ text, styles, handleClick, type }) => {
  return (
    <ButtonContainer {...styles} onClick={handleClick} type={type}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
