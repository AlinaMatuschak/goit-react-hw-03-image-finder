export const fetchPhotos = (query = '', pageNumber = 1) => {
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${pageNumber}&per_page=12&key=14069784-264cd694fe843795bae74c565`,
    )
      .then(res => res.json())
      .then(data => data.hits);
  };
