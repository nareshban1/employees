import styled from "styled-components";
import { ImCross } from "react-icons/im";
export const AppContainer = styled.main`
    width: min(95%,1320px);
    margin:0 auto;
    padding:50px 0;
`

export const ModalContainer = styled.div`
    position: absolute;
    background-color: #00000030;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    place-items: center;
`
export const CrossIcon = styled(ImCross)`
    font-size: 1rem;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;

    &:hover{
        transform: rotate(-90deg);
    }
`

export const ModalHeader = styled.header`
    font-weight: 700;
    font-size: 1.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`