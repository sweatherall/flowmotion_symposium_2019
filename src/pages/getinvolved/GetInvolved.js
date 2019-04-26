import React, { Component } from 'react';

class GetInvolved extends Component {
  render() {
    return (
      <div className="getinvolved content-container">
        
        <div className="secondary_section__section get_involved">
          <div className="header_text" data-aos="fade-zoom-in">Get Involved:</div>
          <div className="main_button gradient_btn gradient_btn_2 get_involved_btn" data-aos='fade-up' data-aos-offset='100'>
            <a className='button_text' href='https://docs.google.com/forms/d/e/1FAIpQLScd0QBLSBDd5ieM46jFueh1_GpnnzZSHOUBvf1ACg328ulnUQ/viewform?usp=sf_link' target="_blank" rel="noopener noreferrer"> volunteer </a>
          </div>
          <div className="main_button gradient_btn gradient_btn_3 get_involved_btn" data-aos='fade-up' data-aos-offset='100'>
            <a className='button_text' href='https://docs.google.com/forms/d/e/1FAIpQLSeNYtYfyW9WYDfRHVMzS0DOztMF2MVorqsMPQwnBzM3d5DquQ/viewform?vc=0&c=0&w=1' target="_blank" rel="noopener noreferrer"> perform </a>
          </div>
          <div className="main_button gradient_btn gradient_btn_5 get_involved_btn" data-aos='fade-up' data-aos-offset='100'>
            <a className='button_text' href='https://docs.google.com/forms/d/e/1FAIpQLSea6xpvRZwVQ2aj0464jffJ0s66ggQL_F3HaYK3mfygYBkciA/viewform?usp=sf_link' target="_blank" rel="noopener noreferrer"> vend </a>
          </div>
        </div>

        <form action="https://squareup.com/outreach/DzudtI/subscribe" method="POST" target="_blank">
          <input type="email" name="email_address" placeholder="Your Email Address" style={{height: '38px', padding: '0 16px', fontSize: '14px', border: '1px solid #bec3c8', borderRadius: '3px', marginRight: '8px', width: 'calc(100% - 34px)', outline: 'none'}}/>
          <button type="submit" style={{cursor: 'pointer', backgroundColor: '#6774F5', color: 'white', height: '40px', border: '0', borderRadius: '30px', fontSize: '1em', padding: '0 16px', fontWeight: '500', width: '100%', margin: '1em 0 0 0', fontFamily: 'Megrim', outline: 'none'}}>Join Our Mailing List</button>
        </form>

      </div>
    );
  }
}

export default GetInvolved;
