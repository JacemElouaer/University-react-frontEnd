import React  , {useState ,  useEffect} from 'react'
import Universitie from './Universitie'  
import  UniversityService from '../../services/UniversityService'
function  ListUniversitie(){
  

  const  [universities ,  setUniversities] =  useState(null); 
  useEffect(()=>
  UniversityService.getUniversities().then(res=>{ 
        setUniversities(res.data)
      })
  )
  //console.log(universities)
if (!universities) return null
    return (
       
        <div className="album py-5 bg-light">
        <div className="container">
    
          <div class="row">
        
        {universities.map(university=>
          <Universitie university={university}></Universitie>)}
          </div>
        </div>
      </div>
        )
    

    }
export default ListUniversitie
