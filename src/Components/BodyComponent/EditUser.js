import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [employee, setEmployee] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = employee;

  const inputChange = (e) => {
    console.log(e.target.value);
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, employee);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setEmployee(result.data);
  };

  return (
    <>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit Employee</h2>
          <form onSubmit={(e) => onSubmit(e)}>
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
                  name="email"
                  value={email}
                  onChange={(e) => inputChange(e)}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Edit User
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
