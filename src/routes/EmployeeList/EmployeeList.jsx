import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import EmployeeTable from "../../components/EmployeeTable/EmployeeTable";
import ErrorMessages from "../../components/ErrorMessages/ErrorMessages";
import Header from "../../components/Header/Header";
import Heading from "../../components/Heading/Heading";
import SearchBar from "../../components/SearchBar/SearchBar";
import { employeeDataContext } from "../../Utilities/EmployeeProvider";

const EmployeeList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { employeeData } = useContext(employeeDataContext);
  const [employees, setEmployees] = useState(employeeData);
  const buttonStyles = {
    color: "black",
    backgroundColor: "white",
  };

  const errorStyles = {
    color: "red",
    backgroundColor: "#FFE0E0",
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      if (searchQuery.length > 0) {
        let filteredData = employeeData?.filter((data) =>
          Object.keys(data).some(
            (k) =>
              data[k]
                .toString()
                .toLowerCase()
                .indexOf(searchQuery.toLowerCase()) !== -1
          )
        );
        console.log(filteredData);
        setEmployees(filteredData);
      } else {
        setEmployees(employeeData);
      }
    }
  };

  useEffect(() => {
    setEmployees(employeeData);
  }, [employeeData]);

  return (
    <div>
      <Link to="/addemployee">
        <Button text={"Add Employee"} styles={buttonStyles} />
      </Link>
      <Header>
        <Heading text={"Employees"} />
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
      </Header>

      <EmployeeTable employees={employees} />
      {employees.length === 0 && (
        <ErrorMessages
          styles={errorStyles}
          errorMessage={" Sorry no employees found"}
        />
      )}
    </div>
  );
};

export default EmployeeList;
