import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EmployeeUpdateForm from "../../components/EmployeeUpdateForm/EmployeeUpdateForm";
import Heading from "../../components/Heading/Heading";
const UpdateEmployee = ({ setEmployeeData, employeeData }) => {
  const [employeeDetails, setEmployeeDetails] = useState({});
  const [objectIndex, setObjectIndex] = useState();

  const params = useParams();
  useEffect(() => {
    const getEmployee = () => {
      setEmployeeDetails(
        ...employeeData.filter(
          (employee) => employee.id === parseInt(params.id)
        )
      );
    };

    setObjectIndex(
      employeeData?.findIndex((obj) => obj.id === parseInt(params.id))
    );

    getEmployee();
  }, [employeeData, params.id]);
  return (
    <>
      <Heading text={"Update Employee Details"} />
      {Object.keys(employeeDetails).length !== 0 && (
        <EmployeeUpdateForm
          setEmployeeData={setEmployeeData}
          employeeDetails={employeeDetails}
          employeeData={employeeData}
          objectIndex={objectIndex}
        />
      )}
    </>
  );
};

export default UpdateEmployee;
