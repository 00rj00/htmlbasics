import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Grid,
  Typography,
  Button,
  Box,
  TextField,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  Alert,
} from "@mui/material";
import Joi from "joi-browser";
import axios from "axios";
const ariaLabel = { "aria-label": "description" };

const Login = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [errMsg, setErrMsg] = useState("");

  // Step1 : Define schema object
  const schema = {
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().min(3).required(),
    role: Joi.string().required(),
  };

  const validate = () => {
    const errors = {};
    const result = Joi.validate(user, schema, { abortEarly: false });
    console.log(result);
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  // Capture user input and update state object
  const handleChange = (event) => {
    console.log("HandleChange");
    const usr = { ...user };
    usr[event.target.name] = event.target.value;
    //this.setState({ user: user });
    setUser(usr);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handle submit");

    //const errors = validate();
    //console.log(errors);
    setErrors(validate());
    console.log(errors);
    if (errors) return;
    axios
      .post("http://localhost:8080/api/userManagement/loginUser", user)
      .then((res) => props.history.push("/home"))
      .catch((err) => {
        console.log(err.response.data.message);
        setErrMsg(err.response.data.message);
      });
  };
  return (
    <div>
      <Typography variant="h3">Login Page</Typography>
      <Grid container>
        <Grid item xs={4} style={{ marginLeft: "auto", marginRight: "auto" }}>
          {errMsg && <Alert severity="error">{errMsg}</Alert>}
          <form
            onSubmit={handleSubmit}
            noValidate
            style={{
              border: "2px solid aquamarine",
              padding: "20px",
              marginTop: "10px",
            }}
          >
            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                type="email"
                variant="outlined"
                fullWidth
                label="Email"
                value={user.email}
                name="email"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">{errors.email}</Typography>
              )}
            </Box>

            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                type="password"
                fullWidth
                variant="outlined"
                label="Password"
                value={user.password}
                name="password"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">{errors.password}</Typography>
              )}
            </Box>

            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">
                Role
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={handleChange}
                name="role"
                value={user.role}
                label="Role"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="customer">Customer</MenuItem>
                <MenuItem value="student">Student</MenuItem>
              </Select>
            </FormControl>
            {errors && <Typography variant="caption">{errors.role}</Typography>}
            <Box mt={3}>
              <Button variant="contained" type="submit" fullWidth>
                Login
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
