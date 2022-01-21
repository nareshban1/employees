import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import EmployeeTable from "../../components/EmployeeTable/EmployeeTable";
import Header from "../../components/Header/Header";
import Heading from "../../components/Heading/Heading";
import SearchBar from "../../components/SearchBar/SearchBar";

const EmployeeList = ({ employeeData, setEmployeeData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [employees, setEmployees] = useState(employeeData);
  const buttonStyles = {
    color: "black",
    backgroundColor: "white",
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      if (searchQuery.length > 0) {
        let filteredData = employees.filter((data) =>
          Object.keys(data).some(
            (k) => data[k].toString().toLowerCase().indexOf(searchQuery) !== -1
          )
        );
        setEmployees(filteredData);
      } else {
        setEmployees(employeeData);
        alert("Search Query must have more than 3 characters");
      }
    }
  };

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

      <EmployeeTable
        employeeData={employees}
        setEmployeeData={setEmployeeData}
      />
    </div>
  );
};

export default EmployeeList;
