import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import s from './ImageFinder.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };
  handelSubmit = e => {
    const { query } = this.state;
    const { onSubmit } = this.props;

    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Enter any word.');
      return;
    }
    onSubmit(query);
    this.setState({ query: '' });
  };
  render() {
    const { query } = this.state;

    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.handelSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button__label}>Search</span>
          </button>

          <input
            className={s.SearchForm_input}
            type="text"
            name="query"
            value={query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleQueryChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
