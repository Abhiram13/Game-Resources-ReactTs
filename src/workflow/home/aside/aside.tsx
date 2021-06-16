import React from 'react';
import TotalItems from './totalItems';
import SearchByName from './searchByName';

const Aside: React.FunctionComponent = (): React.ReactElement => {
   return (
      <aside className="d-flex justify-content-between">
         <TotalItems />
         <SearchByName />
      </aside>
   );
};

export default Aside;