import { useState } from "react"
import {useNavigate} from "react-router-dom"
import StudentServices from "../services/StudentServices";
import Navbar from './Navbar';

export default function CreateStudents(props){
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [student_id,setStudent_id] = useState('');
    const [age,setAge] = useState('');
    const [role,setRole] = useState('');
    const [pass,setPass] = useState('');
    const navigate=useNavigate();
    const saveStudent=(e)=>{
        // e.preventDefault();
        const student={name,address,student_id,age,role,pass}
        // console.log(student);
        StudentServices.createStudent(student).then((response)=>{
            // console.log(response.data)
            props.setStudentCreated(true)

        }).catch(error=>{
            console.log(error)
        })
        navigate("/");

    }
    return(
        <div>
        <Navbar setAuthenticated={props.setAuthenticated}/>
        <div className="create-update">
        <h2>Create a new Students</h2>
        <form>
            <label>Students Name</label>
            <input type="text" placeholder="Enter Students Name"
            name="name" value={name} onChange={(e)=>setName(e.target.value)}
            />

            <label>Students ID: </label>
            <input type="number" placeholder="Enter Students ID"
            name="student_id" value={student_id} onChange={(e)=>setStudent_id(e.target.value)}
            />

            <label>Students Address</label>
            <textarea rows="5" type="text" placeholder="Enter Students Address"
            name="address" value={address} onChange={(e)=>setAddress(e.target.value)}
            />

            <label>Students Age</label>
            <input type="number" placeholder="Students Age"
            name="age" value={age} onChange={(e)=>setAge(e.target.value)}
            />

            <label>Students Role</label>
            <input type="text" placeholder="Students Role"
            name="role" value={role} onChange={(e)=>setRole(e.target.value)}
            />

            <label>Students Password</label>
            <input type="text" placeholder="Students Password"
            name="pass" value={pass} onChange={(e)=>setPass(e.target.value)}
            />

            <button onClick={(e)=>saveStudent(e)}>Add</button>

            
            
        </form>
        </div>
        </div>
    )
}