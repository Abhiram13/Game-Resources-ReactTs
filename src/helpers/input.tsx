import React from 'react';
import {InputProps, InputState} from './interface';

export default class Input extends React.Component<InputProps, InputState> {
   state: InputState = {
      [this.props.id]: '',
   };

   eventHandler = (event: {target: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;}): void => {
      this.setState({
         [this.props.id]: event.target.value,
      }, () => this.props.value(this.state[this.props.id]));
   };

   renderInput(): React.ReactNode {
      const ClassName: string = "bg-transparent rounded p-2 mb-3 col-sm d-block border inputField";

      switch (this.props.type) {
         case 'text':
            return (
               <input
                  type="text"
                  className={ClassName}
                  placeholder={this.props.placeholder}
                  id={this.props.id}
                  value={this.state[this.props.id]}
                  onChange={this.eventHandler}
               />
            );
         case 'number':
            return (
               <input
                  type="text"
                  className={ClassName}
                  placeholder={this.props.placeholder}
                  id={this.props.id}
                  value={this.state[this.props.id]}
                  onChange={this.eventHandler}
               />
            )
         case 'password':
            return (
               <input
                  type="password"
                  className={ClassName}
                  placeholder={this.props.placeholder}
                  id={this.props.id}
                  value={this.state[this.props.id]}
                  onChange={this.eventHandler}
               />
            );
      }
   }

   render = (): React.ReactNode => this.renderInput();
}