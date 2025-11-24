import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/UserDetailSlice";
import { Formik, Form, Field } from "formik";
import CreateValidationSchema from "../schema/CreateValidation"; // using same validation schema

function Update() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.app);

  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    if (id && users.length > 0) {
      const [singleUser] = users.filter((item) => item.id === id);
      setInitialValues(singleUser);
    }
  }, [id, users]);

  const handleUpdate = (values) => {
    dispatch(updateUser(values));
    navigate("/read");
  };

  if (!initialValues) return <p>Loading...</p>;

  return (
    <div className="w-25 border rounded-3 bg-light ms-auto me-auto p-3 mt-5">
      <h3>Edit The Data</h3>

      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={CreateValidationSchema}
        onSubmit={handleUpdate}
      >
        {({ errors }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <Field
                type="text"
                className="form-control"
                name="name"
                id="name"
              />
              {errors.name && <small className="text-danger">{errors.name}</small>}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <Field
                type="email"
                className="form-control"
                name="email"
                id="email"
              />
              {errors.email && <small className="text-danger">{errors.email}</small>}
            </div>

            <div className="mb-3">
              <label htmlFor="age" className="form-label">Age</label>
              <Field
                type="number"
                className="form-control"
                name="age"
                id="age"
              />
              {errors.age && <small className="text-danger">{errors.age}</small>}
            </div>

            <div className="mb-3">
              <Field
                className="form-check-input"
                type="radio"
                name="gender"
                value="male"
                id="male"
              />
              <label htmlFor="male" className="form-check-label">&nbsp;&nbsp;&nbsp;Male</label>
            </div>

            <div className="mb-3">
              <Field
                className="form-check-input"
                type="radio"
                name="gender"
                value="female"
                id="female"
              />
              <label htmlFor="female" className="form-check-label">&nbsp;&nbsp;&nbsp;Female</label>
            </div>
            {errors.gender && <small className="text-danger">{errors.gender}</small>}

            <button type="submit" className="">Submit</button>
            <Link to={"/read"} className="mx-5">Back</Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Update;
