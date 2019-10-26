import React, { Component } from 'react';
import T from 'prop-types';
import { photoCard, stats, statsItem, fullscreenButton } from './PhotoCard.module.css';
import Modal from '../Modal/Modal';

class PhotoCard extends Component {
    static propTypes = {
        photo: T.object.isRequired,
        query: T.string.isRequired,
    };

    state = { isModalOpen: false };
    
    openModal = () => this.setState({ isModalOpen: true });
    
    closeModal = () => this.setState({ isModalOpen: false });

  render() {
      const {photo:{ webformatURL, largeImageURL, likes, views, comments, downloads }, query} = this.props;
    return (
      <div className={photoCard}>
        <img src={webformatURL} alt={query} />

        <div className={stats}>
          <p className={statsItem}>
            <i className="material-icons">thumb_up</i>
            {likes}
          </p>
          <p className={statsItem}>
            <i className="material-icons">visibility</i>
            {views}
          </p>
          <p className={statsItem}>
            <i className="material-icons">comment</i>
            {comments}
          </p>
          <p className={statsItem}>
            <i className="material-icons">cloud_download</i>
            {downloads}
          </p>
        </div>

        <button type="button" className={fullscreenButton} onClick={this.openModal}>
          <i className="material-icons">zoom_out_map</i>
        </button>
        {this.state.isModalOpen && <Modal onClose={this.closeModal} imageURL={largeImageURL} query={query}></Modal>}
      </div>
    );
  }
}

export default PhotoCard;
