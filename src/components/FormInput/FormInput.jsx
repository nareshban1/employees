import React, { useState } from "react";
import { FormInputGroup, Input, InputError } from "./FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { width, errorMessage, onChange, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <FormInputGroup width={width}>
      <Input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <InputError>{errorMessage}</InputError>
    </FormInputGroup>
  );
};

export default FormInput;
