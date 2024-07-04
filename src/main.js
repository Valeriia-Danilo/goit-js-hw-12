import { showError, createMarkup, list, lightbox } from "./js/render-functions";
import { searchImages } from "./js/pixabay-api";

const form = document.querySelector('.js-search-form');
const loader = document.querySelector(".js-loader-container");


form.addEventListener("submit", handlerAddSearch);

function handlerAddSearch(event) {
    event.preventDefault();

    const inputForm = event.currentTarget;
    const searchQuery = inputForm.elements.query.value.trim();

    if (searchQuery === "") {
        list.innerHTML = ""; 
        return showError();
    }
   
    list.innerHTML = ""; 
    
    searchImages(searchQuery)
        .then(data => {
            if (data.hits.length === 0) {
                throw new Error('No images found');
            }
            loader.classList.remove('hidden');
            setTimeout(() => {
                loader.classList.add('hidden');
                const markup = createMarkup(data.hits);
                list.innerHTML = markup;
                lightbox.refresh();
            }, 1500); 
        })
        .catch(err => {
            loader.classList.add('hidden');
            showError(err);
        });
    inputForm.reset();
}


