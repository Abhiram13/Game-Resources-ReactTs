import React, { Fragment, Component } from 'react';

interface SignInInterface {
   //
}

const SignIn: React.FunctionComponent<SignInInterface> = (props: SignInInterface) => {
   return (
      <div className="container pt-5">
         <div className="col-sm-6 p-0 mx-auto rounded shadow">
            <div className="p-3">
               <h4 className="pt-2">Sign Up</h4>
               <hr className="" />
               <input
                  type="text"
                  id="username"
                  placeholder="User Name"
                  className="d-block col-sm p-0 rounded border p-2 mb-3"
                  />
               <input
                  type="text"
                  id="firstname"
                  placeholder="First Name"
                  className="d-block col-sm p-0 rounded border p-2 mb-3"
                  />
               <input
                  type="text"
                  id="lastname"
                  placeholder="Last Name"
                  className="d-block col-sm p-0 rounded border p-2 mb-3"
                  />
               <input
                  type="text"
                  id="password"
                  placeholder="Password"
                  className="d-block col-sm p-0 rounded border p-2 mb-3"
                  />
               <button
                  type="button"
                  className="btn btn-info d-block mx-auto col-sm-3 py-1">Submit</button>
            </div>
            <p className="text-info text-center m-0 p-0 pointer"><small>Existing User?</small></p>
         </div>
      </div>
   );
}

export default SignIn;