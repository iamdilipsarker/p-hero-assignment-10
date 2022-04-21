import React from 'react';
import "./About.css"
import myPhoto from "../../../src/images/phdilip.jpg"
const About = () => {
    return (
        <div className='about'>
            <img src={myPhoto} alt=""></img> 
            <p><u>My Goal:</u> My goal is very simple. I want to learn Full Stack Web-Development in 2022. I want to learn Node.js and other technologies to become a full stack web-developer. Then I want to get a job. Afterwards, in future I want to learn  Python and Golang.That's my simple goal.</p>
        </div>
    );
};

export default About;