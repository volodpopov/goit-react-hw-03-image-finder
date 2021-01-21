import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageFinder.module.css';

export default class Button extends Component {
  render() {
    const { loadMore } = this.props;
    return (
      <button
        type="button"
        className={s.Button}
        data-action="load-more"
        onClick={loadMore}
      >
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
