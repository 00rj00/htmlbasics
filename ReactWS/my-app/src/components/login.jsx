import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form class="w-25 mx-auto border border-info border-2  p-3">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </div>
        <small>
          Don't have account? click <NavLink to="/register">here</NavLink> to
          Register
        </small>
      </form>
    </div>
  );
};

export default Login;
