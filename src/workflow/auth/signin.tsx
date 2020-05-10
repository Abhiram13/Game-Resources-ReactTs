import React, { useState } from 'react';

interface SignInInterface {
   create: any;
   exist: any;
}

function handleChange(event: { target: HTMLInputElement }, state:any):void {
   state(event.target.value);
}

function sendData(userName:string, firstName:string, lastName:string, passWord:string, props:SignInInterface) {
   if (userName && firstName && lastName && passWord) {
      props.create({
         userName: userName,
         firstName: firstName,
         lastName: lastName,
         passWord: passWord,
      })
   }

   return;
}

const SignIn: React.FunctionComponent<SignInInterface> = (props: SignInInterface):React.ReactElement => {
   const [userName, setUserName] = useState<string>('');
   const [firstName, setFirstName] = useState<string>('');
   const [lastName, setLastName] = useState<string>('');
   const [passWord, setPassword] = useState<string>('');

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
                  value={userName}
                  onChange={(event) => handleChange(event, setUserName)} />
               <input
                  type="text"
                  id="firstname"
                  placeholder="First Name"
                  className="d-block col-sm p-0 rounded border p-2 mb-3"
                  value={firstName}
                  onChange={(event) => handleChange(event, setFirstName)} />
               <input
                  type="text"
                  id="lastname"
                  placeholder="Last Name"
                  className="d-block col-sm p-0 rounded border p-2 mb-3"
                  value={lastName}
                  onChange={(event) => handleChange(event, setLastName)} />
               <input
                  type="text"
                  id="password"
                  placeholder="Password"
                  className="d-block col-sm p-0 rounded border p-2 mb-3"
                  value={passWord}
                  onChange={(event) => handleChange(event, setPassword)} />
               <button
                  type="button"
                  className="btn btn-info d-block mx-auto col-sm-3 py-1"
                  onClick={() => sendData(userName, firstName, lastName, passWord, props)}>Submit</button>
            </div>
            <p className="text-info text-center m-0 p-0 pointer"><small onClick={() => props.exist(true)}>Existing User?</small></p>
         </div>
      </div>
   );
}

export default SignIn;