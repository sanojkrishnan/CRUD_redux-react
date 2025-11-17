import React from 'react'
import "./CustomModel.css"
import { useSelector } from 'react-redux';

function CustomModel(id , popUp , setPopUp) {

    const allUsers = useSelector((state) => state.app.users)
    console.log(allUsers);
    

    const singleUser = allUsers.find((item) => item.id === id);
    console.log(singleUser);
    
  return (
    <div className='modelBackground'>
        <div className='modelContainer text-center'>
            <button>Close</button>
            <h2>{singleUser.name}</h2>
        </div>
    </div>
  )
}

export default CustomModel