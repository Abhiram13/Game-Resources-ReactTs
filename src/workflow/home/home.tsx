import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './header/header';
import ItemList from './list';

class Home extends React.Component {
   render(): React.ReactNode {
      return (
         <Fragment>
            <Header />
            <div className="container p-0 mx-auto mt-5">
               <Router>
                  <Route exact path=''>
                     <ItemList />
                  </Route>
               </Router>
            </div>
         </Fragment>         
      )
   }
}

export default Home;