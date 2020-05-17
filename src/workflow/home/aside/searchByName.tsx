import React, { Fragment } from 'react';
import { SearchNameState, SearchNameProps, Item } from '../../../helpers/interface';

class SearchByName extends React.Component<SearchNameProps, SearchNameState> {
     state: SearchNameState = {
          value: '',
          list: '',
          array: [],
     }

     handleChange(event: { target: HTMLInputElement }) {
          this.setState({
               value: event.target.value
          }, () => {
               this.props.getValue(this.state.value)
          })
     }

     renderList() {
          return (
               <Fragment>
                    {(this.state.value !== '') &&
                         this.state.array.map((item: Item, i: number) => {
                              return (
                                   <li key={item._id} style={{ listStyleType: 'none' }} className="p-2 border-bottom pointer effect">{item.itemName}</li>
                              )
                         })
                    }
               </Fragment>
          )
     }

     render() {
          return (
               <Fragment>
                    <input
                         type="text"
                         placeholder="Search By Name"
                         className="d-block col-sm-5 p-0 rounded border p-2"
                         value={this.state.value}
                         onChange={this.handleChange.bind(this)}
                    />
               </Fragment>
          )
     }
}

export default SearchByName;