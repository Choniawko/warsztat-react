import * as React from 'react';
import { appLogo, Direction } from './AppStyle';

const logo = require('./logo.svg');

const directions: Direction[] = ['normal', 'reverse', 'alternate'];

class Header extends React.Component<{}, {}> {

    render() {
        return (
            <div className="App-header">
            {directions.map((direction, index) => (
                <img key={index} src={logo} className={appLogo(direction)} alt="logo" />)
            )}
          <h2>Welcome to React</h2>
        </div>
        );
    }
}

export default Header;