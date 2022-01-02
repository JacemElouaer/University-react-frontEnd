import React, { useState , useEffect} from 'react'
import {MdDeleteOutline} from  'react-icons/md' 
import  StudentService from '../../services/StudentService'  
import {FiEye}  from 'react-icons/fi' 
import {GiCardExchange} from 'react-icons/gi'

function Students (){
    const  [Students,  setStudents] =  useState(null); 
    
    useEffect(()=>
    StudentService.getStudents().then(res=>{ 
          setStudents(res.data)
        }),[]);
    //console.log(universities)
function  deleteStudent(id){ 
    console.log(id)
    StudentService.deleteStudent(id).then(()=>
        console.log("none")
    )
}


 if (!Students) return null
        return (
            <div className="container col-lg-7 mt-5" >
                <a  href="addstudent" type="button" class="btn btn-warning" style={{float: 'right'}} >Add Student</a>
                <h2 className="float-left mb-3 ml-5">Students list </h2> 

                <table class="table table-striped container table-bordered ">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Adresse</th> 
                            <th scope="col">Date of start</th> 
                            <th scope="col">Course List</th> 
                            <th scope="col">Action</th> 
                            </tr>
                        </thead>
                        <tbody>
                        {Students.map((student, index) => { 
                            return  (
                            <tr>
                                <th scope="row" key={index}>{student.numInscription}</th>
                                <td>{student.nameETU}</td>
                                <td>{student.prenomETU}</td>
                                <td>{student.adresseETU}</td>
                                <td>{student.dateEntrée}</td>
                                <td><a href='/#'>classes</a></td>
                                <td style={{width:'150px'}}>
                                    <a className="btn btn-ligh"  href={`studentdetail/${student.numInscription}`}><FiEye  style={{color: "green"}}/></a>
                                    <a style={{width:'40px'}} className=" btn btn-ligh"  href={`updatestudent/${student.numInscription}`}><GiCardExchange style={{color: "orange"}}/></a>
                                    <button  style={{width:'40px'}}  className=" btn btn-ligh" onClick={()=>deleteStudent(student.numInscription)}><MdDeleteOutline style={{color: "red"}}/></button>
                                    </td>
                            </tr>
                                    )
                                    })}                       
                                </tbody>
                                </table>
            
           </div>
        )
    }

export default Students