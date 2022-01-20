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

const EmployeeTable = ({ employeeData }) => {
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
  const sortData = (employees, sortKey, reverse) => {
    if (!sortKey) return employees;

    const sortedData = employees.sort((a, b) => {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    });

    if (reverse) {
      return sortedData.reverse();
    }
    return sortedData;
  };

  const sortedData = useMemo(() => {
    return sortData(employeeData, sortKey, sortOrder === "desc");
  }, [employeeData, sortKey, sortOrder]);

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

  return (
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
                <Button text={"View"} type={"button"} styles={buttonStyles} />
                <Button
                  text={"Update"}
                  type={"button"}
                  styles={updateButtonStyles}
                />
                <Button
                  text={"Delete"}
                  type={"button"}
                  styles={deleteButtonStyles}
                />
              </EmployeeRow>
            </tr>
          ))}
        </tbody>
      </Table>
    </EmployeeTableContainer>
  );
};

export default EmployeeTable;
