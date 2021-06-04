import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Movies from './components/movies/Movies';
import MovieDetails from './components/movies/MovieDetails';
import TicketDetails from './components/movies/TicketDetails';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/movies' exact component={Movies} />
          <Route path='/movies/:id' exact component={MovieDetails} />
          <Route path='/ticket/:ticket/:price'  component={TicketDetails} />
        </Switch>
      </>
    );
  }
}
