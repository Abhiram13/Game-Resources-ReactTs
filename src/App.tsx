import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './workflow/auth/auth';
import Home from './workflow/home/home';
import Form from './workflow/home/form';
import Details from './workflow/details/details';
import Profile from './workflow/profile/profile';
import './styles/body.css';

function App() {
     return (
          <Router>
               <Route exact path='/' component={Auth} />
               <Route path='/:id/home' component={Home} />
               <Route path="/:id/details" component={Details} />
               <Route path="/:id/profile" component={Profile} />
               <Route path='/add' component={Form} />
          </Router>
     );
}

export default App;
