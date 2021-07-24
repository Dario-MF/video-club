import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Film from './pages/Film';
import SearchPage from './pages/SearchPage';
import GenrePage from './pages/GenrePage';
import '../styles/styles.css';

const App = () => (
  <Router>
    <Switch> 
      <Route exact path="/search/:search_word" component={SearchPage} />
      <Route exact path="/genre/:genre_id" component={GenrePage} />
      <Route exact path='/film/:id'component={Film} />
      <Route path="/"  component={Home} />
      
      <Route component={() => (
        <>
          <h1>Error 404</h1>
          <span>página no encontrada</span>
        </>
      )} />
    </Switch>
  </Router>
)



export default App;
