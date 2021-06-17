import React, {Fragment} from 'react';
import {State, Item, ItemListProps} from '../../helpers/interface';
import {withRouter, RouteComponentProps, useRouteMatch} from 'react-router-dom';
import {ItemProvider, Context} from '../../context/context';
import Aside from './aside/aside';

const ItemContainer: React.FunctionComponent<ItemListProps> = ({item, redirect}: ItemListProps): React.ReactElement => {
   const defaultImage = "https://images.vexels.com/media/users/3/130737/isolated/preview/eda05fc56dfe940a821c06439bb7d49b-growing-plant-icon-by-vexels.png";
   return (
      <section className="p-0 shadow mb-5 bg-white" style={{width: '22%', borderRadius: '13px'}}>
         <section className="col-sm-9 p-0 mx-auto mt-3" style={{borderRadius: '13px'}}>
            <img src={item.imageURL || defaultImage} className="w-100 h-100" alt={item.itemName} />
         </section>

         <section className="col-sm p-0 bg-white h-25 mt-3 radius">
            <section>
               <h5 className="text-center itemTitle pointer m-0 itemTitle" onClick={() => redirect(item._id)}>{item.itemName}</h5>
               <small className="d-block text-center lightGrey">{item.category}</small>
            </section>
            <section className="d-flex justify-content-between px-3 my-2">
               <small className="pointer">
                  {/* {
                     this.findLikedItem(item, userId)
                        ? <span style={{color: '#FF1968'}}>Liked: {item.likes.length}</span>
                        : <span>Like: {item.likes.length}</span>
                  }  */}
               </small>
               <small>Comment</small>
            </section>
         </section>
      </section>
   )
}

class ItemList extends React.Component<RouteComponentProps, State> {
   state: State = {
      items: [],
      backup: [],
   }

   async componentDidMount() {
      const data: Item[] = await (await fetch('/item/findall')).json() || [];
      this.setState({ items: data, backup: data });
   }

   searchItems(char: string): void {
      const array = this.state.backup;
      let modifiedList: Item[] = [];

      if (char === '') {
         this.setState({items: array});
         return;
      }

      array.filter(function(item: Item) {
         if ((item.itemName.substring(0, char.length)).toUpperCase() === char.toUpperCase()) {
            modifiedList.push(item);
         }
      });

      this.setState({items: modifiedList});
      return;
   }

   redirectToDetails(id: string) {
      const url: string = this.props.location.pathname;
      console.log(this.props);
      // this.props.history.push(url + "details", id);
      this.props.history.push({
         pathname: `${url}details`,
         state: id,
      })
   }

   render(): React.ReactElement {
      const {items} = this.state;
      const contextObject: Context = {
         total: items.length,
         searchFunction: this.searchItems.bind(this)
      };

      return (
         <div className="container p-0 mx-auto mt-5">
            <ItemProvider value={contextObject}>
               <Aside />
            </ItemProvider>

            <hr />

            <div className="d-flex flex-wrap position-relative justify-content-between">
               {items.map((item: Item) => <ItemContainer redirect={this.redirectToDetails.bind(this)} item={item} key={item._id} />)}
            </div>
         </div>
      )
   }
}

export default withRouter(ItemList);

