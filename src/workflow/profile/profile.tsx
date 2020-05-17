import React, { Fragment } from 'react';
import Header from '../home/header/header';
import UserProfile from './userProfile';

const Profile: React.FunctionComponent = () => {
     return (
          <Fragment>
               <Header />
               <UserProfile />
          </Fragment>
     )
};

export default Profile;