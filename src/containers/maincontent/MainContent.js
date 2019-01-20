import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../../pages/home/Home'
import Instructors from '../../pages/instructors/Instructors'
import Schedule from '../../pages/schedule/Schedule'
import GetInvolved from '../../pages/getinvolved/GetInvolved'
import ShdPolicy from '../../pages/shd-policy/SHDPolicy'


class MainContent extends Component {
  render() {
    return (
      <div className="main_content">
        
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/instructors' component={Instructors}/>
            <Route path='/schedule' component={Schedule}/>
            <Route path='/getinvolved' component={GetInvolved}/>
            <Route path='/shdpolicy' component={ShdPolicy}/>
        </Switch>

      </div>
    );
  }
}

export default MainContent;


