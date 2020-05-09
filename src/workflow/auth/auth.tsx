import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Login from './login';
import SignIn from './signin';
import { type } from 'os';

type Props = {
   history: Object;
}

type State = {
   loginData: String | Object;
   // signinData: String;
   userExist: Boolean;
   // refDataFromChild: String;
}

class Auth extends React.Component<Props, State> {
   state: State = {
      userExist: true,
      loginData: '',
   };

   getLoginCredentials = (credentials: Object) => {
      this.setState({ loginData: credentials })
   }
   
   createUser = (a:boolean):void => {
      this.setState({ userExist: a });
   }

   render(): React.ReactNode {
      return (
         <Fragment>
            {
               this.state.userExist
                  ? <Login credentials={this.getLoginCredentials} newUser={this.createUser} />
                  : <SignIn />
            }          
         </Fragment>
      )
   }
}

export default (Auth);