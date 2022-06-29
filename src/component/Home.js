import React,{useState,useEffect} from 'react'
import StudentServices from '../services/StudentServices'
import Navbar from './Navbar';

export const Home = (props) => {
    const [students, setStudents] = useState([])
    
    
    
    useEffect(() => {
        StudentServices.getAllStudents().then((response)=>{
            setStudents(response.data)
            console.log(response.data)
            props.setStudentCreated(false)
        }).catch(error=>{
            console.log(error);
        })
    }, [props.studentCreated,props])
    
  return (
    <div>
        <Navbar setAuthenticated={props.setAuthenticated} role = {props.role}/>
    <div className='home'>
        <h2>Student List</h2>
        <table className='table'>
            <thead>
                <th>Student Id</th>
                <th>Student name</th>
                <th>Student address</th>
                {/* {console.log} */}
                {students[0]?.age && <th>Student age</th>}
                {students[0]?.role && <th>Student role</th>}
            </thead>
            <tbody>
                {
                    students.map(
                        student=>
                        <tr key={student.id}>
                            <td>{student.student_id}</td>
                            <td>{student.name}</td>
                            <td>{student.address}</td>
                            {student.age && <td>{student.age}</td>}
                            {student.role && <td>{student.role}</td>}

                        </tr>
                    )
                }
            </tbody>

        </table>
    </div>
    </div>
  )
}

export default Home
