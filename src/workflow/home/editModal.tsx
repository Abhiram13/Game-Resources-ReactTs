import React from 'react';
import { Props } from './viewModal';
import { Item } from './home';
import { postRequest } from '../../helpers/helper';

class Edit extends React.Component<Props, Item> {
     state:Item = {
          _id: '',
          category: '',
          description: '',
          imageURL: '',
          itemName: '',
          rating: 0,          
     }

     componentDidMount() {
          const { _id, itemName, description, rating, category, imageURL } = this.props.item;
          this.setState({
               _id: _id,
               itemName: itemName,
               description: description,
               imageURL: imageURL,
               category: category,
               rating: rating,
          })
     }

     handleChange = (event: {target: HTMLInputElement | HTMLTextAreaElement}):void => {
          switch(event.target.id) {
               case 'editItemName':
                    this.setState({ itemName: event.target.value });
                    return;
               case 'editItemCategory':
                    this.setState({ category: event.target.value });
                    return;
               case 'editItemURL':
                    this.setState({ imageURL: event.target.value });
                    return;
               case 'editItemRating':
                    Number(event.target.value) !== NaN && this.setState({ rating: Number(event.target.value) });
                    return;
               default:
                    this.setState({ description: event.target.value });
                    return;
          }
     }

     updateItem = () => {
          postRequest('post', 'updateItem.js', this.state, (xhttp:XMLHttpRequest) => {
               //
          })
     }

     render(): React.ReactNode {
          const { rating, description, category, itemName, imageURL } = this.state;
          return (
               <div className="modal fade" id={`${this.props.item._id}+${this.props.item.itemName}`} role="dialog" tabIndex={-1} aria-labelledby='' aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                         <div className="modal-content">
                              <div className="modal-header">
                                   <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                   </button>
                              </div>

                              <div className="modal-body">
                                   <section className="col-sm p-0">
                                        <section className="d-flex justify-content-between">
                                             <input
                                                  id="editItemName"
                                                  value={itemName}
                                                  onChange={this.handleChange}
                                                  className="d-block col-sm p-0 rounded border p-2 mb-3"
                                             />
                                             <input
                                                  id="editItemCategory"
                                                  value={category}
                                                  onChange={this.handleChange}
                                                  className="d-block col-sm p-0 rounded border p-2 mb-3"
                                             />
                                        </section>
                                        <section className="d-flex justify-content-between">
                                             <input
                                                  id="editItemURL"
                                                  value={imageURL}
                                                  onChange={this.handleChange}
                                                  className="d-block col-sm p-0 rounded border p-2 mb-3"
                                             />
                                             <input
                                                  id="editItemRating"
                                                  value={rating}
                                                  onChange={this.handleChange}
                                                  className="d-block col-sm p-0 rounded border p-2 mb-3"
                                             />
                                        </section>
                                        <textarea
                                             rows={15}
                                             className="d-block col-sm p-0 rounded border p-2 mb-3"
                                             id="Description"
                                             value={description}
                                             onChange={this.handleChange}
                                        >
                                        </textarea>
                                   </section>
                              </div>

                              <div className="modal-footer d-flex justify-content-between">
                                   <button type="button" className="btn btn-info" onClick={this.updateItem}>Update</button>
                                   <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                              </div>
                         </div>
                    </div>
               </div>
          )
     }
}

export default Edit;