import styled from "styled-components";

export const ButtonContainer = styled.button`
        color:${(props) => props.color};
        background-color:${(props) => props.backgroundColor};
        box-shadow: 0px 0px 5px 2px #00000030;
        border: none;
        padding:1rem;
        border-radius: 5px;
        margin:${(props) => props.margin};
        cursor: pointer;
        font-size: ${(props) => props.fontSize || "1rem"} ;
        transition: 0.2s ease-in-out;

        &:hover{
                transform: scale(1.05);
        }
`