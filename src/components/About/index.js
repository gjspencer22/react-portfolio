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
                <a href ="https://ndahlberg95.github.io/donation-tracker/" target="_blank">A Donation Tracker Project</a>
            </div>
            <div>
            <h3>Ghost Writer</h3>
                <a href ="http://desolate-harbor-29412.herokuapp.com/" target="_blank">A Collaborative Story Telling Web App</a>
            </div>
            <div className="portfolioDiv3">
                <h3>This is a reworked version of the donation tracking app, now with React!</h3>
                <p>We reworked this to have react for the frontend and mongoose for the database</p>
                <a href="https://github.com/ndahlberg95/updated-donation-tracker" target="_blank">Take a look at the repo here!</a>
                <h1></h1>
                <a href="https://updated-donation-tracker.herokuapp.com/" target="_blank">The deployed site!</a>
            </div>
            
            {/* <div className="profilePic">
                <img src={ProfilePic}/>
               
            </div> */}

        </div>
    );
}
export default About; 