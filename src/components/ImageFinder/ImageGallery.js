import React, { Component } from 'react';
import s from './ImageFinder.module.css';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from 'react-loader-spinner';
import Modal from './Modal';
import Button from './Button';
import pixabayApi from '../services/pixabay-api';

class ImageGallery extends Component {
  state = {
    hits: [],
    loading: false,
    currentPage: 1,
    showModal: false,
    imageForModal: '',
    title: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.getDataForGallery();
    }
  }

  getDataForGallery = () => {
    this.setState(prevState => ({ loading: true, hits: prevState.hits }));
    pixabayApi
      .fetchImage(this.props.query, this.state.currentPage)
      .then(({ hits }) =>
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  loadMore = () => {
    this.getDataForGallery();
    this.scrollPageToEnd();
  };

  scrollPageToEnd = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 1000);
  };

  onClickGalleryItem = (src, alt) => {
    this.toggleModal();
    this.setState({ imageForModal: src, title: alt });
  };

  render() {
    const { loading, hits, imageForModal, title, showModal } = this.state;
    return (
      <div>
        <ul className={s.ImageGallery}>
          {hits && (
            <ImageGalleryItem
              hits={hits}
              onClickGalleryItem={this.onClickGalleryItem}
            />
          )}
        </ul>
        {loading && (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        )}
        {hits.length !== 0 && <Button loadMore={this.loadMore} />}
        {showModal && (
          <Modal onClick={this.onClickGalleryItem}>
            <img src={imageForModal} alt={title} />
          </Modal>
        )}
      </div>
    );
  }
}

export default ImageGallery;
