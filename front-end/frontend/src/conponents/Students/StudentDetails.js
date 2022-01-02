import React, { useState , useEffect} from 'react'
import  {useParams ,} from  'react-router-dom'
import StudentDetailList from './StudentDetailList'
import  StudentService from '../../services/StudentService' 

function StudentDetails () {
    let {id}  =  useParams() 
    let [Student ,  setStudent] =  useState(null) 
    useEffect(()=>
        StudentService.getStudent(id).then(res=>{
            setStudent(res.data)
        }), [] )
        if (!Student) return null
    
        return (
            < div className="container col-lg-9 mt-5 p-4 mb-5"  style={{border: '1px solid #999999' ,  borderRadius:"12px" , height: '1000px'}}> 
            <h2><span class="badge badge-info">Student informations</span></h2>
                 <div className="row">
                         <div className="col-sm  col-lg-3" style={{width: "18rem"}}>
                             <div className="row">
                                 <div className="card">        
                                     <div className="card-body">
                                         <h5 className="card-title">Inscr number : {Student.numInscription} </h5>
                                         <p className="card-text">This part will present details about the Student you can also delete  or modify the teacher.</p>
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
                        <StudentDetailList/>
                        </div>
                    </div>
                
                <div class="col-sm col-lg-8">
                    
                    <div >
                    <ul class="list-group">
                        <li class="list-group-item">First Name :  {Student.prenomETU} </li>
                        <li class="list-group-item">Last Name :  {Student.nameETU}</li>
                        <li class="list-group-item">Adresse :  {Student.adresseETU}</li>
                        <li class="list-group-item">
                            <span class="badge badge-info">start date : {Student.dateEntrée}</span></li>
                        
                    </ul>
                        
                        </div> 
                      </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
           
        )
    }

export default StudentDetails
