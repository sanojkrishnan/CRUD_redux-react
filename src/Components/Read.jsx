import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/UserDetailSlice";
import CustomModel from "./CustomModel";
import { Link } from "react-router-dom";
import Loading from "../loadingPage/Loading";
import { Formik, Form, Field } from "formik";

function Read() {
  const [id, setId] = useState();

  const [popUp, setPopUp] = useState(false);

  const [genderFilter, setGenderFilter] = useState("all");

  const dispatch = useDispatch();

  const { users, loading, searchData } = useSelector((state) => state.app);

  console.log(users);

  useEffect(() => {
    dispatch(showUser()); // <-- CALL the action creator
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  const initialValues = {
    gender: "all"
  };

  const handleGenderChange = (e) => {
    setGenderFilter(e.target.value);
  };

  return (
    <>
      {popUp && <CustomModel id={id} popUp={popUp} setPopUp={setPopUp} />}
      <h4 className="mt-2 ms-4"> All Data</h4>
      <div className="row">
        <div className="d-flex justify-content-end">
          <div className="pe-5 pt-3">
            <Formik
              initialValues={initialValues}
              onSubmit={() => {}}
              enableReinitialize
            >
              {({ setFieldValue }) => (
                <Form>
                  <div className="mb-3">
                    <Field
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="all"
                      id="all"
                      checked={genderFilter === "all"}
                      onChange={(e) => {
                        setFieldValue("gender", e.target.value);
                        handleGenderChange(e);
                      }}
                    />
                    <label className="form-check-label" htmlFor="all">&nbsp;&nbsp;&nbsp;All</label>
                  </div>
                  <div className="mb-3">
                    <Field
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="male"
                      id="male"
                      checked={genderFilter === "male"}
                      onChange={(e) => {
                        setFieldValue("gender", e.target.value);
                        handleGenderChange(e);
                      }}
                    />
                    <label className="form-check-label" htmlFor="male">&nbsp;&nbsp;&nbsp;Male</label>
                  </div>
                  <div className="mb-3">
                    <Field
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="female"
                      id="female"
                      checked={genderFilter === "female"}
                      onChange={(e) => {
                        setFieldValue("gender", e.target.value);
                        handleGenderChange(e);
                      }}
                    />
                    <label className="form-check-label" htmlFor="female">&nbsp;&nbsp;&nbsp;Female</label>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        {users &&
          users
            .filter((item) => {
              if (searchData.length === 0) {
                return item;
              } else {
                return item.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            })
            .filter((item) => {
              if (genderFilter === "male") {
                return item.gender === "male";
              } else if (genderFilter === "female") {
                return item.gender === "female";
              } else {
                return true;
              }
            })
            .map((element) => (
              <div className=" card mt-5 ms-4" style={{ width: "300px" }} key={element.id}>
                <div className="card-body">
                  <h5 className="card-title">{element.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {element.email}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {element.gender}
                  </h6>
                  <button
                    href="#"
                    className="card-link"
                    onClick={() => [setId(element.id), setPopUp(true)]}
                  >
                    View
                  </button>
                  <Link to={`/edit/${element.id}`} className="card-link">
                    Edit
                  </Link>
                  <Link
                    onClick={() => dispatch(deleteUser(element.id))}
                    className="card-link"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </>
  );
}

export default Read;
