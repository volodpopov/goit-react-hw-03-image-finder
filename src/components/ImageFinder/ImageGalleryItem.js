import s from './ImageFinder.module.css';

function ImageGalleryItem({ hits }) {
  return hits.map(({ id, webformatURL, tags }) => (
    <li key={id} className={s.ImageGalleryItem}>
      <img src={webformatURL} alt={tags} className={s.ImageGalleryItem_image} />
    </li>
  ));
}

export default ImageGalleryItem;
