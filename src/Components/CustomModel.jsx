import React from "react";
import "./CustomModel.css";
import { useSelector } from "react-redux";

function CustomModel(props) {
  const { id, setPopUp } = props;
  const allUsers = useSelector((state) => state.app.users);
  console.log("all users", allUsers);
  console.log("id ", id);

  const [singleUser] = allUsers.filter((item) => item.id === id);
  console.log(singleUser);

  return (
    <div className="modelBackground">
      <div className="modelContainer text-center">
        <button className="btn" onClick={() => setPopUp(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-x-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
          </svg>
        </button>
        <h2 className="px-5">{singleUser.name}</h2>
        <hr /> <br />
        <h5>{singleUser.email}</h5>
        <p>Gender: {singleUser.gender}</p>
        <br />
        <p>Age: {singleUser.age}</p>
      </div>
    </div>
  );
}

export default CustomModel;
