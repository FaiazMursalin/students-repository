import axios from "axios";

const STUDENT_BASE_REST_API_URL='http://localhost:8080/api/v1/students';
const authenticate_url = 'http://localhost:8080/authenticate';

class StudentService{
    
    getAllStudents(){

        return axios.get(STUDENT_BASE_REST_API_URL,{
            headers:{
                'Authorization': localStorage.getItem("token")
            }
        });

    }
    createStudent(student){
        return axios.post(STUDENT_BASE_REST_API_URL,student,{
            headers:{
                'Authorization': localStorage.getItem("token")
            }
        });
    }
    authenticateStudent(user){
        return axios.post(authenticate_url,user);
    }
}
export default new StudentService();