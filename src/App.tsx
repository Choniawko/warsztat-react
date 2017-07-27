import * as React from 'react';
import './App.css';
import Header from './Header';
import TaskContainer from './containers/TaskContainer';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
      <Header />  
      <TaskContainer />
      </div>
    );
  }
}

export default App;
