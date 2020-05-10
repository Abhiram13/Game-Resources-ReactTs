import React, { Fragment } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { getRequest } from '../../helpers/helper';
import { ItemProvider, Context } from '../../context/context';
import Aside from './aside/aside';
import View from './viewModal';

type State = {
     data: any | Array<any>;
     char: string;
     backup: string | Array<object> | any;
     user: string | object;
     loggedIn: boolean;
}

interface Data {
     documents: Array<object>;
}

export interface Item {
     _id: string;
     itemName: string;
     category: string;
     imageURL: string;
     description: string;
}

class Home extends React.Component<RouteComponentProps, State> {
     state: State = {
          data: '',
          char: '',
          backup: '',
          user: '',
          loggedIn: false,
     }

     componentDidMount() {
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

                         <div className="border rounded d-flex flex-wrap position-relative">
                              {(data !== '') &&
                                   data.map((item: Item, i: number) => {
                                        return (
                                             <Fragment key={item._id}>
                                                  <div
                                                       className="p-0 position-relative mr-3 d-flex justify-content-between mb-4 shadow-sm pointer"
                                                       title={item.category}
                                                       data-toggle="modal"
                                                       data-target={`#${item._id}`}
                                                       style={{ height: '200px', width: '48%' }}>
                                                       <div className="rounded" style={{ width: '35%' }}>
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
                                                       </div>
                                                       <div className="" style={{ width: '65%', backgroundColor: '#FFF5F5' }}>
                                                            <div className="p-3">
                                                                 <div className="d-flex justify-content-between">
                                                                      <h4 className="m-0 p-0">{item.itemName}</h4>
                                                                      <img src='https://simpleicon.com/wp-content/uploads/pencil-256x256.png' width='20' height='20' className="align-self-center" alt="" />
                                                                 </div>
                                                                 <p className="p-0 m-0 mt-3" style={{ fontSize: 'small', overflow: 'hidden', height: '118px' }}>{item.description}</p>
                                                            </div>
                                                       </div>
                                                  </div>

                                                  {/* MODAL */}
                                                  <View item={item} />
                                             </Fragment>
                                        )
                                   })
                              }
                         </div>

                    </div>
                    <button onClick={() => this.props.history.push('/add')}>Add</button>
               </Fragment>
          )
     }
}

export default withRouter(Home);