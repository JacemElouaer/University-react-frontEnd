import React  , {useState ,  useEffect} from 'react'
import  {useParams} from  'react-router-dom'
import  TeacherService from '../../services/TeacherService' 
import TeacherDetailList from './TeacherDetailList'
const TeacherDetails =  ()=> {
    let {id}  =  useParams() 
    let [Teacher ,  setTeacher] =  useState(null) 
    useEffect(()=>
        TeacherService.getTeacher(id).then(res=>{
            setTeacher(res.data)
        })
        )
        if (!Teacher) return null
        return (

       < div className="container col-lg-9 mt-5"> 
       <h2><span class="badge badge-info">Teahcer informations</span></h2>
            <div className="row">
                    <div className="col-sm  col-lg-3" style={{width: "18rem"}}>
                        <div className="row">
                            <div className="card">        
                                <div className="card-body">
                                    <h5 className="card-title">matricule number {Teacher.matricule} </h5>
                                    <p className="card-text">This part will present details about the teacher you can also delete  or modify the teacher.</p>
                                </div>
                                <div className="card-body"> 
                                    <div className="float-right">
                                        <button href="/#" className="btn btn-danger mr-1">Delete</button>
                                        <button href="/#" className="btn btn-success">Update</button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">    
                        <TeacherDetailList/>
                        </div>
                    </div>
                
                <div class="col-sm col-lg-8">
                    
                    <div >
                    <ul class="list-group">
                        <li class="list-group-item">First Name :  {Teacher.nomENS} </li>
                        <li class="list-group-item">Last Name :  {Teacher.prenomENS}</li>
                        <li class="list-group-item">Adresse :  {Teacher.adresseENS}</li>
                        <li class="list-group-item">
                            <span class="badge badge-info">Deploma : {Teacher.diplome}</span></li>
                        <li class="list-group-item">Classes :   {Teacher.cours}
                        </li>
                    </ul>
                        
                        </div> 
                      </div>
            </div>
        </div>
           
        )
    }

export default TeacherDetails
