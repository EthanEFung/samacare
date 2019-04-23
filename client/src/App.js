import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

import Home from './components/Home';
import UploaderPage from './components/UploaderPage';
import ConfigurationsPage from './components/ConfigurationsPage';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <nav>
          <button><Link to='/upload'>Upload</Link></button>
          <button><Link to='/configurations'>Configurations</Link></button>
        </nav>
        <Route path='/' exact component={Home} />
        <Route path='/upload' component={UploaderPage} />
        <Route path='/configurations' component={ConfigurationsPage} />
      </div>
    );
  }
}

export default App;
