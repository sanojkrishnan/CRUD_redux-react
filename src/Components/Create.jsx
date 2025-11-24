import React from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/UserDetailSlice";
import { useNavigate } from "react-router-dom";
import { Field, Formik, Form } from "formik";
import CreateValidationSchema from "../schema/CreateValidation";

const initialValues = {
  name: "",
  email: "",
  age: "",
  gender: "",
};

function Create() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("users...", values);
    dispatch(createUser(values));
    navigate("/read");
  };

  return (
    <div className="w-25 border rounded-3 bg-light float-end me-5 p-3 mt-5 ">
      <h3>Fill The Data</h3>

      <Formik
        initialValues={initialValues}
        validationSchema={CreateValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <Field
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter your name"
              />
              {errors.name && <small className="text-danger" >{errors.name}</small>}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <Field
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter your email"
              />
              {errors.email && <small className="text-danger" >{errors.email}</small>}
            </div>

            <div className="mb-3">
              <label htmlFor="age" className="form-label">Age</label>
              <Field
                type="number"
                className="form-control"
                name="age"
                placeholder="Enter your age"
              />
              {errors.age && <small className="text-danger" >{errors.age}</small>}
            </div>

            <div className="mb-3">
              <Field className="form-check-input" type="radio" name="gender" value="male" id="male" />
              <label htmlFor="male" className="form-check-label">&nbsp;&nbsp;&nbsp;Male</label>
            </div>

            <div className="mb-3">
              <Field className="form-check-input" type="radio" name="gender" value="female" id="female" />
              <label htmlFor="female" className="form-check-label">&nbsp;&nbsp;&nbsp;Female</label>
            </div>

            {errors.gender && <small className="text-danger" >{errors.gender}</small>}
            <br /><br />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Create;
