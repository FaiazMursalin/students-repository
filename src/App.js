// import Navbar from './component/Navbar';
import Home from './component/Home';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import CreateStudents from './component/CreateStudents';
import Login from './component/Login';
import {useState} from 'react'

function App() {
  const [authenticated,setAuthenticated]=useState()
  const [studentCreated, setStudentCreated] = useState(false)
  const [role, setRole] = useState()
  return (
    <div>
      {/* <Navbar/> */}
      <div>
        <Routes>
          {/* {console.log(authenticated)} */}
          {!authenticated && <Route path="/" element={<Login setAuthenticated={setAuthenticated} setRole={setRole}/>}/>}

          {authenticated && <Route path="/" element={<Home setAuthenticated={setAuthenticated} studentCreated={studentCreated} setStudentCreated={setStudentCreated} role = {role}/>}/>}

          {authenticated && <Route path="/createStudent" element={<CreateStudents setAuthenticated={setAuthenticated} setStudentCreated={setStudentCreated}/>}/>}

          {/* <Route path="/home" element={<Home/>}/> */}

          {/* <Route path="/createStudent" element={<CreateStudents/>}/> */}
        </Routes>

      </div>
    </div>
  );
}

export default App;
