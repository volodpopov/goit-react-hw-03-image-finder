import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageFinder.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { hits, onClickGalleryItem } = this.props;

    return hits.map(({ id, webformatURL, largeImageURL, tags }) => (
      <li
        key={id}
        className={s.ImageGalleryItem}
        onClick={() => onClickGalleryItem(largeImageURL, tags)}
      >
        <img
          src={webformatURL}
          alt={tags}
          className={s.ImageGalleryItem_image}
        />
      </li>
    ));
  }
}
ImageGalleryItem.propTypes = {
  onClickGalleryItem: PropTypes.func.isRequired,
  hits: PropTypes.array.isRequired,
};

export default ImageGalleryItem;
