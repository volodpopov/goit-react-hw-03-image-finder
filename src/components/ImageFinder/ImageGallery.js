import React, { Component } from 'react';
import s from './ImageFinder.module.css';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from 'react-loader-spinner';
import Button from './Button';

class ImageGallery extends Component {
  state = {
    hits: null,
    loading: false,
    currentPage: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, currentPage } = this.props;

    if (prevProps.query !== query) {
      this.setState({ loading: true, hits: null });
      fetch(
        `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=18796683-6210221644807583f1ab11642&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(({ hits }) => this.setState({ hits }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { loading, hits } = this.state;

    return (
      <div>
        {loading && (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        )}
        <ul className={s.ImageGallery}>
          {hits && <ImageGalleryItem hits={hits} />}
        </ul>
        {hits && <Button />}
      </div>
    );
  }
}

export default ImageGallery;
