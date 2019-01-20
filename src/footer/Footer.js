import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className='social-media'>
          <div className='social-media-block'>
            <a className='facebook' href="https://www.facebook.com/flowmotionretreats/?fref=ts" target="_blank">
              <i className='facebook-icon social-media-icon' data-feather="facebook"></i>
            </a>
          </div>
          <div className='social-media-block'>
            <a className='instagram' href="https://www.instagram.com/flowmotionevents/" target="_blank">
              <i className='instagram-icon social-media-icon' data-feather="instagram"></i>
            </a>
          </div>
        </div>

        <Link to='/shdpolicy' className='shd-policy-link paragraph_text'>Sexual Harassment & Discrimination Policy</Link>
        <div className='fm-email paragraph_text'>info@flowmotionevents.com</div>

        <div className='scrolling-atoms'>
          <div className='scroll-left'>
            <div className='atoms'>
              <div className='atom-container'>
                <div className='atom'>
                  <div><div></div></div>
                  <div><div></div></div>
                  <div><div></div></div>
                  <div><div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Footer;


