import React ,{useState , useEffect} from 'react'
import  TeacherService from '../../services/TeacherService' 
import {FiEye}  from 'react-icons/fi' 
import {MdDeleteOutline} from  'react-icons/md'
import {GiCardExchange} from 'react-icons/gi'
function Teachers()   {
    const  [TeachersList,  setTeachers] =  useState(null); 
    useEffect(()=>
    TeacherService.getTeachers().then(res=>{ 
          setTeachers(res.data)
        }) ,  []);   

    function  deleteTeacher(id) { 
            TeacherService.deleteteacher(id).then(res=>{ 
                console.log("teacher")
            })
    }
    
    //console.log(universities)
  if (!TeachersList) return null
        return (
            <div className="container col-lg-7 mt-5">
                <a  href="addteacher" type="button" class="btn btn-warning" style={{float: 'right'}} >Add Teacher</a>
            <h2 className="float-left mb-3 ml-5">Teacers list </h2> 
            {TeachersList!==null? 
            (<table class="table table-striped container table-bordered ">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Last Name</th>
                <th scope="col">First Name</th>
                <th scope="col">Adress</th> 
                <th scope="col">Diploma</th> 
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
                        <td>{teacher.adresseENS}</td>
                        <td>{teacher.diplome}</td>
                        <td style={{width:'160px'}}>
                            <a className="btn btn-ligh"  href={`teachersdetails/${teacher.matricule}`}><FiEye  style={{color: "green"}}/></a>
                            <a className=" btn btn-ligh" href={`updateteacher/${teacher.matricule}`}><GiCardExchange style={{color: "orange"}}/></a>
                            <button  onClick={deleteTeacher(teacher.matricule)}  className=" btn btn-ligh"><MdDeleteOutline style={{color: "red"}}/></button>
                            </td>
                    </tr>
                )
                })}                       
            </tbody>
            </table>) : 
            <div class="" role="alert">
                there is no teacher available    
            </div>
            }
            
       </div>
        )
    }

export default Teachers