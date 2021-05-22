import React, {Fragment} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import Login from './login';
import SignIn from './signin';
import {PostObject} from '../../helpers/helper';
import {AuthoriseState, ILoginResponse, ICookieLoginResponse, LoginRequest, SignUpRequest} from '../../helpers/interface';

const LoginReq: LoginRequest = {
   password: "",
   username: "",
}

const SignUpReq: SignUpRequest = {
   isAdmin: false,
   firstname: "",
   lastname: "",
   password: "",
   username: "",
}

class Auth extends React.Component<RouteComponentProps, AuthoriseState> {
   state: AuthoriseState = {
      userExist: true,
      loginData: LoginReq,
      signinData: SignUpReq,
   };
   
   async componentDidMount() {
      const request = await fetch("checkToken");
      const body: ICookieLoginResponse = await request.json();
      
      if (body.status === 202) {
         this.props.history.push("/home");
         return;
      }
   }

   headers(): Headers {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json; charset=utf-8');

      return headers;
   }

   getLoginCredentials = async (credentials: LoginRequest): Promise<void> => {
      const res = await fetch("login", PostObject<LoginRequest>(credentials));
      const response: ILoginResponse = await res.json();
      response.user.username && this.props.history.push("/home");
   };

   getSignUpCredentials = async (credentials: SignUpRequest) => {      
      const res = await fetch("login", PostObject<SignUpRequest>(credentials));
      const status: number = res.status;

      switch (status) {
         case 302:
            alert("User already Exists");
            break;
         case 400:
            alert("Provide valid credentials");
            return;
      }

      this.setState({
         userExist: true,
      })
   };

   createUser = (data: boolean): void => this.setState({userExist: data});

   existingUser = (data: boolean): void => this.setState({userExist: data});

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