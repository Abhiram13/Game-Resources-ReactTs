import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Auth from './workflow/auth/auth';
import Home, {NoRoute} from './workflow/home/home';
import Form from './workflow/home/form';
import Profile from './workflow/profile/profile';
import './styles/body.css';

function App() {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path='/'>
               <Auth />
            </Route>
            <Route path='/home'>
               <Home />
            </Route>            
            <Route>
               <NoRoute />
            </Route>
            {/* <Route path="/:id/details" component={Details} />
         <Route path="/:id/profile" component={Profile} />
         <Route path='/add' component={Form} /> */}
         </Switch>
      </BrowserRouter>
   );
}

export default App;
