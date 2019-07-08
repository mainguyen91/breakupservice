import React, { Component } from 'react';
import '../Home/Home.css';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import LoggedNavbar from '../LoggedNavbar/LoggedNavbar';
import couple from '../../public/img/couple.jpg';
import thunder from '../../public/img/thunder.png';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    componentDidMount(){
        axios.get('/home')
        .then(results => {
            console.log(results)
            this.setState( { loggedIn: results.data})
        })
    }

    render() {
        if (this.state.loggedIn === true) {
        return (
            <div className="home">
                <LoggedNavbar /> 
                <img className="hero" src={couple} alt="Couple"
                />
                <div className="hero-text">
                
                <h3>Welcome to your break up facilitator.</h3>
                <h3>You made the decision - let us do the rest!</h3>
                </div>
                <img className="icon" src={thunder} alt="Lightening" />
            </div>  
        )} else { 
            return (
            <div className="home">
                <Navbar />
                <div className="container">
                    
                    <img className="hero" src={couple} alt="Couple"
                    />
                    <div className="hero-text">
                    
                    <h3>Welcome to your break up facilitator.</h3>
                    <h3>You made the decision - let us do the rest!</h3>
                    </div>
                    <img className="icon" src={thunder} alt="Lightening" />
                </div>
                
            </div>
        )
        }
    }
}


export default Home;