const fetchImage = (query, currentPage) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '18796683-6210221644807583f1ab11642';

  return fetch(
    `${BASE_URL}?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(res => res.json());
};

export default { fetchImage };
