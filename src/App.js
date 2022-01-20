import { Route, Routes } from "react-router-dom";
import { AppContainer } from "./CommonStyles/CommonStyles.css";
import { GlobalStyles } from "./CommonStyles/GlobalStyles.css";
import AddEmployee from "./routes/AddEmployee/AddEmployee";
import EmployeeList from "./routes/EmployeeList/EmployeeList";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Routes>
        <Route path={"/"} element={<EmployeeList />} />
        <Route path={"/addemployee"} element={<AddEmployee />} />
      </Routes>


    </AppContainer>
  );
}

export default App;
