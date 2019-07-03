import React from 'react';
import "../About/About.css";
import Navbar from '../Navbar/Navbar';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="main">
                <h3 className="overlay">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum tristique libero, a sodales ligula sollicitudin nec. 
                Vivamus magna erat, molestie ac lectus quis, cursus sollicitudin quam. Donec semper accumsan euismod. Nam faucibus ac arcu eget 
                maximus. Phasellus luctus felis nec commodo ornare. Vivamus cursus maximus odio, nec pellentesque ipsum convallis et. Proin quis 
                congue urna, et congue purus. Suspendisse accumsan imperdiet purus, quis interdum lacus rutrum sed. Class aptent taciti 
                sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</h3>
            </div>
        </div>
    );
  }
  
export default About;