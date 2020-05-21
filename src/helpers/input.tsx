import React from 'react';
import { InputProps, InputState } from './interface';

export default class Input extends React.Component<InputProps, InputState> {
   state:InputState = {
      [this.props.id]: '',
   }

   eventHandler = (event: {target: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement}):void => {
      this.setState({
         [this.props.id]: event.target.value,
      }, () => this.props.value(this.state[this.props.id]));
   }

   renderInput():React.ReactNode {
      switch (this.props.type) {
         case 'text':
            return <input type="text" className={this.props.class} placeholder={this.props.placeholder} id={this.props.id} value={this.state[this.props.id]} onChange={this.eventHandler} />
         case 'number':
            return <input type="text" className={this.props.class} placeholder={this.props.placeholder} id={this.props.id} value={this.state[this.props.id]} onChange={this.eventHandler} />
         case 'password':
            return <input type="text" className={this.props.class} placeholder={this.props.placeholder} id={this.props.id} value={this.state[this.props.id]} onChange={this.eventHandler} />
      }
   }

   render(): React.ReactNode {
      return this.renderInput()
   }
}