import React, { Component } from 'react';
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
    e.preventDefault();
    if (this.state.query.trim() === '') {
      toast.error('Enter any word.');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
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
            value={this.state.query}
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

export default Searchbar;
