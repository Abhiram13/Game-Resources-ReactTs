import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './header/header';
import ItemList from './list';
import Details from '../details/details';

function NoRoute() {
   return <h5>This Route does not Exist</h5>;
}

class Home extends React.Component {
   render(): React.ReactNode {
      return (
         <Fragment>
            <Header />
            <div className="container p-0 mx-auto mt-5">               
               <Switch>
                  <Route exact path=''>
                     <ItemList />
                  </Route>
                  <Route path="/details">
                     <Details />
                  </Route>
               </Switch>
            </div>
         </Fragment>         
      )
   }
}

export default Home;
export {NoRoute};