import s from './ImageFinder.module.css';

const Button = () => {
  return (
    <button type="button" className={s.Button} data-action="load-more">
      Load more
    </button>
  );
};

export default Button;
