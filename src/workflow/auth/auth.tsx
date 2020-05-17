import React, { Fragment } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Login from './login';
import SignIn from './signin';
import request from '../../helpers/helper';
import { AuthoriseState } from '../../helpers/interface';

class Auth extends React.Component<RouteComponentProps, AuthoriseState> {
     state: AuthoriseState = {
          userExist: true,
          loginData: '',
          signinData: '',
     };

     getLoginCredentials = (credentials: object) => {
          this.setState({ loginData: credentials }, () => {
               request.post('login.js', this.state.loginData, (XHTTP: XMLHttpRequest) => {
                    const response = JSON.parse(XHTTP.responseText);
                    if (response.access) {
                         window.location.assign(`/${response.document[0]._id}/home`);
                    } else {
                         alert('Incorrect UserName or Password');
                    }
               })
          });
     }

     getSignUpCredentials = (credentials: object) => {
          this.setState({ signinData: credentials }, () => {
               request.post('signIn.js', this.state.signinData, (XHTTP: XMLHttpRequest) => {
                    const response = JSON.parse(XHTTP.responseText);
                    alert((response.status) ? 'User has been Registered Successfully' : 'User has already been Registered');
                    this.setState({ userExist: true });
               })
          })
     }

     createUser = (a: boolean): void => {
          this.setState({ userExist: a });
     }

     existingUser = (a: boolean): void => {
          this.setState({ userExist: a });
     }

     render(): React.ReactNode {
          return (
               <Fragment>
                    {
                         this.state.userExist
                              ? <Login credentials={this.getLoginCredentials} newUser={this.createUser} />
                              : <SignIn create={this.getSignUpCredentials} exist={this.existingUser} />
                    }
               </Fragment>
          )
     }
}

export default withRouter(Auth);