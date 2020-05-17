import React, { useEffect, useState, Fragment } from 'react';
import request from '../../helpers/helper';
import { Item, Likes } from '../../helpers/interface';

function renderLikes(likes: Likes[], userId: string) {
     let array = [];

     for (let i = 0; i < likes.length; i++) {
          if (likes[i].username === userId) {
               array.push('You');
          } else {
               array.push(`${likes[i].firstname} ${likes[i].lastname}`);
          }
     }

     return array.join(', ');
}

const Details: React.FunctionComponent = (): React.ReactElement => {

     let obj: Item = {
          _id: '',
          category: '',
          comments: [],
          description: '',
          imageURL: '',
          itemName: '',
          likes: [],
          rating: 0,
     }

     const [item, getItem] = useState<Item>(obj);
     const [userID, getUserId] = useState<string>('');

     // below method will only be called when Component gets Mounted
     useEffect(() => {
          const [itemId, userId] = window.location.pathname.split('/')[1].split('_');

          request.get(`${itemId}/details`).then((response: Item) => {
               getItem(response as Item);
               getUserId(userId);
          });
     }, []);

     console.log(item);
     return (
          <Fragment>
               <section className="container m-0 p-0 mx-auto">
                    <div className="col-sm p-0 d-flex justify-content-between">
                         {
                              item &&
                              <Fragment>
                                   <section className="col-sm-4 p-0"></section>
                                   <section className="col-sm-5 p-0 m-0">
                                        <h5>{item.itemName}</h5>
                                        <p className="m-0 p-0">{item.description}</p>
                                        <span>
                                             Liked by <strong>{renderLikes(item.likes, userID)}</strong>
                                        </span>
                                   </section>
                              </Fragment>
                         }
                    </div>
               </section>
          </Fragment>
     )
}

export default Details;