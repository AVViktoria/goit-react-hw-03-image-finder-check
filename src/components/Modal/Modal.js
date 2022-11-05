import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.closeModal();
    }
  };
  // handleBackdropClick = evt => {
  //   if (evt.currentTarget === evt.target) {
  //     // console.log('currentTarget: ', evt.currentTarget);
  //     // console.log('target: ', evt.target);

  //     this.props.closeModal();
  //   }
  // };
  render() {
    const { largeImg, closeModal } = this.props;
    return createPortal(
      <div
        className="Overlay"
        onClick={e => {
          if (e.target === e.currentTarget) {
            closeModal();
          }
        }}
      >
        <div className="Modal">
          <img src={largeImg} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
//   render() {
//     // const { url, alt } = this.props;
//     return createPortal(
//       <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
//         <div className="Modal__content">
//           <img src={this.props.link} alt="img" />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }

export default Modal;
