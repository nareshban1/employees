import styled from "styled-components";

export const ErrorMessageContainer = styled.div`
    padding: 1rem;
    font-size: 1rem;
    background-color:${(props) => props.backgroundColor} ;
    color:${(props) => props.color};
    margin:20px 0;
`