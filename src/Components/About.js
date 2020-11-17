import React from 'react';
import me from '../static/img/me.JPG';


let Pythonwidth = {
  "width": "90%"
};

let Cwidth = {
  "width": "85%"
};

let Cppwidth = {
  "width": "90%"
};

let Javawidth = {
  "width": "75%"
};

let Javascriptwidth = {
  "width": "80%"
};

let PHPwidth = {
  "width": "70%"
};



const About = () => {
  
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img src={me} className="img-fluid rounded b-shadow-a" alt="" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p><span className="title-s">Name: </span> <span>Chintan Vijan</span></p>
                        <p><span className="title-s">Profile: </span> <span>Software Engineer</span></p>
                        <p><span className="title-s">Email: </span> <span>chintanvijan@gmail.com</span></p>
                        <p><span className="title-s">Phone: </span> <span>+91 8802734957</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Some known Languages</p>
                    <span>Python</span> <span className="pull-right">90%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={Pythonwidth} aria-valuenow="85" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span>C</span> <span className="pull-right">85%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={Cwidth} aria-valuenow="85" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span>C++</span> <span className="pull-right">90%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={Cppwidth} aria-valuenow="85" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span>Java</span> <span className="pull-right">75%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={Javawidth} aria-valuenow="85" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    
                   
                    <span>PHP</span> <span className="pull-right">70%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={PHPwidth} aria-valuenow="50" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span>JAVASCRIPT</span> <span className="pull-right">80%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={Javascriptwidth} aria-valuenow="90" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        About me
                      </h5>
                    </div>
                    <p className="lead">
                      I am a learning Software Developer who likes to explore new technologies and likes to code. I am a Machine Learning and
                      Data Science Enthusiast and have experience in developing SaaS Products , REST APIs , Automation Scripts and Software ,bots , Chrome Extensions , System Software , etc. <br />
                      I too have experience woring with some popular frameworks and libraries including - Django (Python) ,Flask (Python) , Spring (Java) , React (Javascript) , Tensorflow (Python) , Scikit Learn (Python) , Pandas (Python), Matplotlib (Python), Selenium (Python), etc.
                    </p>
                    <p className="lead">
                      I love to play around with real life problems and visualize them as an opportunity that could be implemented with code.
                      
                      I have been an intern for Warewe as Software Engineer , Proace International as Software Developer , Devlofox Technologies as Software Developer , Aam Aadmi Party as Data Analyst and for hotbotstudios as Web Developer.
                      <br />
                      My recent projects -
                      <br /> 
                     <b> <a href="https://www.autoseolinks.com/">https://www.autoseolinks.com/</a> </b>(A SaaS product based on web automation)
                      <br />
                      <b>
                      <a href="https://buy1get1.in/">https://buy1get1.in/</a></b> (A coupon platform that serves more than 8k users daily )
                      <br/>
                      For more projects , visit - <br />

                     <b><a href="https://github.com/chintanvijan">https://github.com/chintanvijan</a></b>    (Note : Many of the projects are in the private repository , contact me to have description regarding them.)
                    </p>
                    <p className="lead">
                      Contact me for projects and opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
