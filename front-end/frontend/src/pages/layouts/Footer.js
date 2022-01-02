import React from 'react'
import {FaFacebook } from  'react-icons/fa'
import {FiInstagram ,FiTwitter  } from  'react-icons/fi'
import {AiOutlineLinkedin } from  'react-icons/ai'
import {BsGithub  } from  'react-icons/bs'
const  Footer=()=> {
    return (
 

  <footer className="bg-dark text-center text-white"  style={{ 
    position: "fixed",
    bottom:0,
    width:'100%',
    height:'170px',   /* Height of the footer */
    background:'#6cf'}}>
  <div className="container p-4 pb-0">
    <section className="mb-4">
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FaFacebook/></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FiInstagram/></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><AiOutlineLinkedin/></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FiTwitter/></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><BsGithub/></a>
    </section>
  </div>

  <div className="text-center p-3" style={{backgroundColor:" rgba(0, 0, 0, 0.2)"}}>
    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</footer>
  
    )
}

export default Footer 
