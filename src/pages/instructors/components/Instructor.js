import React, { Component } from 'react';
import { Instagram } from 'react-feather';
import './instructor.css';

class Instructor extends Component {
  
  render(props) {
    return (
      <div className="instructor_element" data-aos="fade-up">
        <div className="instructor_bg_element"></div>

        <div className='instructor_header'>
          <div className='instructor_image_container'>
            <div className='instructor_image' alt='instructor' style={{backgroundImage: 'url('+this.props.instructor.image+')' }}></div>
          </div>
          <div className='instructor_name_container'>
            <div className="instructor_name">{this.props.instructor.name}</div>
            <a className='instructor_social' href={this.props.instructor.social} target="_blank" rel="noopener noreferrer">
              {/* <i className='instagram-icon' data-feather="instagram"></i> */}
              <Instagram className='instagram-icon'/>
            </a>
          </div>
        </div>
       
        <div className="instructor_bio">{this.props.instructor.bio}</div>

        <div className='classes_header tertiary_header_text'>{this.props.instructor.name} is teaching:</div>
        <div className='classes_container'>
          {this.props.instructor.classes.map(function(flowclass, index){
            return (
              <div className='class_item' key={index}>
                <div className='class_name'>{flowclass.class}</div>
                <div className='class_description'>{flowclass.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Instructor;
