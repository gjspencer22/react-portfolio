import React from 'react';
function Contact(props) {
    return (
        <div className="feedback">
            <div>
                <h3>Any Questions? Comments? Leave them here below with a little information of your own!</h3>
            </div>
            <div className="textEntry">
                <div className="userName">
                    <label for="name">Enter your name</label>
                    <input type="text" id="name"></input>
                </div>
                <div className="userEmail">
                    <h4>Email</h4>
                    <textarea class="emailTextBox" type="text" placeholder="Leave email here" ></textarea>

                </div>
                <div className="userMessage">

                    <textarea class="messageTextBox" type="text" placeholder="Feedback is appreciated!" ></textarea>
                </div>
            </div>
        </div>
    );
}
export default Contact;
