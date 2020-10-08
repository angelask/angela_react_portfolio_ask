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
	      <Route exact path={["/", "/angela_react_portfolio_ask"]} component={ Home } />
	      <Route path={["/contact", "/angela_react_portfolio_ask/contact"]}  component={ Contact } />
	      <Route path={["/portfolio", "/angela_react_portfolio_ask/portfolio"]} component={ Portfolio } />
            </Switch>
            <Footer/>
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
