import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Auth from './workflow/auth/auth';
import Home from './workflow/home/home';
import Form from './workflow/home/form';
import Profile from './workflow/profile/profile';
import './styles/body.css';

function NoRoute() {
   return <h5>This Route does not Exist</h5>;
}

function App() {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path='/' component={Auth} />
            <Route exact strict path='/home/' component={Home} />
            <Route component={NoRoute} />
         </Switch>
      </BrowserRouter>
   );
}

export default App;
