import React, {Fragment} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import Login from './login';
import SignIn from './signin';
import request from '../../helpers/helper';
import {AuthoriseState, ILoginResponse} from '../../helpers/interface';

class Auth extends React.Component<RouteComponentProps, AuthoriseState> {
   state: AuthoriseState = {
      userExist: true,
      loginData: '',
      signinData: '',
   };

   getLoginCredentials = (credentials: object): void => {
      this.setState({loginData: credentials}, () => {
         request.post('login', this.state.loginData, (XHTTP: XMLHttpRequest) => {
            const response: ILoginResponse = JSON.parse(XHTTP.responseText);
            console.log(response);
            if (response.token) {
               window.location.assign(`/${response.user._id}/home`);
            } else {
               alert('Incorrect UserName or Password');
            }
         });
      });
   };

   getSignUpCredentials = (credentials: object) => {
      this.setState({signinData: credentials}, () => {
         request.post('signIn.js', this.state.signinData, (XHTTP: XMLHttpRequest) => {
            const response = JSON.parse(XHTTP.responseText);
            alert((response.status) ? 'User has been Registered Successfully' : 'User has already been Registered');
            this.setState({userExist: true});
         });
      });
   };

   createUser = (a: boolean): void => {
      this.setState({userExist: a});
   };

   existingUser = (a: boolean): void => {
      this.setState({userExist: a});
   };

   render(): React.ReactNode {
      return (
         <Fragment>
            <div className="row" style={{height: '-webkit-fill-available'}}>
               <section className="col-sm-6 p-0 m-0 position-relative">
                  <div className="col-sm-8 p-0 m-0 position-absolute" style={{top: '40%', left: '10%'}}>
                     <h1 className="m-0" style={{fontSize: '3.4rem'}}><strong className="text-white">Welcome User,</strong></h1>
                     <p className="m-0 p-0 text-white">
                        {this.state.userExist ? 'Please Login to your Account' : 'Please Create your Account'}
                     </p>
                  </div>
               </section>
               <section className="col-sm-6 p-0 m-0 position-relative">
                  <div className="col-sm-7 p-0 mx-auto position-absolute bg-white box_shadow" style={{top: '17%', left: '25%', borderRadius: '18px', height: '450px'}}>
                     {
                        this.state.userExist
                           ? <Login credentials={this.getLoginCredentials} newUser={this.createUser} />
                           : <SignIn create={this.getSignUpCredentials} exist={this.existingUser} />
                     }
                  </div>
               </section>
            </div>
         </Fragment>
      );
   }
}

export default withRouter(Auth);