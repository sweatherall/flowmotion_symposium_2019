import React, { Component } from 'react';
import './home.css';
import 'particles.js/particles';
import sponsors from '../../json/sponsors.json';
const flow_sponsors = sponsors.sponsors;
const particlesJS = window.particlesJS;

class Home extends Component {
  componentDidMount() {
    console.log(flow_sponsors)
    particlesJS.load('particles-js', './assets/json/particles.json', function() {});
  }
  render() {
    return (
      <div className="home">
        
        <div id="primary_section">

          <div id="main_focus">    
            <div className="main_image_container">
              <div className="mainimage_image_container">
                <a href='https://squareup.com/store/flowmotionevents/' target='_blank'>
                  <img className='weekend_img main_img' alt='symposium weekend' src="./assets/imgs/weekend_poster_v1.png"></img>
                </a>
              </div>
              <div className="mainimage_image_container">
                <a href='https://squareup.com/store/flowmotionevents/' target='_blank'>
                  <img className='show_img main_img' alt='madame gray show' src="./assets/imgs/event_poster_v2.png"></img>
                </a>
              </div>
            </div>
            
            {/* <div className="main_button buy-ouac-tickets-btn">
              <a className='button_text' href='https://squareup.com/store/flowmotionevents/' target="_blank">
              tickets
              </a>
            </div> */}
          </div>

          <div className="main_button goto-section-btn bounce">
            <span className='paragraph_text'>check it out</span>
            <img className='downcaret_img' alt='down caret' src="./assets/imgs/down_caret.png"></img>
          </div>
          
        </div>  
          
        <div className='section' id="secondary_section">
          <div id="particles-js"></div>

          <div className="secondary_section__content">
            <div className="secondary_section__section flowmotion_info">
              <div className="header_text" data-aos="fade-up">FlowMotion Symposium 2019</div>
              <div className="special_text convergence_title">
                <div className="convergence_title__partial left" data-aos="slide-left" data-aos-delay='700' data-aos-duration='600'>CONVERGENCE</div> 
                <div className="convergence_title__partial mid" data-aos="fade-zoom-in" data-aos-delay='700' data-aos-duration='600'>CONVERGENCE</div> 
                <div className="convergence_title__partial right" data-aos="slide-right" data-aos-delay='700' data-aos-duration='600'>CONVERGENCE</div> 
              </div>

              <div className="paragraph_text" data-aos="fade-zoom-in">
                <p>
                  FlowMotion Symposium is a metropolitan cirque and flow arts education and performance weekend held at Monroe Convention Center in Bloomington, Indiana.
                </p>
                <p>
                  This unique retreat provides new and exciting opportunities for people of all ages, backgrounds, and skill levels! Come for aerial, circus, and juggling curriculums, performances, group discussions, and exciting live music and fire!
                </p>
                <div className='tertiary_header_text'>The Convergence:</div>
                <p>
                  Two full days of workshops and showcases with open skillshares, Renegade Room, and 24-hour flow space!
                </p>
                <div className='tertiary_header_text'>Featuring:</div>
                <p>
                  Over 10,000 sq. ft. of indoor workshop space including an Aerial playground, partnership with nearby Wild Orchid Aerial Fitness & Dance, a Vendor Market.
                </p>
                <p>
                  On-site Flowtel accommodations at the Courtyard Marriott and outdoor Fire Circle will have the entire event accessible to every guest. 
                </p>
                <p>
                  Get your tickets now!
                </p>
              </div>

              <div className="main_button gradient_btn gradient_btn_1" data-aos='fade-zoom-in'>
                <a className='button_text' href='https://squareup.com/store/flowmotionevents/' target="_blank"> tickets </a>
              </div>

              <div className="main_button gradient_btn gradient_btn_4 margin-top-1em" data-aos='fade-zoom-in'>
                <a className='button_text' href='https://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Flowmotion%20Symposium^BMGCY`FLOFLOA|FLOFLOB`119.00`USD`false`5`3/15/19`3/17/19`3/8/19&app=resvlink&stop_mobi=yes' target="_blank"> book your room </a>
              </div>
            
            </div>
          

            <div className="secondary_section__section get_involved">
              <div className="header_text" data-aos="fade-up">Get Involved:</div>
              <div className="main_button gradient_btn gradient_btn_2 get_involved_btn" data-aos='fade-zoom-in' data-aos-offset='100'>
                <a className='button_text' href='https://docs.google.com/forms/d/e/1FAIpQLScd0QBLSBDd5ieM46jFueh1_GpnnzZSHOUBvf1ACg328ulnUQ/viewform?usp=sf_link' target="_blank"> volunteer </a>
              </div>
              <div className="main_button gradient_btn gradient_btn_3 get_involved_btn" data-aos='fade-zoom-in' data-aos-offset='100'>
                <a className='button_text' href='https://docs.google.com/forms/d/e/1FAIpQLSeNYtYfyW9WYDfRHVMzS0DOztMF2MVorqsMPQwnBzM3d5DquQ/viewform?vc=0&c=0&w=1' target="_blank"> perform </a>
              </div>
              <div className="main_button gradient_btn gradient_btn_5 get_involved_btn" data-aos='fade-zoom-in' data-aos-offset='100'>
                <a className='button_text' href='https://docs.google.com/forms/d/e/1FAIpQLSea6xpvRZwVQ2aj0464jffJ0s66ggQL_F3HaYK3mfygYBkciA/viewform?usp=sf_link' target="_blank"> vend </a>
              </div>
            </div>
          </div>
        </div>
            
        <div className='bottom-section'>
          <div className='section' data-aos="fade-up">
            <div className='section-content'>
              <div className='secondary_header_text'>Mission Statement: </div>
              <div className='paragraph_text small-text'>Our mission is to create vibrant productions and robust curriculums, cultivate personal exploration and satisfaction by providing a space for meaningful and playful collaborations, and connect the experiences within flow and cirque arts programming to patterns of learning applicable in everyday life.</div>
            </div>
          </div>


          <div id='sponsor_section' className='section'>
            <div className='secondary_header_text sponsor-header'>thank you to our sponsors</div>
            <div className='sponsors clr'>
              <div id='hexGrid'>
                {flow_sponsors.map(function(sponsor, index){
                  return (
                    <div key={index} className='hex sponsor' data-aos="fade-zoom-in">
                      <div className='hexIn'>
                        <a className='hexLink' href={sponsor.url} target="_blank">
                          <img className='sponsor-img' src={sponsor.src} alt={sponsor.alt}></img>
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        
      </div>
    );
  }
}

export default Home;
