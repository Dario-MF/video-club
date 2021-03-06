import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Film from './pages/Film'
import SearchPage from './pages/SearchPage'
import GenrePage from './pages/GenrePage'

const App = () => (
  <Router>
    <Switch> 
      <Route exact path="/search/:search_word" component={SearchPage} />
      <Route exact path="/genre/:genre_id" component={GenrePage} />
      <Route exact path='/:id'component={Film} />
      <Route exact path="/"  component={Home} />
      
      <Route component={() => (
        <>
          <h1>Error 404</h1>
          <span>página no encontrada</span>
        </>
      )} />
    </Switch>
  </Router>
)

/*<Route path="/" exact component={} />*/




export default App;
