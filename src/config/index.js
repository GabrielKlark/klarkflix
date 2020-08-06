    
  const URL_Backend = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080'
    : 'https://klarkflix.herokuapp.com';
    
    export default {
        URL_Backend,
    }