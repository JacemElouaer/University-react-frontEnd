import React, { Component } from 'react'

class DepartmentDetails extends Component {
    
    render() {
        return (
       < div className="container col-lg-9">
            <div className="row">
                    <div className="col-sm  col-lg-3" style={{width: "18rem"}}>
                        <div className="row">
                            <div className="card">        
                                <img className="card-img-top" src="/#"  alt="Class Type image"/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul className="list-group list-group">
                                    <li className="list-group">Cras justo odio</li>
                                    <li className="list-group">Dapibus ac facilisis in</li>
                                    <li className="list-group">Vestibulum at eros</li>
                                </ul>
                                <div className="card-body"> 
                                    <div className="float-right">
                                        <button href="/#" className="btn btn-danger mr-1">Delete</button>
                                        <button href="/#" className="btn btn-success">Update</button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{backgroundColor: "#444"}}>    
                            <h1>teacher list</h1>
                        </div>
                    </div>
                
                <div class="col-sm col-lg-8">
                    
                    <div style={{height: '800px', backgroundColor:"#444"}}>teacher genaral  informations </div> 
                      </div>
            </div>
        </div>
           
        )
    }
}
export default DepartmentDetails
