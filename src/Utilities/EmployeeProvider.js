import React, { createContext, useState } from 'react';
import { employees } from "../Data/employeeData";



export const employeeDataContext = createContext();

const EmployeeProvider = (props) => {
    const [employeeData, setEmployeeData] = useState(employees);
    return <employeeDataContext.Provider value={{ employeeData, setEmployeeData }}>
        {props.children}
    </employeeDataContext.Provider>;
};

export default EmployeeProvider;
