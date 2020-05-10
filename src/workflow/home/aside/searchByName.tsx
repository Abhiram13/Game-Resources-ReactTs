/* eslint-disable react/no-direct-mutation-state */
import React, { Fragment } from 'react';

interface Props {
   getValue: any;
}

interface Item {
   _id: string,
   itemName: string,
}

interface State {
   value: string,
   list: string,
   array: Item[],
}

class SearchByName extends React.Component<Props, State> {
   state: State = {
      value: '',
      list: '',
      array: [],
   }

   handleChange(event:{ target: HTMLInputElement }) {
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
               this.state.array.map((item:Item, i:number) => {
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
            {/* <div className="px-2 shadow">
               {(this.state.array !== []) && this.renderList()}
            </div> */}
         </Fragment>
      )
   }
}

export default SearchByName;