import React, { Component } from 'react';
import '../Home/Home.css';
import couple from '../../public/img/couple.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <img src={couple} alt="Couple"
                />
                <div className="hero-text">
                <h1>The BreakUp</h1>
                <h3>Welcome to Breakup Service, your break up facilitator.</h3>
                <p>You made the decition - great! Let us do the rest!</p>
                </div>
            </div>
        )
    }
}


export default Home;