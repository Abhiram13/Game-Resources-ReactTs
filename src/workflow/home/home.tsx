import React, { Fragment } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

type State = {
   data: any | Array<any>;
   char: string;
   backup: string | Array<object>;
   user: string | object;
   loggedIn: boolean;
}

interface Data {
   documents: Array<object>;
}

interface Item {
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

   async callBackendAPI() {
      const response = await fetch('/getItem');
      const body = await response.json();

      if (response.status !== 200) throw Error(body.message);
      return body;
   }

   componentDidMount() {
      this.callBackendAPI().then((response:Data) =>
         this.setState({
            data: response.documents,
            backup: response.documents,
         })
      )
   }

   render(): React.ReactNode {
      // const { firstname, lastname } = this.state.user;
      const { data } = this.state;

      return (
         <Fragment>
            <header className="col-sm p-0">
               {/* <h3 className="m-0 p-0 py-3 text-center">{`Welcome, ${firstname} ${lastname}`}</h3> */}
               {/* <small onClick={() => this.logout()}>Logout</small> */}
            </header>

            <div className="container p-0 mx-auto mt-5">
               {/* <ItemProvider value={{ total: data.length, data: data }}>
                        <Aside getValueForSearch={this.changeCharacter.bind(this)} />
                    </ItemProvider> */}
               <hr />

               <div className="border rounded d-flex flex-wrap position-relative">
                  {(data !== '') &&
                     data.map((item: Item, i:number) => {
                        console.log(item);
                        return (
                           <Fragment key={item._id}>
                              <div
                                 className="p-0 position-relative mr-3 d-flex justify-content-between mb-4 shadow-sm pointer"
                                 title={`${item.itemName} | ${item.category}`}
                                 // onClick={() => this.pushDetails(item)}
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
                           </Fragment>
                        )
                     })
                  }
               </div>

            </div>
            {/* <button onClick={() => this.props.history.push('/add')}>Add</button> */}
         </Fragment>
      )
   }
}