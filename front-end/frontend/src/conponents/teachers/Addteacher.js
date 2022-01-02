import React, {useState } from 'react'
import { useNavigate } from  'react-router-dom'
import TeacherService from '../../services/TeacherService'
const Addteacher =()=>{ 
    let navigate = useNavigate();
    const [matricule , setMatricule] = useState(null);
    const [firstname , setfirstname] = useState(null);
    const [lastname , setlastname] = useState(null);
    const [Adress ,setAdress] = useState(null);  
    const [diploma ,setdiploma] = useState(null);  


    
    
 
 /*matricule;
 nomENS;
prenomENS;
 adresseENS;
 diplome;
 ListEtudiant
 cours
 */   
    

     
   function onChangeAdress(event){
    setAdress(event.target.value)
   } 
   function onChangelastname(event){ 
    setlastname(event.target.value)
   } 

   function onChangeMatricule(event){
    setMatricule(event.target.value)
   }
   function onChangefirstName(event){
    setfirstname(event.target.value)
   }
   function onChangediploma(event){
       setdiploma(event.target.value)
   }

const saveTeacher=(event)=>{
        event.preventDefault();
        let  Teacher =  {
            'nomENS':  lastname ,
            'prenomENS':  firstname, 
            'adresseENS':  Adress, 
            'diplome' : diploma, 
        } 
        console.log("teacher =>" + JSON.stringify(Teacher))
        TeacherService.creeateTeacher(Teacher).then((res)=>{
            navigate('/teachers')
        })}
   
      return (
            <div className="container col-lg-5 card p-4">
                <h5>Add new teacher</h5>
                
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
                                <input type="email" value={firstname} onChange={onChangefirstName} className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4">Last Name</label>
                                <input type="password"  value={lastname} onChange={onChangelastname} className="form-control" id="inputPassword4"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4">Diploma</label>
                                <input type="password"  value={Adress} onChange={onChangeAdress} className="form-control" id="inputPassword4"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4">Diploma</label>
                                <input type="password"  value={diploma} onChange={onChangediploma} className="form-control" id="inputPassword4"/>
                            </div>
                        </div>
                           
                        
                        <button type="submit" onClick={saveTeacher} className="btn btn-primary float-right">
                            Add teacher</button>
                </form> 
            </div>
        )
    }

export default Addteacher