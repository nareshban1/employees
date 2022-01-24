import React, { useContext, useEffect, useState } from "react";
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
  Form,
  InputWrapper,
} from "../EmployeeRegistrationForm/EmployeeRegistrationForm.css";
import { Link } from "react-router-dom";
import FormInput from "../FormInput/FormInput";
import { employeeDataContext } from "../../Utilities/EmployeeProvider";
const EmployeeUpdateForm = ({ employeeDetails, objectIndex }) => {
  const { employeeData, setEmployeeData } = useContext(employeeDataContext);

  const [employee, setEmployee] = useState({
    id: employeeDetails.id,
    name: employeeDetails.name,
    address: employeeDetails.address,
    phoneNo: employeeDetails.phoneNo,
    gender: employeeDetails.gender,
    dob: employeeDetails.dob,
    email: employeeDetails.email,
  });

  const [education, setEducation] = useState(employeeDetails.education);

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
            Name *{" "}
            <InputWrapper>
              <FormInput
                type={"text"}
                value={employee.name}
                onChange={handleChange}
                name="name"
                placeholder="Full Name"
                required
                pattern="^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$"
                errorMessage="Name shouldn't include any special character or numbers"
              />
            </InputWrapper>
          </Label>

          <Label>
            Address *{" "}
            <InputWrapper>
              <FormInput
                type={"text"}
                value={employee.address}
                onChange={handleChange}
                name="address"
                placeholder="Current Address"
                required
                errorMessage={"Please input employee address"}
              />
            </InputWrapper>
          </Label>

          <Label>
            Date of Birth *{" "}
            <InputWrapper>
              <FormInput
                type={"date"}
                value={employee.dob}
                onChange={handleChange}
                name="dob"
                max={today}
                required
                errorMessage={
                  employee.dob > today
                    ? "Date of birth cannot be later than today"
                    : "Please input date of birth"
                }
              />
            </InputWrapper>
          </Label>

          <GenderGroup>
            Gender *
            <GenderInputGroup>
              <GenderLabel>
                <FormInput
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
                <FormInput
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
                <FormInput
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
            Email *{" "}
            <InputWrapper>
              <FormInput
                type={"email"}
                value={employee.email}
                onChange={handleChange}
                name="email"
                placeholder="Email"
                required
                errorMessage="Please enter a valid email address"
              />
            </InputWrapper>
          </Label>
          <Label>
            Phone Number *{" "}
            <InputWrapper>
              <FormInput
                type={"text"}
                value={employee.phoneNo}
                onChange={handleChange}
                name="phoneNo"
                placeholder="Phone Number"
                required
                pattern="(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?"
                errorMessage="Please enter a valid phone number"
              />
            </InputWrapper>
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
                    <FormInput
                      type={"text"}
                      value={element.board}
                      onChange={(e) => handleEducationChange(e, index)}
                      name="board"
                      placeholder="Board"
                      required
                      errorMessage={"Please enter a board name"}
                    />
                  </EmployeeRow>
                  <EmployeeRow>
                    <FormInput
                      type={"text"}
                      value={element.institution}
                      onChange={(e) => handleEducationChange(e, index)}
                      name="institution"
                      placeholder="Inititution Name"
                      required
                      errorMessage={"Please enter a institution name"}
                    />
                  </EmployeeRow>
                  <EmployeeRow>
                    <FormInput
                      type={"text"}
                      value={element.passedYear}
                      onChange={(e) => handleEducationChange(e, index)}
                      name="passedYear"
                      placeholder="Year Passed"
                      required
                      errorMessage={"Please enter a Passed Year"}
                    />
                  </EmployeeRow>
                  <EmployeeRow>
                    <FormInput
                      type={"number"}
                      value={element.percentage}
                      onChange={(e) => handleEducationChange(e, index)}
                      name="percentage"
                      placeholder="Percentage Aquired"
                      required
                      max={100}
                      min={0}
                      errorMessage="Percentage should not be lower than 0 or greater than 100"
                    />
                  </EmployeeRow>
                  <EmployeeRow>
                    <FormInput
                      type={"text"}
                      value={element.grade}
                      onChange={(e) => handleEducationChange(e, index)}
                      name="grade"
                      placeholder="Grade Acquired"
                      required
                      errorMessage="Please enter the grade acquired"
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
