import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuButton from './MenuButton';
import '../Navbar/Navbar.css';
import '../Navbar/Logo.css';

class Navbar extends Component {
    constructor(props){
      super(props);
    //   this.routeChange = this.routeChange.bind(this);
      this.state={
        menuOpen:false,
      }
    }
    
    handleMenuClick() {
      this.setState({menuOpen:!this.state.menuOpen});
    }
    

    // routeChange() {
    //     let menu = ['Home', 'About Us','Pricing','Register','Login']
    //     menu.map(index => {
    //         if(index === 0){
    //             let path = `/`
    //             return this.props.history.push(path);
    //         }else if (index === 1){
    //             let path = `/about`
    //             return this.props.history.push(path);
    //         }else if (index === 2){
    //             let path = `/pricing`
    //             return this.props.history.push(path);
    //         }else if (index === 3){
    //             let path = `/register`
    //             return this.props.history.push(path);
    //         } else if(index === 4){
    //             let path = `/login`
    //             return this.props.history.push(path);
    //         } return index
    //     })
        
    // }
    
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
            background: '#f89214',
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
      // const menu = ['Home', 'About Us','Pricing','Register','Login']
      // const menuItems = menu.map((val,index)=>{
    
      //   return (
      //     <MenuItem 
      //       key={index} 
      //       delay={`${index * 0.1}s`}
            
      //       onClick={this.routeChange}>{val}</MenuItem>)
      // });
      
      return(
        <div>
          <div style={styles.container}>
            <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
            <div className="logo">The BreakUp.</div>
          </div>
          <Menu open={this.state.menuOpen}>
            <MenuItem>
                <Link to="/" className="links"><p>Home</p></Link>
                <Link to="/about" className="links"><p>About</p></Link>
                <Link to="/pricing" className="links"><p>Pricing</p></Link>
                <Link to="/register" className="links"><p>Register</p></Link>
                <Link to="/login" className="links"><p>Log in</p></Link>
            </MenuItem>
          </Menu>
        </div>
      )
    }
  }

  export default withRouter(Navbar)