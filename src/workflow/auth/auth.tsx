import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Login from './login';

class Auth extends React.Component<any> {
   render(): React.ReactNode {
      return (
         <Fragment>
            <h1><Login /></h1>
         </Fragment>
      )
   }
}

export default withRouter(Auth);