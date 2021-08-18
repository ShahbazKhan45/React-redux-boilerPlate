import { React, Component } from 'react';
import Home from './containers/home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App Component</h1>
        <Home />
      </div>
    )
  }
}

export default App;
