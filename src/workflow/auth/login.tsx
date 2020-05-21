import React, { useState } from 'react';
import { LoginInterface } from '../../helpers/interface';
import Input from '../../helpers/input';

function handleChange(event: { target: HTMLInputElement }, state: any): void {
   state(event.target.value);
}

function sendLoginCred(login: string, password: string, props: LoginInterface) {
   if (login && password) {
      props.credentials({
         login_username: login,
         login_password: password,
      })
   }
}

const Login: React.FunctionComponent<LoginInterface> = (props: LoginInterface): React.ReactElement => {
   const [login_username, updateUserName] = useState<string>('');
   const [login_password, updatePassWord] = useState<string>('');

   const getValue = (value: string): void => {
      console.log(value);
      updateUserName(value);
   }

   const getPassWord = (password: string): void => {
      console.log(password);
      updatePassWord(password);
   }

   return (
      <React.Fragment>
         <div className="p-3" style={{ marginTop: '106px' }}>
            <Input type="text" placeholder="Username" id="123" value={getValue} class="bg-transparent rounded p-2 mb-3 col-sm d-block border inputField" />
            <Input type="password" placeholder="Password" id="1pass" value={getPassWord} class="bg-transparent rounded p-2 mb-3 col-sm d-block border inputField" />
            <button
               type="button"
               className="btn text-white d-block mx-auto col-sm-3 py-1 loginGreen"
               onClick={() => sendLoginCred(login_username, login_password, props)}>Login</button>
            <p className="text-center m-0 p-0 mt-4">
               <small>Don't have and Account? </small>
               <small className="signinColor pointer" onClick={() => props.newUser(false)}>Sign Up!</small>
            </p>
            {/* <small className="m-0 p-0 mt-5 d-block text-center">Incorrect Password</small> */}
         </div>     
      </React.Fragment>
   );
}

export default Login;