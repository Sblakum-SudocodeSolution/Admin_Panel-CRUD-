import axios from "axios";
import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

export default function AddEmployee() {
  let navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = employee;

  const inputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", employee);
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add Employee</h2>
          <form onSubmit={(e) => onSubmit(e)} autoComplete="off">
            <div className="form-group">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                  name="name"
                  value={name}
                  required
                  onChange={(e) => inputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  UserName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter UserName"
                  required
                  name="username"
                  value={username}
                  onChange={(e) => inputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => inputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Which access to give to this employee
                </label>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Add Employee"
                    name="addCheck"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Update Employee"
                    name="updateCheck"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Delete Employee"
                    name="deleteCheck"
                  />
                </FormGroup>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
