import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import EmployeeTable from "../../components/EmployeeTable/EmployeeTable";
import Header from "../../components/Header/Header";
import Heading from "../../components/Heading/Heading";
import SearchBar from "../../components/SearchBar/SearchBar";
import { employees } from "../../Data/employeeData";

const EmployeeList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [employeeData, setEmployeeData] = useState(employees);

  const buttonStyles = {
    color: "black",
    backgroundColor: "white",
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      if (searchQuery.length > 3) {
        let filteredData = employees.filter((data) =>
          Object.keys(data).some(
            (k) => data[k].toString().toLowerCase().indexOf(searchQuery) !== -1
          )
        );
        setEmployeeData(filteredData);
        console.log(filteredData);
      } else {
        setEmployeeData(employees);
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

      <EmployeeTable employeeData={employeeData} />
    </div>
  );
};

export default EmployeeList;
