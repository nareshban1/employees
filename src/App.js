import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppContainer } from "./CommonStyles/CommonStyles.css";
import { GlobalStyles } from "./CommonStyles/GlobalStyles.css";
import AddEmployee from "./routes/AddEmployee/AddEmployee";
import EmployeeList from "./routes/EmployeeList/EmployeeList";
import UpdateEmployee from "./routes/UpdateEmployee/UpdateEmployee";
import EmployeeProvider from "./Utilities/EmployeeProvider";
function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <EmployeeProvider>
        <Routes>
          <Route path={"/"} element={<EmployeeList />} />
          <Route path={"/addemployee"} element={<AddEmployee />} />
          <Route path={`/updateemployee/:id`} element={<UpdateEmployee />} />
        </Routes>
      </EmployeeProvider>

    </AppContainer>
  );
}

export default App;
