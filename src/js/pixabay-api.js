const API_KEY = '44747047-4a0d613af8d61822ad6089110';


export function searchImages(searchQuery) {
const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(searchQuery)}&image_type=photo&orientation=horizontal&safesearch=true`;
      return fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
    }