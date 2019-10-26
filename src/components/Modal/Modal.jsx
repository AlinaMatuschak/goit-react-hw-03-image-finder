import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';
import T from 'prop-types';
import {backdrop, modal} from './Modal.module.css';

export default class Modal extends Component {
    static propTypes = {
        onClose: T.func.isRequired,
        imageURL: T.string.isRequired,
        query: T.string.isRequired,
    };

  backdropRef = createRef();
  MODAL_ROOT = document.querySelector('#modal-root');

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.props.onClose();
  };

  handleBackdropClick = e => {
    if (this.backdropRef.current && e.target !== this.backdropRef.current) return;
    this.props.onClose();
  };

  render() {
      const {imageURL, query} = this.props;
    return createPortal(
      <div
        className={backdrop}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
        role="presentation"
      >
        <div className={modal}>
            <img src={imageURL} alt={query} />
        </div>
      </div>,
      this.MODAL_ROOT,
    );
  }
}
