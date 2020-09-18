const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080/'
  : 'https://imersao-react-alura-nathipg.herokuapp.com/';

export default {
  URL_BACKEND,
};
