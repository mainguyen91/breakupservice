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
            background: '#FAEFD1',
            width: '100%',
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
          <Link to="/" className="links">
                <div className="deconstructed">
                  Home
                  <div>Home</div>
                  <div>Home</div>
                  <div>Home</div>
                  <div>Home</div>
                </div>
              </Link>
              <Link to="/profile" className="links">
                <div className="deconstructed">
                  Place Order
                  <div>Place Order</div>
                  <div>Place Order</div>
                  <div>Place Order</div>
                  <div>Place Order</div>
                </div>
              </Link>
              <Link to="/overview" className="links">
                <div className="deconstructed">
                  View Order
                  <div>View Order</div>
                  <div>View Order</div>
                  <div>View Order</div>
                  <div>View Order</div>
                </div>
              </Link>
              <Link to="/logout" className="links">
              <div className="deconstructed">
                  Log out
                  <div>Log out</div>
                  <div>Log out</div>
                  <div>Log out</div>
                  <div>Log out</div>
                </div>
              </Link>
          </Menu>
        </div>
      )
    }
  }

  export default LoggedNavbar;