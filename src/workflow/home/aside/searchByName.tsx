import React, {Fragment} from 'react';
import {SearchNameState, SearchNameProps, Item} from '../../../helpers/interface';
import Input from '../../../helpers/input';

class SearchByName extends React.Component<SearchNameProps, SearchNameState> {
   state: SearchNameState = {
      value: '',
      list: '',
      array: [],
   };

   handleChange(value: string): void {
      this.props.getValue(value);
   }

   render() {
      return <Input type="text" placeholder="Search" value={this.handleChange.bind(this)} id="search" />;
   }
}

export default SearchByName;