import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/UserDetailSlice";
import CustomModel from "./CustomModel";
import { Link } from "react-router-dom";

function Read() {
  const [id, setId] = useState();

  const [popUp, setPopUp] = useState(false);

  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.app);

  console.log(users);

  useEffect(() => {
    dispatch(showUser()); // <-- CALL the action creator
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {popUp && <CustomModel id={id} popUp={popUp} setPopUp={setPopUp} />}
      <h4 className="mt-2 ms-4"> All Data</h4>
      <div className="row">
        {users &&
          users.map((element) => (
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
                <Link onClick={() => dispatch(deleteUser(element.id))} className="card-link">
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
