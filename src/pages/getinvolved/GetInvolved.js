import React, { Component } from 'react';

class GetInvolved extends Component {
  render() {
    return (
      <div className="getinvolved content-container">
        
        <div className="secondary_section__section get_involved">
          <div className="header_text" data-aos="fade-zoom-in">Get Involved:</div>
          <div className="main_button gradient_btn gradient_btn_2 get_involved_btn" data-aos='fade-up' data-aos-offset='100'>
            <a className='button_text' href='https://docs.google.com/forms/d/e/1FAIpQLScd0QBLSBDd5ieM46jFueh1_GpnnzZSHOUBvf1ACg328ulnUQ/viewform?usp=sf_link' target="_blank"> volunteer </a>
          </div>
          <div className="main_button gradient_btn gradient_btn_3 get_involved_btn" data-aos='fade-up' data-aos-offset='100'>
            <a className='button_text' href='https://docs.google.com/forms/d/e/1FAIpQLSeNYtYfyW9WYDfRHVMzS0DOztMF2MVorqsMPQwnBzM3d5DquQ/viewform?vc=0&c=0&w=1' target="_blank"> perform </a>
          </div>
          <div className="main_button gradient_btn gradient_btn_5 get_involved_btn" data-aos='fade-up' data-aos-offset='100'>
            <a className='button_text' href='https://docs.google.com/forms/d/e/1FAIpQLSea6xpvRZwVQ2aj0464jffJ0s66ggQL_F3HaYK3mfygYBkciA/viewform?usp=sf_link' target="_blank"> vend </a>
          </div>
        </div>

      </div>
    );
  }
}

export default GetInvolved;
