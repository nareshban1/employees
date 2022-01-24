import React, { useContext } from "react";
import Button from "../Button/Button";
import {
  DeleteModalButtons,
  DeleteModalCard,
  DeleteModalMessage,
} from "./DeleteModal.css";

import {
  CrossIcon,
  ModalContainer,
  ModalHeader,
} from "../../CommonStyles/CommonStyles.css";
import { employeeDataContext } from "../../Utilities/EmployeeProvider";

const DeleteModal = ({ setShowDeleteModal, id, employeeData }) => {
  const { setEmployeeData } = useContext(employeeDataContext);

  const buttonStyle = {
    color: "white",
    backgroundColor: "#db965e",
    fontSize: "1rem",
    margin: "0 10px 0px 0px",
  };
  const confirmButtonStyle = {
    color: "white",
    backgroundColor: "#e05551",
    fontSize: "1rem",
  };
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const deleteEmployee = () => {
    let items = employeeData.filter((employee) => employee.id !== id);
    setEmployeeData([...items]);
    setShowDeleteModal(false);
  };

  return (
    <ModalContainer>
      <DeleteModalCard>
        <ModalHeader>
          Delete <CrossIcon onClick={closeDeleteModal} />
        </ModalHeader>
        <DeleteModalMessage>
          Are you sure you want to delete.
        </DeleteModalMessage>
        <DeleteModalButtons>
          <Button
            text={"Cancel"}
            styles={buttonStyle}
            handleClick={closeDeleteModal}
          />
          <Button
            text={"Confirm"}
            styles={confirmButtonStyle}
            handleClick={deleteEmployee}
          />
        </DeleteModalButtons>
      </DeleteModalCard>
    </ModalContainer>
  );
};

export default DeleteModal;
