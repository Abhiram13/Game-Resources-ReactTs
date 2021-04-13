import React from 'react';
import TotalItems from './totalItems';
import SearchByName from './searchByName';

type Props = {
   getValueForSearch: any;
};

const Aside: React.FunctionComponent<Props> = (props: Props): React.ReactElement => {
   return (
      <aside className="d-flex justify-content-between">
         <TotalItems />
         <SearchByName getValue={props.getValueForSearch} />
      </aside>
   );
};

export default Aside;