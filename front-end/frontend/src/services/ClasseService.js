import axios  from 'axios' 
import proxy from './params'

const Classe_URL_BASE =  proxy+'Cours'
 
class ClasseService {
    getClasses(){
        return axios.get(Classe_URL_BASE + '/getAllCours')
    }
    getClasse(id){
        return  axios.get(Classe_URL_BASE + '/findCours/'+id)
    }
    deleteClasse(id){
        return  axios.delete(Classe_URL_BASE + '/deletecours/'+id)
    }
}
export default new ClasseService()
