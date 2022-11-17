import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import List from "./List";
import "./app.css";


const sendData = async (data) => {
  const response = await axios.post(`http://localhost:9191/addUser`, data);
  return response.data;
};

const DataUser = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    sendData(data)
  };

  return (
    <div className="App">
      <h1>Enter your data</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="card">First Name 
          <input 
          {...register("firstName", { required:"First name is required", maxLength: 25 })} 
          aria-invalid={errors.firstName ? "true" : "false"} />
        </label>
      
        <label className="card">Last Name 
          <input {...register("lastName", { required:"Last name is required", maxLength: 25 })} 
          aria-invalid={errors.lastName ? "true" : "false"} />
        </label>

        <label className="card">Phone Number 
          <input {...register("phoneNumber", { required:"Phone number is required", maxLength: 20 })} 
        aria-invalid={errors.phoneNumber ? "true" : "false"} />
        </label>

        <label className="card">Email 
          <input 
          {...register("email", { required: "Email Address is required" })} 
          aria-invalid={errors.email ? "true" : "false"} />
      </label>
      
      {errors.firstName && <p role="alert" className="required">{errors.firstName?.message}</p>}
      {errors.lastName && <p role="alert" className="required">{errors.lastName?.message}</p>}
      {errors.phoneNumber && <p role="alert" className="required">{errors.phoneNumber?.message}</p>}
      {errors.email && <p role="alert" className="required">{errors.mail?.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default DataUser;
