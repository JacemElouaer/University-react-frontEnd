import React, { Component } from 'react'

function Universitie (props)  {

        return (
           
  <div className="col-md-4">
  <div className="card mb-4 shadow-sm">

    <div className="card-body">
      <h6 className="card-title">{props.university.codeUNV} -  {props.university.nomUNV}</h6>
      <p className="card-text">Adresse is  {props.university.adresseSite}</p>
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group">
          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
        </div>
        <small className="text-muted">9 mins</small>
      </div>
    </div>
  </div>
</div>
    
        )
    }

export default Universitie
