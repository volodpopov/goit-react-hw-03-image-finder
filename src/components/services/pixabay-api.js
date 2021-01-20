const fetchImage = (query, currentPage) => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=18796683-6210221644807583f1ab11642&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(res => res.json());
};

export default { fetchImage };
