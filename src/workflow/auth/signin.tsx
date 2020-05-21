import React, { useState } from 'react';
import { SignInInterface } from '../../helpers/interface';
import Input from '../../helpers/input';

function sendData(userName: string, firstName: string, lastName: string, passWord: string, checkBox: boolean, props: SignInInterface) {
   if (userName && firstName && lastName && passWord) {
      props.create({
         userName: userName,
         firstName: firstName,
         lastName: lastName,
         passWord: passWord,
         checkBox: checkBox,
      });
   }

   return;
}

const SignIn: React.FunctionComponent<SignInInterface> = (props: SignInInterface): React.ReactElement => {
   const [userName, setUserName] = useState<string>('');
   const [firstName, setFirstName] = useState<string>('');
   const [lastName, setLastName] = useState<string>('');
   const [passWord, setPassword] = useState<string>('');
   const [checked, setCheckBox] = useState<boolean>(false);

   const getUsername = (value: string): void => {
      console.log(value);
      setUserName(value);
   }

   const getFirstName = (value:string):void => {
      setFirstName(value);
   }

   const getLastName = (value:string):void => {
      setLastName(value);
   }

   const getPassword = (value:string):void => {
      setPassword(value);
   }

   return (
      <React.Fragment>
         <div className="p-3" style={{ marginTop: '61px' }}>
            <Input type="text" placeholder="Username" id="signin_username" value={getUsername} class="bg-transparent rounded p-2 mb-3 col-sm d-block border inputField" />
            <Input type="text" placeholder="First Name" id="signin_firstname" value={getFirstName} class="bg-transparent rounded p-2 mb-3 col-sm d-block border inputField" />
            <Input type="text" placeholder="Last Name" id="signin_lastname" value={getLastName} class="bg-transparent rounded p-2 mb-3 col-sm d-block border inputField" />
            <Input type="text" placeholder="Password" id="signin_password" value={getPassword} class="bg-transparent rounded p-2 mb-3 col-sm d-block border inputField" />
            <button
               type="button"
               className="btn d-block mx-auto col-sm-3 py-1 signinBlue text-white"
               onClick={() => sendData(userName, firstName, lastName, passWord, checked, props)}>Sign Up</button>
            <p className="text-center m-0 p-0 mt-4">
               <small>Already have an Account? </small>
               <small className="pointer loginColor" onClick={() => props.exist(true)}>Login!</small>
            </p>
         </div>         
      </React.Fragment>
   );
}

export default SignIn;