import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

import NavBar from './components/Navigation/NavBar';
import Footer from "./components/Footer";
import State from './state/context';

import './App.css';

class App extends Component {

  state = {
    user: null
  }

  render() {
    const App = () => (
      <Router>
        <State.Provider value={
          {
            user: this.state.user
          }
        }>
          <main className="main-content">
	    {/*
            <Navigation name={this.state.user} />
            */}
	    <NavBar />
            <Switch>
	      <Route exact path="/" component={ Home } />
	      <Route path="/contact" component={ Contact } />
	      <Route path="/portfolio" component={ Portfolio } />
            </Switch>
          </main>
        </State.Provider>
      </Router>
    )
    return (
      <App />
    )
  }
}

export default App;
