import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/UserDetailSlice";
import CustomModel from "./CustomModel";
import { Link } from "react-router-dom";
import Loading from "../loadingPage/Loading";

function Read() {
  const [id, setId] = useState();

  const [popUp, setPopUp] = useState(false);

  const [radio , setRadio] = useState("");

  const dispatch = useDispatch();

  const { users, loading, searchData } = useSelector((state) => state.app);

  console.log(users);

  useEffect(() => {
    dispatch(showUser()); // <-- CALL the action creator
  }, []);

  if (loading) {
    return <Loading/>;
  }

  return (
    <>
      {popUp && <CustomModel id={id} popUp={popUp} setPopUp={setPopUp} />}
      <h4 className="mt-2 ms-4"> All Data</h4>
      <div className="row">
        <div className="d-flex justify-content-end">
          <div className="pe-5 pt-3">
            <div className="mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value={"all"}
                checked={radio === "" || radio == "all"}
                onChange={(e) => setRadio(e.target.value)}
              />
              <label className="form-check-label">&nbsp;&nbsp;&nbsp;All</label>
            </div>
            <div className="mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="male"
                checked={radio === "male"}
                onChange={(e) => setRadio(e.target.value)}
              />
              <label className="form-check-label">&nbsp;&nbsp;&nbsp;Male</label>
            </div>
            <div className="mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="female"
                checked={radio === "female"}
                onChange={(e) => setRadio(e.target.value)}
              />
              <label className="form-check-label">
                &nbsp;&nbsp;&nbsp;Female
              </label>
            </div>
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
              if(radio === "male") {
                return item.gender === radio;
              }else if(radio === "female") {
                return item.gender === radio;
              }else if(radio === "all"){
                return item ;
              }else{
                return item ;
              }
            })
            .map((element) => (
              <div className=" card mt-5 ms-4" style={{ width: "300px" }}>
                <div className="card-body" key={element.id}>
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
