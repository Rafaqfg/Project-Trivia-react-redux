import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';
import './App.css';
import Settings from './pages/Settings';
import FeedBack from './pages/FeedBack';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/Feedback" component={ FeedBack } />
        <Route exact path="/Settings" component={ Settings } />
        <Route exact path="/Game" component={ Game } />
        <Route exact path="/" component={ Login } />
      </Switch>
    );
  }
}

export default App;
