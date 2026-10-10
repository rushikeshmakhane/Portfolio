import "./home.css"

function Home(){

    return(
      <>
          <div className="section2">
          <div className="home ">
         
         <div className="social_media_icon">
           <a href="https://www.linkedin.com/in/rushikesh-makhane-7a4a4a323/" target="_blank"> <i className="fa-brands fa-linkedin i_size"></i></a>
           <a href="mailto:rxrushi561@gmail.com"> <i class="fa-solid fa-envelope i_size"></i></a>
            
         </div>
             
         <div className="intro">
                 <span className="headline_color">I'm Web Devloper Rushi Makhane</span>
                 <p>3rd-year Computer Science student building 
                    practical AI/ML projects and web apps. I focus on 
                    clean code, reproducible experiments, and production-ready 
                    demos.</p>
                <a href="#about"> <button className="dark_bg">Learn more</button></a>
         </div>

         <div className="img">
          <img className="self_img" src="self img.png" alt="" />
         </div>



    </div>
    </div>

    
      </>

    )
}

export default Home