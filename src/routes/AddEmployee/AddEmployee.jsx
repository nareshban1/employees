import React from "react";
import EmployeeRegistrationForm from "../../components/EmployeeRegistrationForm/EmployeeRegistrationForm";
import Heading from "../../components/Heading/Heading";

const AddEmployee = () => {
  return (
    <>
      <Heading text={"Employee Registration Form"} />
      <EmployeeRegistrationForm />
    </>
  );
};

export default AddEmployee;
