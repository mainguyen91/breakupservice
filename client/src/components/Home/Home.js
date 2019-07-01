import React, { Component } from 'react';
import '../Home/Home.css';
import couple from '../../public/img/couple.jpg';
import thunder from '../../public/img/thunder.png';

class Home extends Component {
    render() {
        return (
            <div>
                <img className="hero" src={couple} alt="Couple"
                />
                <div className="hero-text">
                <h1>The BreakUp</h1>
                <h3>Welcome to BreakUp Service, your break up facilitator.</h3>
                <p>You made the decision - great! Let us do the rest!</p>
                </div>
                <img className="icon" src={thunder} alt="Lightening" />
            </div>
        )
    }
}


export default Home;