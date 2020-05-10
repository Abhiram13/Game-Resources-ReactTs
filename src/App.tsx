import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './workflow/auth/auth';
import Home from './workflow/home/home';
import Form from './workflow/home/form';
import './styles/body.css';

function App() {
   return (
      <Router>
         <Route exact path='/' component={Auth} />
         <Route path='/home' component={Home} />
         <Route path='/add' component={Form} />
      </Router>
   );
}

export default App;
