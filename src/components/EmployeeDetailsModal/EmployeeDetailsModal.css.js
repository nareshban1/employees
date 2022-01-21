import styled from "styled-components";

export const EmployeeDetailsCard = styled.div`
background-color: white;
padding: 1rem;
width: min(90%, 500px);
border-radius:5px;
box-shadow: 0px 0px 5px 2px #00000030;

`

export const EmployeeDetails = styled.div`
    margin: 10px 0;
`
export const EmployeeDetailsGrid = styled.div`
    display:grid;
    grid-template-columns: repeat(2,1fr);
    gap:20px;

`

export const EmployeeDetailsTitle = styled.p`
    font-size:1.2rem;
    font-weight:500;
`

export const EmployeeDetailsData = styled.p`
    font-size:1rem;
    font-weight:400;
    
`

export const EducationDetails = styled.div`
    font-weight: 600;
    margin:10px 0;
    
`

export const EducationDetailCard = styled.div`
    
    background-color: #d7e5f0;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    
`
export const EducationBoard = styled.p`
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 400;
    
`
export const EducationInstitute = styled.p`
    text-transform: capitalize;
    letter-spacing: 1px;
`
export const EducationData = styled.p`
    font-weight: 400;
    
`