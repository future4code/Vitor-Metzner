import React from 'react'
import { Switch, Route , BrowserRouter} from 'react-router-dom'

import Home from 'home.js';
import ListTrips from 'listtrips.js'

export default function Routes() {   
    return (
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home}/> 
              <Route exact path="/listtrips.js" component={ListTrips}/>   
            </Switch>
        </BrowserRouter>
    );
  }
  