import React from 'react';
import resume from '../static/img/Resume.pdf';

let resumestyle = {
  width:'100%',
   height:'700px'
};

const Resume = () => {
  return (
    <section id="resume">
      <div className="container">
        <div className="title-box-2 pt-4 pt-md-0">
          <h5 className="title-left">
            Resume
          </h5>
        </div>
        <iframe src={resume} style={resumestyle} frameBorder="0"></iframe>
      </div>
    </section>
    
  );
}

export default Resume;