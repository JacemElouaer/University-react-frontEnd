import axios  from 'axios' 
import proxy from './params'

const Student_URL_BASE =  proxy+'Etudiant'
 
class StudentService {
    getStudents(){
        return axios.get(Student_URL_BASE + '/getAllEtudiant')
    }
    createStudent(Student){
        return  axios.post(Student_URL_BASE + '/etudiant' ,  Student)
    }
    getStudent(id){
        return  axios.get(Student_URL_BASE + '/findEtudiant/'+id)
    }
    deleteStudent(id){
        return  axios.delete(Student_URL_BASE + '/deleteetudiant/'+id)
    }
    updateStudent(Student){
        return axios.put(Student_URL_BASE + '/UpdateEtudiant', Student)
    }
}
export default new StudentService()
