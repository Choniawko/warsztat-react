import * as React from 'react';
import './App.css';
import { appLogo, Direction } from './AppStyle';

const logo = require('./logo.svg');

const directions: Direction[] = ['normal', 'reverse', 'alternate'];

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {directions.map((direction, index) => (
            <img key={index} src={logo} className={appLogo(direction)} alt="logo" />)
          )}
          <h2>Welcome to React</h2>
        </div>
        <p>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
