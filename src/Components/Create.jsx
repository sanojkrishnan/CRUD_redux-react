import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/UserDetailSlice";
import { useNavigate } from "react-router-dom";

function Create() {
  const [users, setUsers] = useState({});

  const navigate =useNavigate();

  const dispatch = useDispatch(); //useDispatch is a React Redux hook that provides a reference to the Redux store's dispatch function, allowing functional components to send actions to the store to update the state

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
    console.log(users);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users...", users);
    dispatch(createUser(users));
    navigate("/read");
  };
  return (
    <div className="w-25 border rounded-3 bg-light float-end me-5 p-3 mt-5 ">
      <h3>Fill The Data</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            name="age"
            id="age"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            onChange={getUserData}
          />
          <label className="form-check-label">&nbsp;&nbsp;&nbsp;Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="female"
            onChange={getUserData}
          />
          <label className="form-check-label">&nbsp;&nbsp;&nbsp;Female</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
