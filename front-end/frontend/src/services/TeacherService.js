import axios  from 'axios' 
import proxy from './params'

const UNIVERSITY_URL_BASE =  proxy+'Enseignant'
 
class TeacherService {
    getTeachers(){
        return axios.get(UNIVERSITY_URL_BASE + '/getAllEnseignant')
    }
    getTeacher(id){
        return  axios.get(UNIVERSITY_URL_BASE + '/findEnseignant/'+id)
    } 
    creeateTeacher(teacher){
        return axios.post(UNIVERSITY_URL_BASE + '/enseignant',  teacher)
    }
    updateTeacher(teacher){
        return axios.put(UNIVERSITY_URL_BASE + '/UpdateEnseignant',  teacher)
    }
    deleteteacher(id){
        return axios.delete(UNIVERSITY_URL_BASE + '/deleteenseignant', id)
    }
}
export default new TeacherService()
