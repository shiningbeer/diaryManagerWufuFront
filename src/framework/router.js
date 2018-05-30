import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

import Find from '../pages/findPage'
import Favorite from '../pages/favoritePage'
import Mine from '../pages/minePage'



const MyRouter = () =>{
 return <Router>
    <div>
      <Route exact path="/" render={() => (        
          <Redirect to="/find" />
      )} />
      <Route path="/find" component={Find} />
      <Route path="/favorite" component={Favorite} />
      <Route path="/mine" component={Mine} />

    </div>
  </Router>
}


export default MyRouter

