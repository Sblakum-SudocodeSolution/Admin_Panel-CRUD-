import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    handleClose();
  };

  return (
    <>
      <div>
        <Button onClick={handleOpen}>+ Add Employee</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h2 className="text-center mb-4">Add Employee</h2>
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

                <button type="submit" className="btn btn-primary btn-block">
                  Add User
                </button>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
    </>
  );
}
