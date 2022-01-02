import React, {  useState ,  useEffect} from 'react'
import {useParams , useNavigate } from  'react-router-dom'
import TeacherService from '../../services/TeacherService'



const UpdateTeacher =()=>{ 
    let navigate = useNavigate();
    const [matricule , setMatricule] = useState(null);
    const [firstname , setfirstname] = useState(null);
    const [lastname , setlastname] = useState(null);
    const [Adress ,setAdress] = useState(null);  
    const [diploma ,setdiploma] = useState(null);  


    let {id}  =  useParams() 
    let [Teacher ,  setTeacher] =  useState(null) 
    useEffect(()=>
    TeacherService.getTeacher(id).then(res=>{
            setTeacher(res.data)
            
        }),[])
    
 
 /*matricule;
 nomENS;
prenomENS;
 adresseENS;
 diplome;
 ListEtudiant
 cours
 */   
            
    

 
     
   function onChangeAddress(event){
    setAdress(event.target.value)
   } 
   function onChangelastname(event){ 
    setlastname(event.target.value)
   }
   function onChangefirstName(event){
    setfirstname(event.target.value)
   }

   function onChangeMatricule(event){
    setMatricule(event.target.value)
   }

   function onChangediploma(event){
    setdiploma(event.target.value)
   }

const updateTeacher=(event)=>{
    event.preventDefault();
    let  Teacher =  {
        "matricule": id,
        'nomENS':  lastname ,
        'prenomENS':  firstname, 
        'adresseENS':  Adress, 
        'diplome' : diploma, 
    } 
    console.log("teacher =>" + JSON.stringify(Teacher))
    TeacherService.updateTeacher(Teacher).then((res)=>{
        navigate('/teachers')
    })}

  
    
  
   
     
        return (
            <div className="container col-lg-5 card p-4">
               {Teacher?<h5>Modify Teacher number {id}</h5> : 
                <h5>Waiting for data !!</h5>
               }
                
                   <form>
                   <div className="form-row">
                            <div className="form-group col-md-6 ">
                                <label for="inputEmail4"  >Matricule</label>
                                <input type="email" value={matricule} onChange={onChangeMatricule} className="form-control" id="inputEmail4"/>
                            </div>
                        </div>
                            <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputEmail4" >First Name</label>
                                <input type="text" value={firstname} onChange={onChangefirstName} className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4">Last Name</label>
                                <input type="text"  value={lastname} onChange={onChangelastname} className="form-control" id="inputPassword4"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4">Diploma</label>
                                <input type="text"  value={Adress} onChange={onChangeAddress} className="form-control" id="inputPassword4"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4">Diploma</label>
                                <input type="text"  value={diploma} onChange={onChangediploma} className="form-control" id="inputPassword4"/>
                            </div>
                        </div>
                        <button type="submit" onClick={(event)=>updateTeacher(event)} className="btn btn-primary float-right">
                            Update Teacher</button>
                            
                </form> 
            </div>
        )
    
}

export default UpdateTeacher