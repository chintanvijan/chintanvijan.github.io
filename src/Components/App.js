// import logo from '../logo.svg';
// import './App.css';

import Nav from './Nav';
import Banner from './Banner';
import About from './About';
import Resume from './Resume';
import Getintouch from './Getintouch';
import {useEffect,useState} from 'react';

import '../static/lib/bootstrap/css/bootstrap.min.css';
import '../static/lib/font-awesome/css/font-awesome.min.css';
import '../static/lib/animate/animate.min.css';
import '../static/lib/ionicons/css/ionicons.min.css';
import '../static/lib/owlcarousel/assets/owl.carousel.min.css';
import '../static/lib/lightbox/css/lightbox.min.css';
import '../static/css/style.css';

var lat,lon;


function App() {

  const [weathermain,setweathermain] = useState(null);
  // const [lat,setlat] = useState(null);
  // const [lon,setlon] = useState(null);
  
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);

    } else { 
       console.log( "Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    // console.log(position.coords.latitude);
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    
     fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=a7c36a641563423331ee9f4fc02cf073")
      .then(res => res.json())
      .then(
        (result) => {
         // console.log(result['weather'][0]['main']);
         setweathermain(result['weather'][0]['main']);
         // console.log(weathermain);
        },
       
        (error) => {
          console.log(error);

        }
      )

    
  }



  console.log(lat,lon);
  
   console.log(lat,lon);

  useEffect(() => {
    getLocation();
    
       
    }, [])

  console.log(weathermain);


  return (
    // <nav />
    <div>
        <Nav /> 
      <Banner weathermain={weathermain} />
      <About />
      <Resume />
      <Getintouch />
     
        
      
    </div>
  );
}

export default App;
