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
      <div>
         <h1>Registration Form</h1>
    <p>Please fill out this form with the required information</p>
    <form onSubmit={AddData} >
      <fieldset>
        <label>Empid: <input type="text"onChange={getData}  name="Empid" required /></label>
        <label>Name: <input type="text"onChange={getData}  name="Name" required /></label>
        <label>Email: <input type="email" onChange={getData}  name="Email" required /></label>
        <label>Phone: <input type="text" onChange={getData}  name="Phone" required /></label>
        <label>Address:<textarea name="Address" onChange={getData}  rows="5" cols="30"></textarea></label>
        <label>Salary: <input type="number" onChange={getData}  name="Salary" required /></label>
        <label>Designation: <input type="text" onChange={getData}  name="Designation" required /></label>
        <label>Experience: <input type="text" onChange={getData}  name="Experience" required /></label>
        <label>Upload a profile picture: <input type="file"  onChange={photoUpload} /></label>
      <input type="submit" value="Submit"/>
      </fieldset>
    </form>
      </div>
    </div>
  )
}

export default Register
