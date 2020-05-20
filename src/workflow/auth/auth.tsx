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
            <div className="row" style={{ height: '-webkit-fill-available' }}>
               <section className="col-sm-6 p-0 m-0 position-relative" style={{ backgroundColor: 'green' }}>
                  <div className="col-sm-5 p-0 m-0 position-absolute" style={{ top: '30%', left: '37%' }}>
                     <h1 style={{ fontSize: '4.4rem' }}><strong className="text-white">{this.state.userExist ? 'Login' : 'SignUp'}</strong></h1>
                     <p className="m-0 p-0 text-white">Please Login to your Account</p>
                  </div>
               </section>
               <section className="col-sm-6 p-0 m-0 position-relative">
                  {
                     this.state.userExist
                        ? <Login credentials={this.getLoginCredentials} newUser={this.createUser} />
                        : <SignIn create={this.getSignUpCredentials} exist={this.existingUser} />
                  }
               </section>
            </div>
         </Fragment>
      )
   }
}

export default withRouter(Auth);