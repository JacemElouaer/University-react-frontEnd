import './App.css';
import {Routes,  Route} from 'react-router-dom';
import Students from  './conponents/Students/Students' 
import StudentDetails from './conponents/Students/StudentDetails'
import Main from './conponents/main/Main'
import Teachers from  './conponents/teachers/teachers'
import Addteacher from  './conponents/teachers/Addteacher'
import AddStudent from './conponents/Students/AddStudent'
import UpdateStudent from './conponents/Students/UpdateStudent'
import Test from './pages/layouts/test'
import Navbar from './pages/layouts/Navbar'
import Footer from './pages/layouts/Footer'
import ListUniversitie from './conponents/university/Listuniversitie' 
import Universitie from './conponents/university/Universitie'  
import AddUniversity from './conponents/university/AddUniversity'  
import TeacherDetails from './conponents/teachers/TeacherDetails' 
import UpdateTeacher from './conponents/teachers/UpdateTeacher'

//import AddDepartment from './conponents/departments/AddDepartment'
//import Departments from  './components/departments/Departments'
//import DepartmentDetails from './components/departments/DepartmentDetails'

function App() {
  return (
  <div>  <Navbar/>
    <Routes>     
      <Route path="/test" element={<Test/>}/>
      <Route path="students" element={<Students/>}/> 
      <Route path="studentdetail/:id" element={<StudentDetails/>}/> 
      <Route path="addstudent" element={<AddStudent/>}/> 
      <Route path="updatestudent/:id" element={<UpdateStudent/>}/> 

      {/*<Route path="departments" element={<Departments/>}/>
      <Route path="addDepartment" element={<AddDepartment/>}/> */
}
      <Route path="teachers" element={<Teachers/>}/>
      <Route exact path="teachersdetails/:id" element={<TeacherDetails/>}/> 
      <Route path="addteacher" element={<Addteacher/>}/>  
      <Route path="updateteacher/:id" element={<UpdateTeacher/>}/>

      <Route path="universities" element={<ListUniversitie/>}/>  
      <Route path="adduniversity" element={<AddUniversity/>}/>  
      <Route path="adduniversity" element={<Universitie/>}/>   
      
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
