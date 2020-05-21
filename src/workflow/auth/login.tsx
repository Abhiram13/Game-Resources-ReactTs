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
         <div className="p-3" style={{ marginTop: '61px' }}>
            <Input type="text" placeholder="Username" id="123" value={getValue} class="bg-transparent rounded p-2 mb-3 col-sm d-block border inputField" />
            <Input type="password" placeholder="Password" id="1pass" value={getPassWord} class="bg-transparent rounded p-2 mb-3 col-sm d-block border inputField" />            
            <button
               type="button"
               className="btn btn-info d-block mx-auto col-sm-3 py-1"
               onClick={() => sendLoginCred(login_username, login_password, props)}>Submit</button>
         </div>
         <p className="text-info text-center m-0 p-0 pointer">
            <small onClick={() => props.newUser(false)}>New User?</small>
         </p>
      </React.Fragment>
   );
}

export default Login;