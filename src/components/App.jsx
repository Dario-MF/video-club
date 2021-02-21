import React from 'react'
import Template from './templates/Template'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Film from './pages/Film'

const App = () => (
  <Router>
    <Template />
    <Switch> 
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
