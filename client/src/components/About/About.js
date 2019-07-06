import React from 'react';
import "../About/About.css";
import Navbar from '../Navbar/Navbar';

const About = () => {
    return (
        <div className="about">
            <Navbar />
            <div className="main">
                <p className="center">We are Mai and Daria, two creative individuals who come up with idea how to ease your break up struggle.
                We've been there - ghoasting, orbiting, benching happens way too often. Why not changing this?<br />
                It's enough of a burden to make the break up decision - we can take care of the rest. There won't be awkward situations
                anymore, weird silence or inappropriate words. <br />
                After you sign up andfill in the form, we'll contact a person you decided to stop 
                seeing in a way preferred by you (via phone or email/text) and pass the message you choose (fully personalized).<br />
                We truly believe in the power of finishing what has been started and we're here to simplify communication, 
                transparency and help people everywhere to give them peace of mind. 
                We're excited to hear from you!</p>
            </div>
        </div>
    );
  }
  
export default About;