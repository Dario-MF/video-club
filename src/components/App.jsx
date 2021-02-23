import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Film from './pages/Film'
import SearchPage from './pages/SearchPage'

const App = () => (
  <Router>
    <Switch> 
      <Route path="/search/:search_word" component={SearchPage} />
      <Route path='/:id'component={Film} />
      <Route path="/" exact component={Home} />
      
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
