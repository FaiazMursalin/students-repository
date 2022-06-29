import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
export default function Navbar(props){
    const navigate=useNavigate();
    
        const styles =  {
            padding:20,
            fontSize:20,
            color: 'white',
            borderRadius: '8px',
            textDecoration:'none'
        
        }
        const handleLogout=(e)=>{
            localStorage.setItem("token","")
            
            props.setAuthenticated(false);
            navigate("/");
        }
        
   
    return(
        <nav className="navbar">
            <h1>Students List</h1>
            <div className="navlinks">
                <Link to ="/" style={styles}>Home</Link>
                {props.role==="ADMIN" && <Link to ="/createStudent" style={styles} >Add Students</Link>}
                <button onClick={(e)=>handleLogout(e)} > Logout</button>
            </div>

        </nav>

    )
}