import React, {useState} from 'react';
import {LoginInterface} from '../../helpers/interface';
import Input from '../../helpers/input';

function sendLoginCred(login: string, password: string, props: LoginInterface): void {
   if (login && password) {
      props.credentials({
         username: login,
         password: password,
      });
   }
}

const Login: React.FunctionComponent<LoginInterface> = (props: LoginInterface): React.ReactElement => {
   const [username, updateUserName] = useState<string>('');
   const [password, updatePassWord] = useState<string>('');

   const getValue = (value: string): void => updateUserName(value);
   const getPassWord = (password: string): void => updatePassWord(password);

   return (
      <React.Fragment>
         <div className="p-3" style={{marginTop: '106px'}}>
            <Input type="text" placeholder="Username" id="123" value={getValue} />
            <Input type="password" placeholder="Password" id="1pass" value={getPassWord} />
            <button
               type="button"
               className="btn text-white d-block mx-auto col-sm-3 py-1 loginGreen"
               onClick={() => sendLoginCred(username, password, props)}>Login</button>
            <p className="text-center m-0 p-0 mt-4">
               <small>Don't have an Account? </small>
               <small className="signinColor pointer" onClick={() => props.newUser(false)}>Sign Up!</small>
            </p>
            {/* <small className="m-0 p-0 mt-5 d-block text-center">Incorrect Password</small> */}
         </div>
      </React.Fragment>
   );
};

export default Login;