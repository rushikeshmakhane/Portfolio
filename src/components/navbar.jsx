import "./navbar.css"
import { useState } from "react";

function Navbar(){
     const [isOpen, setOpen] = useState(false);

     let toggleMenu =()=>{
        setOpen(!isOpen)
     }

    return(
       <div className="section1">
       <div className="nav">
        <img className="logoImg" src="logo-1-150x150.png" alt="" />
        <div className={isOpen ? "nav_comp active" :"nav_comp"}>
            <span>Home</span>
            <span><a href="#about">About</a></span>
            <span><a href="#skill">Skills</a></span>
            <span>Projects</span>
            <span>Contact</span>
        </div>
        <div className="resume">
            <span>Resume</span>
        </div>
        <div  className="bar" onClick={toggleMenu} >
            <i className="fa-solid fa-bars"></i>
        </div>

       </div>
       </div>
    )
}

export default Navbar