import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Update() {
  const [data, setData] = useState();

  const { id } = useParams();

  const {users , loading} = useSelector((state) => state.app);

  useEffect(() => {
    if (id) {
      const [singleUser] = users.filter((item) => item.id === id);
      setData(singleUser);
    }
  }, []);

  return (
    <div className="w-25 border rounded-3 bg-light ms-auto me-auto p-3 mt-5 ">
      <h3>Edit The Data</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={data.name}
            id="name"
            //onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            value={data.email}
            name="email"
            id="email"
            //onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            value={data.age}
            name="age"
            id="age"
            //onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            checked={data.gender === "male"}
            //onChange={getUserData}
          />
          <label className="form-check-label">&nbsp;&nbsp;&nbsp;Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="female"
            checked={data.gender === "female"}
            //onChange={getUserData}
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

export default Update;
