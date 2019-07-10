import React from 'react';
import "../About/About.css";
import Navbar from '../Navbar/Navbar';
import us from '../../public/img/us.jpg';

const About = () => {
    return (
        <div className="about">
            <Navbar />
            <h1 className="story-header">Our story</h1>
            <div className="main">
                <img className="us" src={us} alt="two women" />
                <p className="center">Sitting at the coffee table and discussing the world's oldest problem which is love, 
                we (Mai and Daria) thought how easier life would be if you could outsource your break up to people who know how to do that.
                No more orbiting, ghoasting and benching. Just clear communication instead.
                Since there was no such service, we decided to build it ourselves.
                You make the decision - we take care of the rest; exactly the way you want it.
                After signing up, you tell us the message, the way it should be communicated and any additional information 
                that you think will be useful for us to know. As simple as that. No hassle, no struggle, no awkwardness.  
                We truly believe in the power of finishing what has been started and we're here to help you with just that!</p>
            </div>
        </div>
    );
  }
  
export default About;