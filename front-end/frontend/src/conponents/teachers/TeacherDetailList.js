import React ,{useState , useEffect} from 'react'
import  TeacherService from '../../services/TeacherService' 
import {FiEye}  from 'react-icons/fi' 
function TeacherDetailList()   {
    const  [TeachersList,  setTeachers] =  useState(null); 
    useEffect(()=>
    TeacherService.getTeachers().then(res=>{ 
          setTeachers(res.data)
        }),[]); 
    
    //console.log(universities)
  if (!TeachersList) return null
        return (
            <div>
            {TeachersList!==null? 
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
                {TeachersList.map((teacher, index) => { 
                return  (
                    <tr>
                        <th scope="row" key={index}>{teacher.matricule}</th>
                        <td>{teacher.nomENS}</td>
                        <td>{teacher.prenomENS}</td>
                        <td style={{width:'100px'}}>
                            <a className="mr-2"  href={`/teachersdetails/${teacher.matricule}`}><FiEye  style={{color: "green"}}/></a>
                            </td>
                    </tr>
                )
                })}                       
            </tbody>
            </table>) : 
            <div class="" role="alert">
                there is other teacher available    
            </div>
            }
            </div>
        )
    }

export default TeacherDetailList