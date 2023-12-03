import React from "react";
import { Link,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import "./Home.css";
import axios from "axios";
import { deleteEmployee } from "../../../Controller";


function Home() {
  const {id}=useParams()

const [Emp,setEmp]=useState([]);

const getEmployee=async()=>{
  const res=await axios.get("http://localhost:3004/EmployeesDetails/viewEmployee")
  setEmp(res.data)

}

const deleteEmployee = async (id) => {
  const isConfirmed = window.confirm("Are you sure you want to delete this employee?");
  if (isConfirmed) {
      try {
        const res = await axios.delete(`http://localhost:3004/EmployeesDetails/deleteEmployee/${id}`);
      } catch (error) {
        console.log(error);
      }
  getEmployee() 
}}; 

useEffect(()=>{
  getEmployee() 
} ,[])



  return (
    <div className="body">
      <div className="container">
          {
            Emp.map((data,index)=>(
              <div className="card" key={index}>
          <div className="profileImage">
            <img src={data.Photo} alt="" />
          </div>
          <div className="textContainer">
            <p className="name">{data.Name}</p>
            <div className="others">
            <Link className="profile" to={'/Register'}>Profile</Link>
              <button className="btn" onClick={()=>{deleteEmployee(data._id)}}>Delete</button>
            </div>
          </div>
        </div>
            ))
            }
      </div>
    </div>
  );
}

export default Home;
