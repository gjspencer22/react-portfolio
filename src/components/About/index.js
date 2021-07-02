import React from 'react';
import './index.css'
// import ProfilePic from './assets/ProfilePic/';
function About() {
    return (
        <div  className="projects">
            <div>
            <p className="aboutParagraph">My name is Garrett, I am a full stack web developer! Check out some of my awesome projects!</p>
            </div>
            <div>
                <h3>Donation Tracker Project</h3>
                <a href ="https://ndahlberg95.github.io/donation-tracker/">A Donation Tracker Project</a>
            </div>
            <div>
            <h3>Ghost Writer</h3>
                <a href ="http://desolate-harbor-29412.herokuapp.com/">A Collaborative Story Telling Web App</a>
            </div>
            <div>
                <h3>Updated Donation Tracker</h3>
            </div>
            
            {/* <div className="profilePic">
                <img src={ProfilePic}/>
               
            </div> */}

        </div>
    );
}
export default About; 