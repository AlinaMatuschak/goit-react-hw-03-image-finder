import React from 'react';
import T from 'prop-types';
import {gallery, galleryItem} from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';

const Gallery = ({photos, query}) => (
    <ul className={gallery}>
          {photos
            .map(photo => (
            <li className={galleryItem} key={photo.id}>
                <PhotoCard photo={photo} query={query} />
            </li>
            ))}
      </ul>
);

Gallery.propTypes = {
    photos: T.array.isRequired,
    query: T.string.isRequired,
  }

export default Gallery;
