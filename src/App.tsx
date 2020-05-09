import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Auth from './workflow/auth/auth';
import './styles/body.css';

function App() {
   return (
      <BrowserRouter>
         <Route path='/' component={Auth} />
      </BrowserRouter>
   );
}

export default App;
