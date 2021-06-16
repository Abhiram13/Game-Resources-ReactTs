import React, {Fragment, useState, useEffect, Dispatch, SetStateAction} from 'react';
import {State, Data, Item, User} from '../../helpers/interface';
import {ItemProvider, Context} from '../../context/context';
import Aside from './aside/aside';

async function fetchItems(): Promise<Item[]> {
   return await (await fetch('item/findall')).json() || [];
}

function changeCharacter(character: string, backup: Item[], setState: Dispatch<SetStateAction<Item[]>>) {   
   let array: Item[] = [];

   if (character === "") {
      setState(backup);
      return;
   }

   backup.filter(function(item: Item) {
      if ((item.itemName.substring(0, character.length)).toUpperCase() === character.toUpperCase()) {
         array.push(item);
      }
   });

   setState(array);   
}

const ItemList: React.FunctionComponent = (): React.ReactElement => {
   const [items, setItems] = useState<Item[]>([]);
   const [backupItems, setBackUpItems] = useState<Item[]>([]);

   useEffect(() => {
      (async () => {
         const items: Item[] = await fetchItems();
         setItems(items);
         setBackUpItems(items);
      })();
   }, []);

   const defaultImage = "https://images.vexels.com/media/users/3/130737/isolated/preview/eda05fc56dfe940a821c06439bb7d49b-growing-plant-icon-by-vexels.png";
   const contextObject: Context = {
      total: items.length,
      data: items,
   };
   
   return (
      <Fragment>
         <div className="container p-0 mx-auto mt-5">
            <ItemProvider value={contextObject}>
               <Aside getValueForSearch={(e: any) => changeCharacter(e.target.value, backupItems, setItems)} />
            </ItemProvider>

            <hr />

            <div className="d-flex flex-wrap position-relative justify-content-between">
               {
                  items.map((item: Item, i: number) => {
                     return (
                        <Fragment key={item._id}>
                           <section className="p-0 shadow mb-5 bg-white" style={{width: '22%', borderRadius: '13px'}}>
                              <section className="col-sm-9 p-0 mx-auto mt-3" style={{borderRadius: '13px'}}>
                                 <img src={item.imageURL || defaultImage} className="w-100 h-100" alt={item.itemName} />
                              </section>

                              <section className="col-sm p-0 bg-white h-25 mt-3 radius">
                                 <section>
                                    <h5 className="text-center itemTitle pointer m-0 itemTitle">{item.itemName}</h5>
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
                        </Fragment>
                     );
                  })
               }
            </div>
         </div>
      </Fragment>
   )
}

export default ItemList;

