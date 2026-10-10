import "./footer.css"
import { useState } from "react";

function Footer(){
  
    return(
       <div className="sectionFooter">
          <div className="f_sec1 ">
             <div className="name f_width">
                <h2>Rushikesh Makhane</h2>
                <p>Web Developer | 3rd Year CS Student</p>
             
             </div>
             <div className="logo f_width">
                <img src="logo-1-150x150.png" alt="" />
             </div>
             <div className="links f_width">
                <p>Connect</p>

                <a href="mailto:rxrushi561@gmail.com">
                <i class="fa-solid fa-envelope"></i></a>

                <a href="https://wa.me/" target="_blank">
                <i class="fa-brands fa-whatsapp"></i></a>

                <a href="https://www.linkedin.com/in/rushikesh-makhane-7a4a4a323/" target="_blank">
                <i class="fa-brands fa-linkedin"></i></a>

             </div>
             

          </div>

          <div className="f_sec2">
            <div className="f_line"></div>
            <p>© 2025 Rushi Makhane | Built with ❤️</p>
          </div>
       </div>
    )
}

export default Footer