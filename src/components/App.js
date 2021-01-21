import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './ImageFinder/Searchbar';
import ImageGallery from './ImageFinder/ImageGallery';

import s from './ImageFinder/ImageFinder.module.css';

class App extends Component {
  state = {
    query: null,
  };

  handleSearchSubmit = query => {
    this.setState({ query });
  };
  render() {
    const { query } = this.state;

    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery query={query} />
        <ToastContainer position="top-center" />
      </div>
    );
  }
}

export default App;
