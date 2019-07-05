import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Menu from './Menu';
import MenuButton from './MenuButton';
import '../Navbar/Navbar.css';
import '../Navbar/Logo.css';

class Navbar extends Component {
    constructor(props){
      super(props);
      this.state={
        menuOpen:false,
      }
    }
    
    handleMenuClick() {
      this.setState({menuOpen:!this.state.menuOpen});
    }
    
    render(){
      const styles= 
        {
          container:{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: '99',
            opacity: 0.9,
            display:'flex',
            alignItems:'center',
            background: '#7f270c',
            width: '100%',
            color: 'white',
          },
          body: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            filter: this.state.menuOpen ? 'blur(2px)':null,
            transition: 'filter 1s ease',
          },
        }
      
      return(
        <div>
          <div style={styles.container}>
            <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
            <div className="logo">The BreakUp.</div>
          </div>
          <Menu open={this.state.menuOpen}>
              <Link to="/" className="links" ><p>Home</p></Link>
              <Link to="/about" className="links" ><p>About</p></Link>
              <Link to="/pricing" className="links"><p>Pricing</p></Link>
              <Link to="/register" className="links"><p>Register</p></Link>
              <Link to="/login" className="links"><p>Log in</p></Link> 
          </Menu>
        </div>
      )
    }
  }

  export default Navbar;