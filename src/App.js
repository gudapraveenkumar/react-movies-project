import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Movies from './components/movies';
import MovieDetails from './components/movieDetails';
import Rentals from './components/rentals';
import Customers from './components/customers';
import NavBar from '../src/components/commons/navbar';
import PageNotFound from '../src/components/commons/page-not-found';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>

        <NavBar />
        <main role="main" className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/page-not-found" component ={PageNotFound}/>
          <Redirect from="/" exact to="/movies"/>
          <Redirect to="/page-not-found"/>
        </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
