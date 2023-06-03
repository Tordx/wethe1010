import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Profile from './views/profile'
import Home from './views/home'
import BlogPost from './views/blog-post'
import TermsAndConditions from './views/terms-and-conditions'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Profile} exact path="/profile" />
        <Route component={Home} exact path="/" />
        <Route component={BlogPost} exact path="/blog-post" />
        <Route
          component={TermsAndConditions}
          exact
          path="/terms-and-conditions"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
