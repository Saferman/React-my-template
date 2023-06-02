import React from 'react';
import Navbar from './Navbar';
import {RouteHandler} from 'react-router';


class App extends React.Component {
    render() {
      return (
        <div>
          <Navbar />
          <RouteHandler />
        </div>
      );
    }
}

export default App;
