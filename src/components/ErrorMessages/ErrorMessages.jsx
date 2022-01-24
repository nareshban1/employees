import React from "react";
import { ErrorMessageContainer } from "./ErrorMessages.css";

const ErrorMessages = ({ errorMessage, styles }) => {
  return (
    <ErrorMessageContainer {...styles}>{errorMessage}</ErrorMessageContainer>
  );
};

export default ErrorMessages;
