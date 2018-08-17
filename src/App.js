import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      pictures: []
    }
  }
  componentWillMount () {
    fetch('http://whatever/profile').then(() => {
      // This in the other hand will cause additional rerender,
      // since fetch is async and state is set after request completes.
      this.setState({ name: 'Andrej '});
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">N O R D S T R O M  R A C K | H A U T E L O O K</h1>
          {/* <h3>L U N C H</h3> */}
        </header>
        <p className="App-intro">
          <button>
              WHAT'S FOR LUNCH
          </button>
        </p>
      </div>
    );
  }
}

export default App;
