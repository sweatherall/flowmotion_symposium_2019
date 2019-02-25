import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './navigation.css'

class Navigation extends Component {
  render() {
    return (
      <div className="main_navigation">
        
        <Link to='/' className='navigation_item navigation_item_home'>Home</Link>
        <Link to='/instructors' className='navigation_item navigation_item_instructors'>Instructors</Link>

        <Link to='/' className='logo_container'>
          <img src='./images/fmlogo.png' alt='flowmotion logo' className='logo_img'></img>
        </Link>  

        <Link to='/schedule' className='navigation_item navigation_item_schedule'>Schedule</Link>
        <Link to='/getinvolved' className='navigation_item navigation_item_getinvolved'>Get Involved</Link>

      </div>
    );
  }
}

export default Navigation;


