import React from 'react'
import { useState } from 'react'
import "./Register.css"
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
function Register() {
  const navigate=useNavigate()
  let Photo=""
    const [Val,setVal]=useState({
      Empid:"",
      Name:"",
      Email:"",
      Phone:"",
      Address:"",
      Salary:"",
      Designation:"",
      Experience:""})

      /////data/////
    const getData=(e)=>{
      setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    }

    /////profile photo/////
    const photoUpload=async(e)=>{
      Photo=await convertToBase64(e.target.files[0]);
    }

    /////convert/////
    function convertToBase64(file) {
      return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
    
          fileReader.onload = () => {
              resolve(fileReader.result)
          }
          fileReader.onerror = (error) => {
              reject(error)
          }
        })
    }


    /////add data to db/////
    const AddData=async(e)=>{
      e.preventDefault();
  const res= await axios.post("http://localhost:3004/EmployeesDetails/addEmployee",{...Val,Photo:Photo})

    
      if(res.status==201)
      {
        alert("Data Added")
        navigate("/")
      }
      else
      {
        alert("data not added")
      }
      
    }
  


  return (
      <div>
      <div className="formbold-main-wrapper">
  <div className="formbold-form-wrapper">
 
    <form action="" onSubmit={AddData}>
      <div className="formbold-input-wrapp formbold-mb-3">
        <label  className="formbold-form-label"> Name </label>

        <div>
          <input
            type="text"
            name="Name"
            id="firstname"
            placeholder="Name"
            className="formbold-form-input"
            required
            onChange={getData}
          />
        </div>
      </div>

      <div className="formbold-input-wrapp formbold-mb-3">
        <label  className="formbold-form-label"> Empid </label>

        <div>
          <input
            type="number"
            name="Empid"
            id="Empid"
            placeholder="Empid"
            className="formbold-form-input"
            required
            onChange={getData}
          />
        </div>
      </div>

      <div className="formbold-mb-3">
        <label className="formbold-form-label"> Contact Details </label>

        <div>
        <input
          type="email"
          name="Email"
          id="Email"
          placeholder="example@email.com"
          className="formbold-form-input"
          required
          onChange={getData}
        />

          <input
            type="number"
            name="Phone"
            id="Phone"
            placeholder="Phone number"
            className="formbold-form-input"
            required
            onChange={getData}
          />
        </div>
      </div>

      <div className="formbold-mb-3">
        <label className="formbold-form-label"> Designation </label>

        <input
          type="text"
          name="Designation"
          id="Designation"
          placeholder="Designation"
          className="formbold-form-input formbold-mb-3"
          required
          onChange={getData}
        />
      </div>

      <div className="formbold-mb-3">
        <label className="formbold-form-label"> Address </label>

        <input
          type="text"
          name="Address"
          id="Address"
          placeholder="Address"
          className="formbold-form-input formbold-mb-3"
          required
          onChange={getData}
        />
      </div>

      <div className="formbold-mb-3 formbold-input-wrapp">
        <label className="formbold-form-label"> Salary & Experience </label>

        <div>
          <input
            type="number"
            name="Salary"
            id="Salary"
            placeholder="Salary"
            className="formbold-form-input"
            required
            onChange={getData}
          />

          <input
            type="number"
            name="Experience"
            id="Experience"
            placeholder="Experience"
            className="formbold-form-input"
            required
            onChange={getData}
          />

        </div>
      </div>

      <div className="formbold-mb-3">
        <label className="formbold-form-label">
          Upload Your Photo
        </label>
        <input
          type="file"
          name="upload"
          id="upload"
          className="formbold-form-input formbold-form-file"
          required
          onChange={photoUpload}
        />
      </div>
      <button className="formbold-btn">Submit</button>
    </form>
  </div>
</div>
    </div>
  )
}

export default Register
