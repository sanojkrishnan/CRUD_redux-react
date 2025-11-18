import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/UserDetailSlice";

function Update() {
  const [data, setData] = useState();

  const { id } = useParams();

  const dispatch = useDispatch();

  const {users , loading} = useSelector((state) => state.app);

  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      const [singleUser] = users.filter((item) => item.id === id);
      setData(singleUser);
    }
  }, []);

  const newData = (e) => {
    setData({...data, [e.target.name] : e.target.value})
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(data))
    navigate("/read");
  };

  return (
    <div className="w-25 border rounded-3 bg-light ms-auto me-auto p-3 mt-5 ">
      <h3>Edit The Data</h3>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={data && data.name}
            id="name"
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            value={data && data.email}
            name="email"
            id="email"
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            value={data && data.age}
            name="age"
            id="age"
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            checked={data && data.gender === "male"}
            onChange={newData}
          />
          <label className="form-check-label">&nbsp;&nbsp;&nbsp;Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="female"
            checked={data && data.gender === "female"}
            onChange={newData}
          />
          <label className="form-check-label">&nbsp;&nbsp;&nbsp;Female</label>
        </div>
        <button type="submit" className="">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Update;
