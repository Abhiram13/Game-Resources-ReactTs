import React, {useContext} from 'react';
import {Totalitems} from '../../../context/context';

const TotalItems: React.FunctionComponent = (): React.ReactElement => {
   const context = useContext(Totalitems);
   return (
      <div className="col-sm-1 p-0 d-flex justify-content-between">
         <p className="m-0 p-0 align-self-center">Total Items: </p>
         <p className="m-0 p-0 align-self-center"><strong>{context.total}</strong></p>
         <div></div>
      </div>
   );
};

export default TotalItems;