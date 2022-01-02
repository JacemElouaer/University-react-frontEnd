import React, { Component } from 'react'

class Departments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students : []
        }
    }
    render() {
        return (
            <div className="container col-lg-7 mt-5">
                <h2 className="float-left mb-3 ml-5">Student list </h2> 

                <table class="table table-striped container table-bordered ">
                        <thead>
                            <tr>
                            <th scope="col">Code Department</th>
                            <th scope="col">Department Name</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            </tr>                            
                        </tbody>
                    </table>
           </div>
        )
    }
}
export default Departments