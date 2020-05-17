import React, { Fragment } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { getRequest, postRequest } from '../../helpers/helper';
import { State, Data, Item, User } from '../../helpers/interface';
import { ItemProvider, Context } from '../../context/context';
import Aside from './aside/aside';
import View from './viewModal';
import Edit from './editModal';

class Home extends React.Component<RouteComponentProps, State> {
     state: State = {
          data: '',
          char: '',
          backup: '',
          user: {},
          loggedIn: false,
     }

     componentDidMount() {
          //this below function calls server to get the details of User through UserID
          getRequest(`${window.location.pathname.split('/')[1]}/home`).then((response:object[]) => {
               this.setState({
                    user: response[0],
               })
          })

          //this below function calls server to get the list of all Items
          getRequest('getItem').then((response: Data) =>
               this.setState({
                    data: response.documents,
                    backup: response.documents,
               })
          )
     }

     private changeCharacter(character: string) {
          let array = this.state.backup;
          let anotherArray: any[] = [];

          if (character === '') {
               this.setState({ data: this.state.backup });
               return;
          }

          switch (character.substring(0, 1)) {
               case '#':
                    if (character.length > 1) {
                         let str: string = character.slice(1, character.length);

                         array.filter((item: Item) => {
                              if ((item.category.substring(0, character.length - 1)).toUpperCase() === str.toUpperCase()) {
                                   anotherArray.push(item);
                              }
                         });
                    } else return;
                    break;
               default:
                    array.filter(function (item: Item) {
                         if ((item.itemName.substring(0, character.length)).toUpperCase() === character.toUpperCase()) {
                              anotherArray.push(item);
                         }
                    });
                    break;
          }

          this.setState({ data: anotherArray });
          return;
     }

     deleteItem = (item:Item):void => {
          postRequest('post', 'deleteItem.js', item, (xhttp: XMLHttpRequest) => {
               //
          })
     }

     like = (item: Item): void => {
          const obj = {
               item: item,
               user: this.state.user,
          }
          postRequest('post', 'likeItemByUser.js', obj, (xhttp: XMLHttpRequest) => {
               const response = JSON.parse(xhttp.responseText);

               //this below function calls server to get the list of all Items
               if (response) {
                    getRequest('getItem').then((response: Data) =>
                         this.setState({
                              data: response.documents,
                              backup: response.documents,
                         })
                    )
               }               
          })
     }

     itemDetails = (item:Item): void => {
          const user = this.state.user as User;
          if (user.isAdmin) {
               window.location.assign(`/${item._id}_${user._id}/details`);
               return;
          }
     }

     render(): React.ReactNode {
          const { data } = this.state;
          const contextObject: Context = {
               total: data.length,
               data: data,
          }

          return (
               <Fragment>
                    <div className="container p-0 mx-auto mt-5">
                         <ItemProvider value={contextObject}>
                              <Aside getValueForSearch={this.changeCharacter.bind(this)} />
                         </ItemProvider>

                         <hr />

                         <div className="border rounded d-flex flex-wrap position-relative justify-content-between px-5">
                              {(data !== '') &&
                                   data.map((item: Item, i: number) => {
                                        return (
                                             <Fragment key={item._id}>
                                                  <section className="col-sm-3 p-0 shadow mr-3 mb-5">
                                                       <section className="col-sm p-0 h-75">
                                                            {
                                                                 (item.imageURL === "")
                                                                      ? <div className="w-100 h-100 bg-white shadow-sm">
                                                                           <img
                                                                                src="https://images.vexels.com/media/users/3/130737/isolated/preview/eda05fc56dfe940a821c06439bb7d49b-growing-plant-icon-by-vexels.png"
                                                                                className="w-100 h-100"
                                                                                alt=""
                                                                           />
                                                                      </div>
                                                                      : <img src={item.imageURL} className="w-100 h-100" alt={item.itemName} />
                                                            }
                                                       </section>

                                                       <section className="col-sm p-0 bg-white h-25">
                                                            <section>
                                                                 <small className="d-block text-center">{item.category}</small>
                                                                 <h5 className="text-center itemTitle pointer" onClick={() => this.itemDetails(item)}>{item.itemName}</h5>
                                                            </section>
                                                            <section className="d-flex justify-content-between px-3">
                                                                 <small onClick={() => this.like(item)} className="pointer">
                                                                      {`Likes: ${item.likes.length}`}
                                                                 </small>
                                                                 <small>Comment</small>
                                                            </section>
                                                       </section>
                                                  </section>

                                                  {/* MODAL */}
                                                  <View item={item} />
                                                  <Edit item={item} />
                                             </Fragment>
                                        )
                                   })
                              }
                         </div>

                    </div>
                    {(this.state.user as User).isAdmin && <button onClick={() => this.props.history.push('/add')}>Add</button>}
               </Fragment>
          )
     }
}

export default withRouter(Home);