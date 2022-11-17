import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BlogPost() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUser(result.data);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUser();
  };

  return (
    <>
      <Card sx={{ minWidth: 250, maxWidth: 100 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            <h3>Total Employee</h3>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <h1>{user.length}</h1>
          </Typography>
        </CardContent>
      </Card>
      <Box mt={5}>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                {/* <th scope="col">Access</th> */}
              </tr>
            </thead>
            <tbody>
              {user.map((data, id) => {
                return (
                  <tr key={id}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>
                      <Link to={`/edit/${data.id}`}>
                        <button type="button" className="btn btn-primary">
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteEmployee(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Box>
    </>
  );
}
