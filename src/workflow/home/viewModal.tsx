import React from 'react';
import { Item } from './home';

interface Props {
     item: Item,
}

const View: React.FunctionComponent<Props> = (props: Props) => {
     const { _id, itemName, description, category, imageURL } = props.item;
     return (
          <div className="modal fade" id={_id} role="dialog" tabIndex={-1} aria-labelledby={_id} aria-hidden="true">
               <div className="modal-dialog" role="document">
                    <div className="modal-content">
                         <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                   <span aria-hidden="true">&times;</span>
                              </button>
                         </div>
                         <div className="modal-body">
                              <div className="d-flex justify-content-between col-sm p-0">
                                   <section className="col-sm-3 p-0 pt-2">
                                        <img alt="" src={imageURL} width='120' height='120' />
                                   </section>
                                   <section className="col-sm-8 p-0">
                                        <h5><strong>{itemName}</strong></h5>
                                        <small className="p-0 m-0">{description}</small>
                                   </section>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default View;