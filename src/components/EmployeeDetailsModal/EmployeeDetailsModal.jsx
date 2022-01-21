import React, { useEffect, useState } from "react";
import {
  CrossIcon,
  ModalContainer,
  ModalHeader,
} from "../../CommonStyles/CommonStyles.css";
import {
  EducationBoard,
  EducationData,
  EducationDetailCard,
  EducationDetails,
  EducationInstitute,
  EmployeeDetails,
  EmployeeDetailsCard,
  EmployeeDetailsData,
  EmployeeDetailsTitle,
} from "./EmployeeDetailsModal.css";

const EmployeeDetailsModal = ({ setShowDetailsModal, id, employeeData }) => {
  const [employeeDetails, setEmployeeDetails] = useState({});

  const closeModal = () => {
    setShowDetailsModal(false);
  };

  useEffect(() => {
    const getEmployee = () => {
      setEmployeeDetails(
        ...employeeData.filter((employee) => employee.id === id)
      );
    };

    getEmployee();
  }, [id, employeeData]);

  return (
    <ModalContainer>
      <EmployeeDetailsCard>
        <ModalHeader>
          EmployeeDetails <CrossIcon onClick={closeModal} />
        </ModalHeader>
        <EmployeeDetails>
          <EmployeeDetailsTitle>{employeeDetails.name}</EmployeeDetailsTitle>
          <EmployeeDetailsData>{employeeDetails.address}</EmployeeDetailsData>
          <EmployeeDetailsData>{employeeDetails.gender}</EmployeeDetailsData>
          <EmployeeDetailsData>
            Date of Birth: &nbsp; {employeeDetails.dob}
          </EmployeeDetailsData>
          <EmployeeDetailsData>{employeeDetails.email}</EmployeeDetailsData>
          <EmployeeDetailsData>{employeeDetails.phoneNo}</EmployeeDetailsData>
        </EmployeeDetails>
        <EducationDetails>
          Education Details
          {employeeDetails?.education?.map((edu, index) => (
            <EducationDetailCard key={index}>
              <EducationBoard>{edu.board}</EducationBoard>
              <EducationInstitute>{edu.institution}</EducationInstitute>
              <EducationData>
                Year Completed: &nbsp;{edu.passedYear}
              </EducationData>
              <EducationData>
                Percent Acquired: &nbsp;{edu.percentage}% &nbsp; Grade: &nbsp;{" "}
                {edu.grade}
              </EducationData>
              <EducationData></EducationData>
            </EducationDetailCard>
          ))}
        </EducationDetails>
      </EmployeeDetailsCard>
    </ModalContainer>
  );
};

export default EmployeeDetailsModal;
