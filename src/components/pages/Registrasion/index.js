import React, { useState, useEffect } from "react";

const Registrasion = () => {
    const [titlePage, setTitlePage] = useState("Form Register");
    const [firstName, setFirsName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailaddress, setEmailAddress] =  useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRePassword] = useState("");

    useEffect(()=>{
        setTimeout(()=>{
            setTitlePage("Create Account");
        }, 3000);
    },[]);

    const handleSubmit = () => {
         const data =  {
             firstName: firstName,
             lastName: lastName,
             emailaddress: emailaddress,
             password: password,
             repassword: repassword,
         };
         console.log(data);
    }    
    return (
    <div className="container">
        <h1 className="row justify-content-center">{titlePage}</h1>
        <label className="form-label">First Name </label>
        <input
            className="form-control rounded-pill"
             placeholder="Enter First Name" 
             value={firstName} 
             onChange={(event) => setFirsName(event.target.value)} 
        />
        <label className="form-label">Last Name </label>
        <input
            className="form-control rounded-pill"
             placeholder="Enter Last Name" 
             value={lastName} 
             onChange={(event) => setLastName(event.target.value)} 
        />
        <label className="form-label">Email Address </label>
        <input
            className="form-control rounded-pill"
             placeholder="Enter Email Address" 
             value={emailaddress} 
             onChange={(event) => setEmailAddress(event.target.value)}  
    
        />
        <label className="form-label">Password </label>
        <input 
            className="form-control rounded-pill"
             placeholder="Enter Password" 
             value={password}
             type="password"
             onChange={(event) => setPassword(event.target.value)}  
        />
         <label className="form-label">Resume Password </label>
        <input
            className="form-control rounded-pill"
             placeholder="Enter Re-Password" 
             type="password" 
             onChange={(event) => setRePassword(event.target.value)} 
        />
         <br />
         <br />   
        <button className="btn btn-primary rounded-pill " onClick={handleSubmit}> Register </button>
            <p className="form-footer mt-2"> You already have an account? 
            <a className="form-footer mt-2" onClick={handleSubmit}> Login </a></p>
    </div>
    );
}
export default Registrasion;