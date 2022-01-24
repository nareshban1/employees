import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import EmployeeUpdateForm from "../../components/EmployeeUpdateForm/EmployeeUpdateForm";
import Heading from "../../components/Heading/Heading";
import { employeeDataContext } from "../../Utilities/EmployeeProvider";
const UpdateEmployee = () => {
  const { employeeData } = useContext(employeeDataContext);
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
          employeeDetails={employeeDetails}
          objectIndex={objectIndex}
        />
      )}
    </>
  );
};

export default UpdateEmployee;
