import React ,{useState , useEffect} from 'react'
import  StudentService from '../../services/StudentService' 
import {FiEye}  from 'react-icons/fi' 
function StudentDetailList()   {
    const  [StudentsList,  setStudents] =  useState(null); 
    
    useEffect(()=>
    StudentService.getStudents().then(res=>{ 
          setStudents(res.data)
        }),[]);
    //console.log(universities)

 if (!StudentsList) return null
        return (
            <div>
            {StudentsList!==null? 
            (<table class="table table-striped container table-bordered ">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Last Name</th>
                <th scope="col">First Name</th>    
                <th scope="col">Actions</th>                      
                </tr>
            </thead>
            <tbody> 
                {StudentsList.map((student, index) => { 
                return  (
                    <tr>
                        <th scope="row" key={index}>{student.numInscription}</th>
                        <td>{student.nameETU}</td>
                        <td>{student.prenomETU}</td>
                        <td style={{width:'100px'}}>
                            <a className="mr-2"  href={`/teachersdetails/${student.numInscription}`}><FiEye  style={{color: "green"}}/></a>
                            </td>
                    </tr>
                )
                })}                       
            </tbody>
            </table>) : 
            <div class="" role="alert">
                there is other student available    
            </div>
            }
            </div>
        )
    }

export default StudentDetailList