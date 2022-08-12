import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import {
  StyledModalBackground,
  StyledModalCard,
  StyledModalCardImg,
} from 'components/Modal/Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }

  hendleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  hendleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <StyledModalBackground onClick={this.hendleBackdropClick}>
        <StyledModalCard>
          <StyledModalCardImg src="" alt="" />
        </StyledModalCard>
      </StyledModalBackground>,
      modalRoot
    );
  }
}

export default Modal;
