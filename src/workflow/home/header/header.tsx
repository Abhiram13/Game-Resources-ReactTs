import React, {useEffect, useState} from 'react';
import {User} from '../../../helpers/interface';
import request from '../../../helpers/helper';

function redirect(url: string): void {
     window.location.assign(url);
}

const Header: React.FunctionComponent = (): React.ReactElement => {
     const obj: User = {
          _id: '',
          comments: [],
          firstname: '',
          isAdmin: true,
          lastname: '',
          likes: [],
          loggedIn: null,
          password: '',
          username: '',
     };

     const [user, getUser] = useState<User>(obj);
     useEffect(() => {
          const id = window.location.pathname.split('/')[2] === 'details' ? window.location.pathname.split('/')[1].split('_')[0] : window.location.pathname.split('/')[1];
          request.get(`${id}/home`).then((response: User[]) => {
               getUser(response[0]);
          });
     }, []);

     return (
          <header>
               <div className="container mx-auto m-0 p-0">
                    <div className="d-flex justify-content-between py-3">
                         <section>Welcome, {user.firstname} {user.lastname}</section>
                         <section className="d-flex justify-content-between col-sm-3 p-0">
                              <span className="pointer" onClick={() => redirect(`/${user._id}/home`)}>Home</span>
                              <span className="pointer" onClick={() => redirect(`/${user._id}/profile`)}>Profile</span>
                              <span className="pointer">Log Out</span>
                         </section>
                    </div>
               </div>
          </header>
     );
};

export default Header;