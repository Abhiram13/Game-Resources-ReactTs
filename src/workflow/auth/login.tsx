import React, { Fragment, Component } from 'react';

interface LoginInterface {
   // getData: any;
   // credentials: any;
   // newUser: any;
}

const Login:React.FunctionComponent<LoginInterface> = (props: LoginInterface):React.ReactElement => {
   return (
      <div className="container pt-5">
         <div className="col-sm-6 p-0 mx-auto rounded shadow">
            <div className="p-3">
               <h4 className="pt-2">Login</h4>
               <hr className="" />
               <input
                  type="text"
                  id="loginusername"
                  className="d-block col-sm p-0 rounded border p-2 mb-3"
                  placeholder="User Name"
                  />
               <input
                  type="text"
                  id="loginpassword"
                  className="d-block col-sm p-0 rounded border p-2 mb-3"
                  placeholder="Password"
                  // value={login_password}
                  // onChange={(event) => handleChange(event, updatePassword)} 
                  />
               <button
                  type="button"
                  className="btn btn-info d-block mx-auto col-sm-3 py-1"
                  // onClick={() => sendLoginCred(login_username, login_password, props)}
                  >Submit</button>
            </div>
            <p className="text-info text-center m-0 p-0 pointer"><small>New User?</small></p>
         </div>
      </div>
   );
}

export default Login;