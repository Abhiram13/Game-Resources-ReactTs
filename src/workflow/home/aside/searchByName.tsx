import React, {Fragment, useContext} from 'react';
import Input from '../../../helpers/input';
import {Totalitems} from '../../../context/context';

function SearchField() {
   const context = useContext(Totalitems);
   return (
      <Fragment>
         <Input type="text" placeholder="Search" value={context.searchFunction} id="search" />
      </Fragment>
   )
}

export default SearchField;