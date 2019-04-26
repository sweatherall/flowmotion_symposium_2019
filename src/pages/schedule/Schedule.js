import React, { Component } from 'react';
import './schedule.css';

class Schedule extends Component {
  render() {
    return (
      <div className="schedule_container content-container">
        
        <h1 className="schedule_header">FlowMotion Symposium 2019 Schedule</h1>

        <div className="schedule_img_container">
          <img className='schedule_img' src='./images/symposium_sched_friday.png' alt='friday schedule'></img>
        </div>

        <div className="schedule_img_container">
          <img className='schedule_img' src='./images/symposium_sched_sat.png' alt='saturday schedule'></img>
        </div>

      </div>
    );
  }
}

export default Schedule;
