import React, { Component } from 'react';
import s from './ImageFinder.module.css';

// function ImageGalleryItem({ hits }) {
//   return hits.map(({ id, webformatURL, largeImageURL, tags }) => (
//     <li
//       key={id}
//       className={s.ImageGalleryItem}
//       onClick={this.props.onClickGalleryItem()}
//     >
//       <img src={webformatURL} alt={tags} className={s.ImageGalleryItem_image} />
//     </li>
//   ));
// }
class ImageGalleryItem extends Component {
  render() {
    return this.props.hits.map(({ id, webformatURL, largeImageURL, tags }) => (
      <li
        key={id}
        className={s.ImageGalleryItem}
        onClick={this.props.onClickGalleryItem(largeImageURL, tags)}
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

export default ImageGalleryItem;
