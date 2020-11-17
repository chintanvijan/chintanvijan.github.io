import React from 'react';
import {useEffect,useState} from 'react';
import banner_image from '../static/img/weather-gifs/hazy.gif';
import banner_image1 from '../static/img/weather-gifs/thunderstorm.gif';
import banner_image2 from '../static/img/weather-gifs/drizzle.gif';
import banner_image3 from '../static/img/weather-gifs/rain.gif';
import banner_image4 from '../static/img/weather-gifs/snow.gif';
import banner_image5 from '../static/img/weather-gifs/clouds.gif';
import banner_image6 from '../static/img/weather-gifs/clear.gif';
import '../static/lib/bootstrap/css/bootstrap.min.css';
import '../static/lib/font-awesome/css/font-awesome.min.css';
import '../static/lib/animate/animate.min.css';
import '../static/lib/ionicons/css/ionicons.min.css';
import '../static/lib/owlcarousel/assets/owl.carousel.min.css';
import '../static/lib/lightbox/css/lightbox.min.css';
import '../static/css/style.css';



import ScriptTag from 'react-script-tag';


var sectionstyle = {
   backgroundImage: "url(" +  banner_image  + ")"
}

var sectionstyle1 = {
   backgroundImage: "url(" +  banner_image1  + ")"
}

var sectionstyle2 = {
   backgroundImage: "url(" +  banner_image2  + ")"
}

var sectionstyle3 = {
   backgroundImage: "url(" +  banner_image3  + ")"
}

var sectionstyle4 = {
   backgroundImage: "url(" +  banner_image4  + ")"
}

var sectionstyle5 = {
   backgroundImage: "url(" +  banner_image5  + ")"
}

var sectionstyle6 = {
   backgroundImage: "url(" +  banner_image6  + ")"
}




const Banner = ({weathermain}) => {

  

  if(weathermain==="Haze" || weathermain==="Mist" || weathermain==="Smoke" || weathermain==="Dust" || weathermain==="Fog" || weathermain==="Sand" || weathermain==="Ash" || weathermain==="Squall" || weathermain==="Tornado" ){    

    return (

        <div id="home" className="intro route bg-image" style={ sectionstyle } >
          <div className="overlay-itro"></div>
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <p className="display-6 color-d">Quite a hazy weather today, turn on your fogg lights if you drive.<br /> Although great day to check this amazing portfolio !</p>
                <h1 className="intro-title mb-4">I am Chintan</h1>
                <p className="intro-subtitle"><span className="text-slider-items">Software Development Engineer , Full Stack Developer, Data Science Enthusiast,Machine Learning Enthusiast,Backend Developer,Programmer,Competitive Coder</span>
                <strong className="text-slider" ></strong></p>
               
              </div>
            </div>
          </div>
          <ScriptTag type="text/javascript" src="js/main.js" />
        </div>

      );
  }

  if(weathermain==="Thunderstorm"){    

    return (

        <div id="home" className="intro route bg-image" style={ sectionstyle1 } >
          <div className="overlay-itro"></div>
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <p className="display-6 color-d">There might be a thunderstorm in your area. <br/> You better stay home and check this amazing portfolio !</p>
                <h1 className="intro-title mb-4">I am Chintan</h1>
                <p className="intro-subtitle"><span className="text-slider-items">Software Development Engineer , Full Stack Developer, Data Science Enthusiast,Machine Learning Enthusiast,Backend Developer,Programmer,Competitive Coder</span>
                <strong className="text-slider" ></strong></p>
               
              </div>
            </div>
          </div>
          <ScriptTag type="text/javascript" src="js/main.js" />
        </div>

      );
  }

  if(weathermain==="Drizzle"){    

    return (

        <div id="home" className="intro route bg-image" style={ sectionstyle2 } >
          <div className="overlay-itro"></div>
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <p className="display-6 color-d">Ahh! It might be drizzling outside <br/> Grab a cup of coffee and enjoy checking this amazing portfolio!</p>
                <h1 className="intro-title mb-4">I am Chintan</h1>
                <p className="intro-subtitle"><span className="text-slider-items">Software Development Engineer , Full Stack Developer, Data Science Enthusiast,Machine Learning Enthusiast,Backend Developer,Programmer,Competitive Coder</span>
                <strong className="text-slider" ></strong></p>
               
              </div>
            </div>
          </div>
          <ScriptTag type="text/javascript" src="js/main.js" />
        </div>

      );
  }

  if(weathermain==="Rain"){    

    return (

        <div id="home" className="intro route bg-image" style={ sectionstyle3 } >
          <div className="overlay-itro"></div>
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <p className="display-6 color-d">It might be raining outside <br/> Grab a cup of coffee and continue enjoying this amazing portfolio !</p>
                <h1 className="intro-title mb-4">I am Chintan</h1>
                <p className="intro-subtitle"><span className="text-slider-items">Software Development Engineer , Full Stack Developer, Data Science Enthusiast,Machine Learning Enthusiast,Backend Developer,Programmer,Competitive Coder</span>
                <strong className="text-slider" ></strong></p>
               
              </div>
            </div>
          </div>
          <ScriptTag type="text/javascript" src="js/main.js" />
        </div>

      );
  }

  if(weathermain==="Snow"){    

    return (

        <div id="home" className="intro route bg-image" style={ sectionstyle4 } >
          <div className="overlay-itro"></div>
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <p className="display-6 color-d">Yay! Its snowing. <br/> Stay warm and enjoy checking this amazing portfolio !</p>
                <h1 className="intro-title mb-4">I am Chintan</h1>
                <p className="intro-subtitle"><span className="text-slider-items">Software Development Engineer , Full Stack Developer, Data Science Enthusiast,Machine Learning Enthusiast,Backend Developer,Programmer,Competitive Coder</span>
                <strong className="text-slider" ></strong></p>
               
              </div>
            </div>
          </div>
          <ScriptTag type="text/javascript" src="js/main.js" />
        </div>

      );
  }

  if(weathermain==="Clouds"){    

    return (

        <div id="home" className="intro route bg-image" style={ sectionstyle5 } >
          <div className="overlay-itro"></div>
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <p className="display-6 color-d">Ugh! Its cloudy outside, you better grab an umbrella while going out <br/> Always better to check this amazing portfolio thou!</p>
                <h1 className="intro-title mb-4">I am Chintan</h1>
                <p className="intro-subtitle"><span className="text-slider-items">Software Development Engineer , Full Stack Developer, Data Science Enthusiast,Machine Learning Enthusiast,Backend Developer,Programmer,Competitive Coder</span>
                <strong className="text-slider" ></strong></p>
               
              </div>
            </div>
          </div>
          <ScriptTag type="text/javascript" src="js/main.js" />
        </div>

      );
  }


  else{
    return (

        <div id="home" className="intro route bg-image" style={ sectionstyle6 } >
          <div className="overlay-itro"></div>
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <p className="display-6 color-d">Awesome weather today <br/> You will surely enjoy checking this amazing portfolio!</p>
                <h1 className="intro-title mb-4">I am Chintan</h1>
                <p className="intro-subtitle"><span className="text-slider-items">Software Development Engineer , Full Stack Developer, Data Science Enthusiast,Machine Learning Enthusiast,Backend Developer,Programmer,Competitive Coder</span>
                <strong className="text-slider" ></strong></p>
               
              </div>
            </div>
          </div>
          <ScriptTag type="text/javascript" src="js/main.js" />
        </div>

      );
  }
}

export default Banner;