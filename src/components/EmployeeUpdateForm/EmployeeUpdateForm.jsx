import React, { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import Header from "../Header/Header";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import {
  EmployeeTableContainer,
  Table,
  TableHeader,
  TableHeaderTab,
  TableHeaderRow,
  EmployeeRow,
} from "../EmployeeTable/EmployeeTable.css";
import {
  FormGridGroup,
  GenderGroup,
  GenderLabel,
  Label,
  GenderInputGroup,
  Input,
  TableInput,
  Form,
} from "../EmployeeRegistrationForm/EmployeeRegistrationForm.css";
import { Link } from "react-router-dom";

const EmployeeUpdateForm = ({
  employeeDetails,
  employeeData,
  setEmployeeData,
  objectIndex,
}) => {
  const [employee, setEmployee] = useState({
    id: employeeDetails.id,
    name: employeeDetails.name,
    address: employeeDetails.address,
    phoneNo: employeeDetails.phoneNo,
    gender: employeeDetails.gender,
    dob: employeeDetails.dob,
    email: employeeDetails.email,
  });

  const [education, setEducation] = useState();

  useEffect(() => {
    setEmployee({
      id: employeeDetails.id,
      name: employeeDetails.name,
      address: employeeDetails.address,
      phoneNo: employeeDetails.phoneNo,
      gender: employeeDetails.gender,
      dob: employeeDetails.dob,
      email: employeeDetails.email,
    });

    setEducation(employeeDetails.education);
  }, [employeeDetails]);

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setEmployee({
      ...employee,
      [e.target.name]: value,
    });
  };

  const today = new Date().toISOString().slice(0, 10);

  const handleEducationChange = (e, i) => {
    let newFeilds = [...education];
    newFeilds[i][e.target.name] = e.target.value;
    setEducation(newFeilds);
  };

  let addFields = () => {
    setEducation([
      ...education,
      {
        board: "",
        institution: "",
        passedYear: "",
        percentage: 0,
        grade: "",
      },
    ]);
  };

  let removeField = (i) => {
    let newFeilds = [...education];
    newFeilds.splice(i, 1);
    setEducation(newFeilds);
  };

  const buttonStyles = {
    color: "white",
    backgroundColor: "#0069FF",
  };

  const deleteButtonStyles = {
    color: "white",
    backgroundColor: "#e05551",
  };
  const backButtonStyles = {
    margin: "0 10px",
  };

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let items = [...employeeData];
    let item = { ...items[objectIndex] };
    item = { ...employee, education: [...education] };
    items[objectIndex] = item;
    setEmployeeData([...items]);
    navigate("/");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGridGroup>
          <Label>
            Name *
            <Input
              type={"text"}
              value={employee.name}
              onChange={handleChange}
              name="name"
              placeholder="Full Name"
              required
            />
          </Label>

          <Label>
            Address *
            <Input
              type={"text"}
              value={employee.address}
              onChange={handleChange}
              name="address"
              placeholder="Current Address"
              required
            />
          </Label>

          <Label>
            Date of Birth *
            <Input
              type={"date"}
              value={employee.dob}
              onChange={handleChange}
              name="dob"
              max={today}
              required
            />
          </Label>

          <GenderGroup>
            Gender *
            <GenderInputGroup>
              <GenderLabel>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={employee.gender === "Male"}
                  onChange={handleChange}
                  required
                />
                &nbsp; Male
              </GenderLabel>
              <GenderLabel>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={employee.gender === "Female"}
                  onChange={handleChange}
                  required
                />
                &nbsp; Female
              </GenderLabel>
              <GenderLabel>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={employee.gender === "Other"}
                  onChange={handleChange}
                  required
                />
                &nbsp; Other
              </GenderLabel>
            </GenderInputGroup>
          </GenderGroup>

          <Label>
            Email *
            <Input
              type={"text"}
              value={employee.email}
              onChange={handleChange}
              name="email"
              placeholder="Email"
              required
            />
          </Label>
          <Label>
            Phone Number *
            <Input
              type={"text"}
              value={employee.phoneNo}
              onChange={handleChange}
              name="phoneNo"
              placeholder="Phone Number"
              required
            />
          </Label>
        </FormGridGroup>
        <Header>
          <Heading text={"Education Details"} />
          <Button
            text={"Add"}
            handleClick={addFields}
            type={"button"}
            styles={buttonStyles}
          />
        </Header>
        <EmployeeTableContainer>
          <Table>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderTab>Board</TableHeaderTab>
                <TableHeaderTab>Institution</TableHeaderTab>
                <TableHeaderTab>Passed Year</TableHeaderTab>
                <TableHeaderTab>Percentage</TableHeaderTab>
                <TableHeaderTab>Grade</TableHeaderTab>
                <TableHeaderTab>Action</TableHeaderTab>
              </TableHeaderRow>
            </TableHeader>
            <tbody>
              {education?.map((element, index) => (
                <tr key={index}>
                  <EmployeeRow>
                    <TableInput
                      type={"text"}
                      value={element.board}
                      onChange={(e) => handleEducationChange(e, index)}
                      name="board"
                      placeholder="Board"
                      required
                    />
                  </EmployeeRow>
                  <EmployeeRow>
                    <TableInput
                      type={"text"}
                      value={element.institution}
                      onChange={(e) => handleEducationChange(e, index)}
                      name="institution"
                      placeholder="Inititution Name"
                      required
                    />
                  </EmployeeRow>
                  <EmployeeRow>
                    <TableInput
                      type={"text"}
                      value={element.passedYear}
                      onChange={(e) => handleEducationChange(e, index)}
                      name="passedYear"
                      placeholder="Year Passed"
                      required
                    />
                  </EmployeeRow>
                  <EmployeeRow>
                    <TableInput
                      type={"number"}
                      value={element.percentage}
                      onChange={(e) => handleEducationChange(e, index)}
                      name="percentage"
                      placeholder="Percentage Aquired"
                      required
                      max={100}
                      min={0}
                    />
                  </EmployeeRow>
                  <EmployeeRow>
                    <TableInput
                      type={"text"}
                      value={element.grade}
                      onChange={(e) => handleEducationChange(e, index)}
                      name="grade"
                      placeholder="Grade Acquired"
                      required
                    />
                  </EmployeeRow>

                  <EmployeeRow>
                    {index ? (
                      <Button
                        text={"Delete"}
                        handleClick={() => removeField(index)}
                        type={"button"}
                        styles={deleteButtonStyles}
                      />
                    ) : null}
                  </EmployeeRow>
                </tr>
              ))}
            </tbody>
          </Table>
        </EmployeeTableContainer>
        <Button text={"Submit"} type={"submit"} styles={buttonStyles} />
        <Link to={"/"}>
          <Button
            text={"Go Back To List"}
            type={"button"}
            styles={backButtonStyles}
          />
        </Link>
      </Form>
    </div>
  );
};

export default EmployeeUpdateForm;