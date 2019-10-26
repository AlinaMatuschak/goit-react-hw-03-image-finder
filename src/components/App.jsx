import React, { Component } from 'react';
import {app, button} from './App.module.css';
import SearchForm from './SearchForm/SearchForm';
import Gallery from './Gallery/Gallery';
import * as photoAPI from '../services/photo-api';

class App extends Component {
  state={
    photos: [],
    error: null,
    pageNumber: 1,
    query: '',
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchPhotos();
    }
  }

  onSearch = query => {
    this.setState({ query, photos: [], pageNumber: 1 });
  };

  fetchPhotos = () => {
    const { query, pageNumber } = this.state;

    photoAPI
      .fetchPhotos(query, pageNumber)
      .then(photos => {
        this.setState(state => ({
          photos: [...this.state.photos, ...photos.map(({id, webformatURL, largeImageURL, likes, views, comments, downloads}) => {
            return {id, webformatURL, largeImageURL, likes, views, comments, downloads}
          })],
          pageNumber: state.pageNumber + 1,
        }));
      })
      .catch(error => {
        this.setState({ error });
      })
      .finally(()=>{
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
        });
      });
  };

  render() {
    const { photos, error, query } = this.state;
    return (
      <div className={app}>
        <SearchForm onSearch={this.onSearch}/>
        {error && <div>Error:{error}</div>}
        {photos.length > 0 && <Gallery photos={photos} query={query} onOpen={this.openModal}/>}
        {photos.length > 0 && <button className={button} type="button" onClick={this.fetchPhotos}>Load more articles</button> }
      </div>
    );
  }
}

export default App;
