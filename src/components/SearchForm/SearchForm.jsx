import React, { Component } from 'react';
import T from 'prop-types';
import style from './SearchForm.module.css';

class SearchForm extends Component {
    static propTypes = {
        onSearch: T.func.isRequired,
    };

    state = { query: ''};

    handleChange = e => {
        this.setState({ query: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.state.query);
        this.setState({ query: '' });
      };

  render() {
    return (
      <form className={style.searchForm} onSubmit={this.handleSubmit}>
        <input 
        type="text" 
        autoComplete="off" 
        placeholder="Search images..." 
        onChange={this.handleChange} />
      </form>
    );
  }
}

export default SearchForm;
