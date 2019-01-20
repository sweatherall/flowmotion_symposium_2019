import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navigation from '../../navigation/Navigation'
import MainContent from '../maincontent/MainContent'
import Footer from '../../footer/Footer'
import '../../styles/general.css'
import '../../styles/buttons.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Navigation/>

          <MainContent/>

          <Footer/>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
