import React, { Fragment } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Login from './login';
import SignIn from './signin';
import { type } from 'os';
import { postRequest } from '../../helpers/helper';

type State = {
   loginData: string | object;
   // signinData: String;
   userExist: boolean;
   // refDataFromChild: String;
}

class Auth extends React.Component<RouteComponentProps, State> {
   state: State = {
      userExist: true,
      loginData: '',
   };

   getLoginCredentials = (credentials: object) => {
      this.setState({ loginData: credentials }, () => {
         postRequest('post', 'login.js', this.state.loginData, (XHTTP: XMLHttpRequest) => {
            const response = JSON.parse(XHTTP.responseText);
            console.log(response);
            if (response.access) {
               window.location.assign(`${response.document[0]._id}/home`);
            } else {
               alert('Incorrect UserName or Password');
            }
         });
      });
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

export default withRouter(Auth);