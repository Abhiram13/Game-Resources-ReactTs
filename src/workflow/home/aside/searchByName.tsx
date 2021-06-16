import React, {Fragment} from 'react';
import {SearchNameState, SearchNameProps, Item} from '../../../helpers/interface';
import Input from '../../../helpers/input';
import {ItemConsumer} from '../../../context/context';

class SearchByName extends React.Component<any, SearchNameState> {
   state: SearchNameState = {
      value: '', list: '', array: [],
   };

   render() {
      return (
         <Fragment>
            <ItemConsumer>
               {item => <Input type="text" placeholder="Search" value={item.searchFunction} id="search" />}
            </ItemConsumer>            
         </Fragment>
      )
   }
}

export default SearchByName;