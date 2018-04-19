import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Todo from './Components/todo';
import Hello from './Components/Hello';
import Welcome from './Components/welcome';
import Mobx from 'comps/mobx'
// import Test from './Components/test';
// import List from './Components/editableList';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

class App extends Component {
  state = {
    show:true
  }

  render() {
    return <Switch>
        <Route path="/welcome" component={Hello} />
        <Route path="/mobx" component={Mobx} />
        <Route path="/" component={Welcome} exact />
        <Route path="*" render={() => <p>gak onok seng podo bosku</p>} />
      </Switch>;
  }
}

export default App;
