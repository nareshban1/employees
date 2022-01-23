import styled from "styled-components";
export const FormInputGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const InputError = styled.span`
    font-size: 12px;
    padding: 3px;
    color: red;
    display: none;
`

export const Input = styled.input`
    padding: 10px;

    &:invalid[focused = "true"]{
        border: 1px solid red;
    }
    
    &:invalid ~ ${InputError}{
        ${({ focused }) => focused === "true" && "display: block"}
      
    }
`