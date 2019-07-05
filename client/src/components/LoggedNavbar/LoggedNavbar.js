import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Menu from '../Navbar/Menu';
import MenuButton from '../Navbar/MenuButton';
import '../Navbar/Navbar.css';
import '../Navbar/Logo.css';

class LoggedNavbar extends Component {
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
                <Link to="/" className="links"><p>Home</p></Link>
                <Link to="/loggedhome" className="links"><p>Place order</p></Link>
                <Link to="/viewallorders" className="links"><p>View order</p></Link>
                <Link to="/logout" className="links"><p>Log out</p></Link>
          </Menu>
        </div>
      )
    }
  }

  export default LoggedNavbar;