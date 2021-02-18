import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Template from './templates/Template'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'

const App = () => (
  <Router>
    <Template />
    <Switch>
      <Route path="/"><Home /></Route>

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
