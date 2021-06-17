import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, RouteComponentProps, Switch} from 'react-router-dom';
import Header from './header/header';
import ItemList from './list';
import Details from '../details/details';

class Home extends React.Component {
   render(): React.ReactNode {
      return (
         <Fragment>
            <Header />
            <div className="container p-0 mx-auto mt-5">
               <Router>
                  <Route exact path="/home/" component={ItemList} />
                  <Route exact path="/home/details" component={Details} />
               </Router>
            </div>
         </Fragment>
      );
   }
}

export default Home;