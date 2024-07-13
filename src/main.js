import { showError, createMarkup, list, lightbox, loader, toggleLoader,loadMoreBtn, showEndOfResultsMessage, toggleLoadMoreButton } from "./js/render-functions";
import { searchImages } from "./js/pixabay-api";

const form = document.querySelector('.js-search-form');

let page = 1;
let q = '';
let totalHits = 0;

const handlerAddSearch = async (event) => {
  event.preventDefault();
  
  const inputForm = event.currentTarget;
  q = inputForm.elements.query.value.trim();
  
    if (!q) {
      list.innerHTML = "";
      toggleLoadMoreButton(false);
        return showError();
    }
  page = 1;
  list.innerHTML = ""; 

  toggleLoadMoreButton(false);
  toggleLoader(true);

try {
  const { hits, totalHits } = await searchImages(q, page);
  if (hits.length === 0) {
            toggleLoader(false);
            return showError('No images found. Please try another search term.');
        }
  createMarkup(hits);
  lightbox.refresh();
        if (totalHits > hits.length) {
            toggleLoadMoreButton(true);
        }
    } catch (error) {
        showError('An error occurred while fetching images.');
        console.error(error);
    } finally {
        toggleLoader(false);
    }

    inputForm.reset();
};

const fetchImages = async (q, page) => {
    const data = await searchImages(q, page);
    if (data.hits.length === 0) {
        list.innerHTML = "";
        throw new Error('No images found');
    }
    totalHits = data.totalHits;
    return data;
};

const handleLoadMore = async () => {
    page += 1;
    toggleLoader(true);
    toggleLoadMoreButton(false);

    try {
        const { hits } = await fetchImages(q, page);
      createMarkup(hits);
      lightbox.refresh();
        const displayedImages = document.querySelectorAll('.gallery-item').length;
        if (displayedImages < totalHits) {
            toggleLoadMoreButton(true);
        } else {
            showEndOfResultsMessage();
        }

        scrollPage();
    } catch (error) {
        showError('An error occurred while fetching images.');
        console.error(error);
    } finally {
        toggleLoader(false);
    }
};

const scrollPage = () => {
    const galleryItemHeight = document.querySelector('.gallery-item').getBoundingClientRect().height;
    window.scrollBy({
        top: galleryItemHeight * 2,
        behavior: 'smooth'
    });
};

form.addEventListener("submit", handlerAddSearch);
loadMoreBtn.addEventListener("click", handleLoadMore);



