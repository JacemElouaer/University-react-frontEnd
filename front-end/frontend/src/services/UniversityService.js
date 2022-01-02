import axios  from 'axios' 
import proxy from './params'

const UNIVERSITY_URL_BASE =  proxy+'universitie'
 
class UniversityService {
    getUniversities(){
        return axios.get(UNIVERSITY_URL_BASE + '/getAllUniversite')
    }
}
export default new UniversityService()
