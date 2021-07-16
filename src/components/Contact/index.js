import React from 'react'; 
import './index.css'
function Contact() {
    return (
        <div className="feedback">
            <div>
                <h3>Any Questions? Comments? Leave them here below with a little information of your own!</h3>
            </div>
            <div className="textEntry">
                <div className="userName">
                    <h4 for="name">Enter your name</h4>
                    <textarea className="userNameTextBox" type="text" placeholder="Nice to meet you"></textarea>
                </div>
                <div className="userEmail">
                    <h4>Email</h4>
                    <textarea className="emailTextBox" type="text" placeholder="Leave email here" ></textarea>

                </div>
                <div className="userMessage">
                    <h4 className = "feedBack">Leave Feedback Here!</h4>
                    <textarea className="messageTextBox" type="text" placeholder="Feedback is appreciated!" ></textarea>
                </div>
            </div>
        </div>
    );
}
export default Contact;
