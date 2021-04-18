import React, {useEffect, useState} from 'react';
import {User, ICookieLoginResponse} from '../../../helpers/interface';

function redirect(url: string): void {
   window.location.assign(url);
}

const Header: React.FunctionComponent = (): React.ReactElement => {
   const obj: User = {
      _id: '',
      firstname: '',
      isAdmin: true,
      lastname: '',
      password: '',
      username: '',
   };

   const [user, getUser] = useState<User>(obj);

   useEffect(() => {
      (async function() {
         const response: ICookieLoginResponse = await (await fetch("fetchUserCookie")).json();
         getUser(JSON.parse(response.message));
      })();
   }, []);

   const logout = () => {
      document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.location.assign("/");
   }

   return (
      <header>
         <div className="container mx-auto m-0 p-0">
            <div className="d-flex justify-content-between py-3">
               <section>Welcome, {user.firstname ?? ""} {user.lastname ?? ""}</section>
               <section className="d-flex justify-content-between col-sm-3 p-0">
                  <span className="pointer" onClick={() => redirect(`/home`)}>Home</span>
                  <span className="pointer">Profile</span>
                  <span className="pointer" onClick={() => logout()}>Log Out</span>
               </section>
            </div>
         </div>
      </header>
   );
};

export default Header;