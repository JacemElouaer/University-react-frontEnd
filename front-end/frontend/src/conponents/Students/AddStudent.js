import React, {  useState ,  useEffect} from 'react'
import DatePicker from 'react-date-picker'
import {useNavigate} from  'react-router-dom'

import ClasseService from '../../services/ClasseService'
import TeacherService from '../../services/TeacherService'
import Select from 'react-select';
import  StudentService from '../../services/StudentService'  
const AddStudent =()=>{ 
    let navigate = useNavigate();
    const [value, onChange] = useState(new Date());
    const [firstname , setfirstname] = useState(null);
    const [lastname , setlastname] = useState(null);
    const [Adress ,setAdress] = useState(null); 
    const [classes, setClasses] = useState(null);
    const [teachers, setTeachers] = useState(null);  

    const [classesC ,  setclassesC]=  useState(null);
    const [teahcersT ,  setteahcersT]= useState(null);  
    const optionsC = classes; 
    const optionsT = teachers;  

    
    

    const saveStudent=(event)=>{
        event.preventDefault();
        let  Student =  {
            'nameETU':  lastname ,
            'prenomETU':  firstname, 
            'adresseETU':  Adress, 
            'dateEntrée' :value, 
            'listCours' : classesC, 
            'listEnseignant':  teahcersT, 
        }  

        StudentService.createStudent(Student).then((res)=>{
            navigate('/students')
        }
        )
        

    }

     
   function onChangeAddress(event){
    setAdress(event.target.value)
   } 
   function onChangelastname(event){ 
    setlastname(event.target.value)
   }
   function onChangefirstName(event){
    setfirstname(event.target.value)
   }

   const onChangeClass = (event)=>{
    setclassesC(event)
   } 
   const onChangeTeacher = val =>{
       setteahcersT(val)
   }
   useEffect(()=>
        ClasseService.getClasses().then((res)=>{
            setClasses(res.data)
        }),[])
    
    useEffect(()=>
        TeacherService.getTeachers().then((res)=>{
            setTeachers(res.data)
        }),[])
        
        if (!classes) return null
        return (
            <div className="container col-lg-5 card p-4">
                <h5>Add new Student</h5>
                   <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputEmail4"   name="firstname">First Name</label>
                                <input type="email" value={firstname} onChange={onChangefirstName} className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4" name="Adresse">Last Name</label>
                                <input type="text" value={lastname} onChange={onChangelastname} className="form-control" id="inputPassword4"/>
                            </div>
                        </div>
                            <div className="form-group">
                                <label for="inputAddress" value={Adress}  >Address</label>
                                <input type="text" className="form-control" id="inputAddress" onChange={onChangeAddress} placeholder="1234 Main St"/>
                            </div>
                        <div className="form-row">{ classes ? (
                            <div className="form-group col-md-4">
                                <label for="inputState">Classes</label>
                                <Select
                                isMulti
                                onChange={onChangeClass}
                                options={optionsC}  
                                displayValue="codeC"
                                showCheckbox 
                                />
                                {classesC?
                                <p> {classesC.map(classe=>classe.libelleC+ " , ")}</p> :  null}
                            </div>) :
                             null
                            }
                        { teachers ? (
                            <div className="form-group col-md-4">
                                <label for="inputState">Teachers</label>
                                <Select 
                                isMulti
                                onChange={onChangeTeacher}
                                options={optionsT} 
                                displayValue="nomENS"
                                /> 
                                {teahcersT? <p> {teahcersT.map(teacher=>teacher.nomENS+ " , ")}</p> :null}
                            </div>) :
                             null
                            }

                            <div className="form-group col-md-4 ml-2" style={{paddingTop:"5px"}}>
                                <label for="inputDate">Start Date</label>
                                <br/>
                                <DatePicker id ="inputDate"
                                    onChange={onChange}
                                    value={value}
                                />
                            </div>
 
                                                        
                        </div>
                        
                        <button type="submit" onClick={(event)=>saveStudent(event)} className="btn btn-primary float-right">
                            Add Student</button>
                            
                </form> 
            </div>
        )
    
}

export default AddStudent