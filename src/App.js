import React, { Component } from 'react';

import Nav from './Components/Nav/Nav';
import Banner from './Components/Banner/Banner';
import Article from './Components/Article/Article';
import Section from './Components/Section/Section';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
          <Banner />
          <Article />
          <Section />
      </div>
    );
  }
}

export default App;
