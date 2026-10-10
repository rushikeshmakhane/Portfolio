import "./aboutme.css"

function AboutMe(){

    return(
    <div className="section3">
       <div className="heading_about" id="about">About Me</div>
       <div className="sub_head_about">I am a passionate Web Developer focused on creating clean, responsive and user-friendly websites.</div>
       <div className="underline_about dark_bg"></div>

       <div className="content_about">
        <div className="a_fs_box box">
            <div className="fs_title_a">Developing With a Passion  While Exploring The World.</div>
            <div className="fs_para_a">I am a dedicated web developer who loves turning ideas into real, working websites. 
             I enjoy learning new technologies and improving my skills every day. My focus is on 
             building fast, modern, and responsive websites that provide a great user experience.
            </div>
        </div>

        <div className="a_sc_box box">
           <div className="sc_para_a"> I believe in writing clean and efficient code. I continuously explore new design trends 
            and development tools to stay updated in the fast-growing tech world. Every project 
            gives me an opportunity to learn something new and become better.</div>
        </div>

        <div className="a_tr_box box dark_bg">
           <img className="webimg_a" src="webimg.jpg" alt=""  />
        </div>
       </div>
    </div>
    )
}

export default AboutMe