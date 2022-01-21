import React from "react";
import EmployeeRegistrationForm from "../../components/EmployeeRegistrationForm/EmployeeRegistrationForm";
import Heading from "../../components/Heading/Heading";

const AddEmployee = ({ employeeData, setEmployeeData }) => {
  return (
    <>
      <Heading text={"Employee Registration Form"} />
      <EmployeeRegistrationForm
        setEmployeeData={setEmployeeData}
        employeeData={employeeData}
      />
    </>
  );
};

export default AddEmployee;
