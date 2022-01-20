import styled from "styled-components";



export const EmployeeTableContainer = styled.div`
    width: 100%;
    overflow-x: auto;
    margin: 20px 0;
   
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`

export const TableHeader = styled.thead`
    width: 100%;
    background-color: #EFEFEF;
    
`

export const TableHeaderRow = styled.tr`
    width: 100%;
   
    
`

export const TableHeaderTab = styled.th`
   text-align:left;
   padding: 1rem 0.5rem;
`

export const EmployeeRow = styled.td`
   text-align:left;
   padding: 1rem 0.5rem;
   border-bottom: 1px solid #1D1F27;
   box-sizing:border-box;
   
`

export const SortArrowBtn = styled.button`
    background: none;
    border: none;
    margin-left:10px ;
    transform: ${(props) => props.reverse && "rotate(180deg)"};
    transition: transform 1s ease-out ;
    font-size: 1rem;
`