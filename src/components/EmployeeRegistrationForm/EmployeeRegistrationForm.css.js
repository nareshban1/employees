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
align-items: center;
`

export const GenderInputGroup = styled.label`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between;
`

export const Input = styled.input`
width: 50%;
padding: 10px;
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
`

export const GenderGroup = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
`