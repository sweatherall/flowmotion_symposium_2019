import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './navigation.css'

class Navigation extends Component {
  render() {
    return (
      <div className="main_navigation">
        
        <Link to='/' className='navigation_item'>Home</Link>
        <Link to='/instructors' className='navigation_item'>Instructors</Link>

        <div className='logo_container'>
        <img src='./assets/imgs/fmlogo.png' alt='flowmotion logo' className='logo_img'></img>
        </div>  

        <Link to='/schedule' className='navigation_item'>Schedule</Link>
        <Link to='/getinvolved' className='navigation_item'>Get Involved</Link>

      </div>
    );
  }
}

export default Navigation;


