import React, { Component } from 'react';
import s from './ImageFinder.module.css';

export default class Button extends Component {
  render() {
    return (
      <button
        type="button"
        className={s.Button}
        data-action="load-more"
        onClick={this.props.loadMore}
      >
        Load more
      </button>
    );
  }
}
