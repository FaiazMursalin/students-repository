import React from 'react'
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import StudentServices from "../services/StudentServices";

export default function Login(props){
    const [username,setName] = useState('');
    const [password,setPass] = useState('');
    // const navigate=useNavigate();
   
    const handleLogin=(e)=>{
        e.preventDefault();
        console.log("i am in ")
        const user={username,password}
        console.log(user);
        StudentServices.authenticateStudent(user).then((response)=>{
            props.setRole(response.data.role)
            // console.log(response.data.role)
            localStorage.setItem("token","Bearer "+response.data.jwttoken)
            // console.log(localStorage.getItem("token"))
            // navigate("/home");
            props.setAuthenticated(true);
            // console.log("dhukse")
            
            

        }).catch(error=>{
            // console.log(error)
        })

    }
    return(
        <div className="create-update">
        <h2>Login</h2>
        <form>

            <label>Name</label>
            <input type="text" placeholder="Enter Name"
            name="username" value={username} onChange={(e)=>setName(e.target.value)}
            />

            <label>Password</label>
            <input type="text" placeholder="Enter Password"
            name="password" value={password} onChange={(e)=>setPass(e.target.value)}
            />
            
            <button onClick={(e)=>handleLogin(e)}>Login</button>

        </form>
        </div>
    )

}



