import React, { useState, useMemo } from "react";
import {
  EmployeeTableContainer,
  Table,
  SortArrowBtn,
  TableHeader,
  TableHeaderTab,
  TableHeaderRow,
  EmployeeRow,
} from "./EmployeeTable.css";

import { IoIosArrowUp } from "react-icons/io";
import Button from "../Button/Button";
import DeleteModal from "../DeleteModal/DeleteModal";
import EmployeeDetailsModal from "../EmployeeDetailsModal/EmployeeDetailsModal";
import { Link } from "react-router-dom";

const EmployeeTable = ({ employees }) => {
  const [sortKey, setSortKey] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const headers = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "address",
      label: "Address",
    },
    {
      key: "dob",
      label: "Date of Birth",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "phoneNo",
      label: "Phone Number",
    },
  ];

  const SortArrow = ({ sortOrder, columnKey, sortKey, onClick }) => {
    return (
      <SortArrowBtn
        onClick={onClick}
        reverse={sortKey === columnKey && sortOrder === "desc"}
      >
        <IoIosArrowUp />
      </SortArrowBtn>
    );
  };

  const changeOrder = (key) => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    setSortKey(key);
  };

  //sorting method for all the columns
  const sortData = (employeesData, sortKey, reverse) => {
    if (!sortKey) return employeesData;

    const sortedData = employeesData.sort((a, b) => {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    });

    if (reverse) {
      return sortedData.reverse();
    }
    return sortedData;
  };

  const sortedData = useMemo(() => {
    return sortData(employees, sortKey, sortOrder === "desc");
  }, [employees, sortKey, sortOrder]);

  const buttonStyles = {
    color: "white",
    backgroundColor: "#0069FF",
    fontSize: "0.8rem",
  };
  const updateButtonStyles = {
    color: "white",
    backgroundColor: "#db965e",
    fontSize: "0.8rem",
    margin: "0 10px",
  };
  const deleteButtonStyles = {
    color: "white",
    backgroundColor: "#e05551",
    fontSize: "0.8rem",
  };

  const [showDeletModal, setShowDeleteModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selected, setSelected] = useState();

  const openDeleteModal = (id) => {
    setSelected(id);
    setShowDeleteModal(true);
  };
  const openDetailsModal = (id) => {
    setSelected(id);
    setShowDetailsModal(true);
  };

  return (
    <>
      <EmployeeTableContainer>
        <Table>
          <TableHeader>
            <TableHeaderRow>
              {headers?.map((header) => (
                <TableHeaderTab
                  key={header.key}
                  onClick={() => changeOrder(header.key)}
                >
                  {header.label}
                  <SortArrow
                    sortOrder={sortOrder}
                    columnKey={header.key}
                    sortKey={sortKey}
                    onClick={() => changeOrder(header.key)}
                  />
                </TableHeaderTab>
              ))}
              <TableHeaderTab>Action</TableHeaderTab>
            </TableHeaderRow>
          </TableHeader>
          <tbody>
            {sortedData?.map((employee) => (
              <tr key={employee.id}>
                <EmployeeRow>{employee.name}</EmployeeRow>
                <EmployeeRow>{employee.address}</EmployeeRow>
                <EmployeeRow>{employee.dob}</EmployeeRow>
                <EmployeeRow>{employee.email}</EmployeeRow>
                <EmployeeRow>{employee.phoneNo}</EmployeeRow>
                <EmployeeRow>
                  <Button
                    text={"View"}
                    type={"button"}
                    styles={buttonStyles}
                    handleClick={() => openDetailsModal(employee.id)}
                  />
                  <Link to={`/updateemployee/${employee.id}`}>
                    <Button
                      text={"Update"}
                      type={"button"}
                      styles={updateButtonStyles}
                    />
                  </Link>
                  <Button
                    text={"Delete"}
                    type={"button"}
                    styles={deleteButtonStyles}
                    handleClick={() => openDeleteModal(employee.id)}
                  />
                </EmployeeRow>
              </tr>
            ))}
          </tbody>
        </Table>
      </EmployeeTableContainer>
      <>
        {showDeletModal && (
          <DeleteModal
            setShowDeleteModal={setShowDeleteModal}
            employeeData={employees}
            id={selected}
          />
        )}
      </>
      <>
        {showDetailsModal && (
          <EmployeeDetailsModal
            setShowDetailsModal={setShowDetailsModal}
            employeeData={employees}
            id={selected}
          />
        )}
      </>
    </>
  );
};

export default EmployeeTable;
