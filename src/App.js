import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContainer } from "./CommonStyles/CommonStyles.css";
import { GlobalStyles } from "./CommonStyles/GlobalStyles.css";
import AddEmployee from "./routes/AddEmployee/AddEmployee";
import EmployeeList from "./routes/EmployeeList/EmployeeList";
import { employees } from "./Data/employeeData";
import UpdateEmployee from "./routes/UpdateEmployee/UpdateEmployee";
function App() {
  const [employeeData, setEmployeeData] = useState(employees);
  return (
    <AppContainer>
      <GlobalStyles />
      <Routes>
        <Route path={"/"} element={<EmployeeList employeeData={employeeData} setEmployeeData={setEmployeeData} />} />
        <Route path={"/addemployee"} element={<AddEmployee setEmployeeData={setEmployeeData} employeeData={employeeData} />} />
        <Route path={`/updateemployee/:id`} element={<UpdateEmployee setEmployeeData={setEmployeeData} employeeData={employeeData} />} />
      </Routes>


    </AppContainer>
  );
}

export default App;
