import React from 'react';
function portfolio() {
    return (
        <div className="portfolioDiv">
            <div className="portfolioDiv1">
                <h1 className="portfolioDivHeadline">See What I Can Do</h1>
                <h3>This project tracks donations using Javascript!</h3>
                <a href="https://ndahlberg95.github.io/donation-tracker/">Check it out here!</a>
            </div>
            <div className="portfolioDiv2">
                <h3>This is a Collaborative Story Telling Web App!</h3>
                <p>Users can creat an account and post stories of their own, or add to other users stories!</p>
                <a href="http://desolate-harbor-29412.herokuapp.com/">Sign up here!</a>
            </div>
        </div>
    )
}
export default portfolio;