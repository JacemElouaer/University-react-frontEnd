import React, { Component ,  useState} from 'react'
import DatePicker from 'react-date-picker'


const AddDepartment =()=>{ 
    
    const [value, onChange] = useState(new Date());


        return (
            <div className="container col-lg-5 card p-4">
                <h5>Add new Student</h5>
                   <form>
                        
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputEmail4">Nom Department</label>
                                <input type="email" className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4">Description</label>
                                <input type="text" className="form-control" id="inputPassword4"/>
                            </div>
                        </div>
                            <div className="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                            </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label for="inputState">Classes</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>                            
                        </div>
                        <button type="submit" className="btn btn-primary float-right">
                            Add Department</button>    
                </form> 
            </div>
        )
    
}
export default AddDepartment