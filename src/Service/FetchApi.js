import axios from 'axios';

// export default async function fetchImages(searchQuery, page) {
axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '30114983-364137b9a9ec33f130a531f95';
// const filter = `?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`;

//   return await axios.get(`${url}${filter}`).then(response => response.data);
// }
const fetchImages = (searchQuery, page) =>
  axios
    .get(
      `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`
    )
    .then(response => response.data.hits);

const api = { fetchImages };
export default api;
// (
//   const response = await axios.get(`?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`).then(response => response.data);
//   )
