import React, { Component } from 'react';
import instructors from '../../json/instructors.json';
import Instructor from './components/Instructor'
import './instructors.css'
const flow_instructors = instructors.instructors

class Instructors extends Component {


  componentDidMount() {
    console.log('instructors');
    console.log(flow_instructors);
    var social = flow_instructors.map(function(i, index) {return i.social;})
    console.log(social);
  }
  
  render() {
    return (
      <div className="instructors">
        
        <h1 className='instructors_header'>FlowMotion Instructors 2019</h1>

        {flow_instructors.map(function(instructor, index){
          return <Instructor key={index} instructor={instructor}/>;
        })}

      </div>
    );
  }
}

export default Instructors;
