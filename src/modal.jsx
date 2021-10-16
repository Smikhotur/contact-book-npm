import React, {Component} from 'react';
import {createPortal} from 'react-dom';

export default class Modal extends Component {
  render() {
    return createPortal(
      <div onClick={this.props.onClick}>{this.props.children}</div>,
      document.getElementById('modal_root')
    );
  }
}
