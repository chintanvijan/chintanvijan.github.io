import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';


import './static/lib/bootstrap/css/bootstrap.min.css';
import './static/lib/font-awesome/css/font-awesome.min.css';
import './static/lib/animate/animate.min.css';
import './static/lib/ionicons/css/ionicons.min.css';
import './static/lib/owlcarousel/assets/owl.carousel.min.css';
import './static/lib/lightbox/css/lightbox.min.css';
import './static/css/style.css';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
