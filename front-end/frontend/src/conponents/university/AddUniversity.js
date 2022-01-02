import React, { Component } from 'react'

class AddUniversity extends Component {
    render() {
        return (
            <div className="container col-lg-5 card p-4">
                <h5>Add new teacher</h5>
                   <form>
                        <div className="form-row">
                            <div className="form-group col-md-6 ">
                                <label for="inputEmail4">University Name</label>
                                <input type="email" className="form-control" id="inputEmail4"/>
                            </div>
                        </div>
                            <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputEmail4">Departments</label>
                                <input type="email" className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState"></label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            
                        </div>
                        
                        <button type="submit" className="btn btn-primary float-right">
                            Add University</button>
                </form> 
            </div>
        )
    }
}
export default AddUniversity