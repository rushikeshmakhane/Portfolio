import "./skills.css"

function Skill(){

    return(
    <div className="section4 " id="skill">
      <div className="skill_heading "><h1>My Skills</h1></div>
      <div className="underline_skill dark_bg"></div>
      
      <div className="frontend_skill skills ">
           <h2>FrontEnd</h2>
           <div className="main_cardBox">
              <div className="skill_card">
                  <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" />
                  <p>HTML</p>
              </div>
               <div className="skill_card">
                  <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" />
                  <p>CSS</p>
               </div>
               <div className="skill_card">
                  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
                  <p>JavaScript</p>
               </div>
               <div className="skill_card">
                  <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" />
                  <p>Tailwind</p>
               </div>
                <div className="skill_card">
                  <img src="https://cdn-icons-png.flaticon.com/512/919/919851.png" />
                  <p>React</p>
               </div>
         </div>
      </div>
      <div className="Backend_skill skills ">
           <h2>BackEnd</h2>
           <div className="main_cardBox">
              <div className="skill_card">
                  <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" />
                  <p>Node.js</p>
              </div>
               <div className="skill_card">
                  <img src="https://cdn-icons-png.flaticon.com/512/919/919830.png" />
                  <p>Express.js</p>
               </div>
               <div className="skill_card">
                  <img src="https://cdn-icons-png.flaticon.com/512/919/919836.png" />
                  <p>MongoDB</p>
               </div>
         </div>
      </div>
      <div className="Tools skills ">
           <h2>Tools</h2>
           <div className="main_cardBox">
                <div className="skill_card">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" />
                  <p>Git</p>
               </div>
                <div className="skill_card">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" />
                  <p>GitHub</p>
               </div>
         </div>
      </div>
 

    </div>
    )
}

export default Skill