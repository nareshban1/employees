import styled from "styled-components";

export const Form = styled.form`
    margin: 20px 0;
    font-size: 1rem;
`

export const Label = styled.label`
display: flex;
justify-content: space-between;
width: 100%;
align-items: center;
`

export const GenderLabel = styled.label`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
padding-right: 20px;

`

export const GenderInputGroup = styled.label`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between;

`

export const InputWrapper = styled.div`
width: 50%;
`



export const TableInput = styled.input`
width: 100%;
padding: 10px;
`

export const FormGridGroup = styled.div`
    display:grid;
    grid-template-columns: repeat(2,1fr);
    row-gap: 20px;
    column-gap: 100px;

    @media (max-width: 800px) {
        grid-template-columns: repeat(1,1fr);
  }
`

export const GenderGroup = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
`

export const FormInputGroup = styled.div`
    display: flex;
    flex-direction: column;
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

&:invalid[focused = "true"] ~ ${InputError}{
    display: block;
}
`