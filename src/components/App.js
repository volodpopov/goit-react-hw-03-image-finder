import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './ImageFinder/Searchbar';
import ImageGallery from './ImageFinder/ImageGallery';

import Modal from './ImageFinder/Modal';

import s from './ImageFinder/ImageFinder.module.css';

class App extends Component {
  state = {
    query: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  handleSearchSubmit = query => {
    this.setState({ query });
  };
  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery query={this.state.query} />

        <ToastContainer position="top-center" />
        {this.state.showModal && <Modal onClose={this.toggleModal} />}
      </div>
    );
  }
}

export default App;
