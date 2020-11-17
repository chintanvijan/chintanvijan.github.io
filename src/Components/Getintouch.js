import React from 'react';
import background from '../static/img/overlay-bg.jpg';

let imgstyle = {
	backgroundImage: "url("+ {background} +")"
}

const Getintouch = () => {
  return (
    
    <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={imgstyle}>
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                 
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">
                        Get in Touch
                      </h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Interested in full time opportunities as Software Development Engineer.
                        Contact for more details. 
                      </p>
                      <ul className="list-ico">
                        <li><span className="ion-ios-location"></span> Delhi, India</li>
                        <li><span className="ion-ios-telephone"></span> +91 8802734957</li>
                        <li><span className="ion-email"></span> chintanvijan@gmail.com</li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li><a href="https://github.com/chintanvijan"><span className="ico-circle"><i className="ion-social-github"></i></span></a></li>
                        <li><a href="https://www.linkedin.com/in/chintan-vijan-a92ba5156"><span className="ico-circle"><i className="ion-social-linkedin"></i></span></a></li>
                       
                      </ul>
                    </div>
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

export default Getintouch;