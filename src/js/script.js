import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const formSearch = document.querySelector('.js-search');
const listImages = document.querySelector('.gallery');

formSearch.addEventListener('submit', onSearch);

function onSearch(event) {
    event.preventDefault();
    listImages.innerHTML = '';

    const inputValue = event.target.elements.search.value;

    getPictures(inputValue)
        .then(data => {
            if (!data.hits.length) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            }

            listImages.innerHTML = ("beforeend", createMarkup(data.hits));
            new SimpleLightbox('.gallery a', {
                captions: true,
                captionsData: 'alt',
                captionDelay: 250,
            });
            gallery.refresh();
        })
        .catch((err) => console.log(err));
}

function getPictures(name) {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '40891115-11d0b88dd3a60afc830d1d27f';

    const searchParams = new URLSearchParams({
        key: KEY,
        q: name,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    })

    return fetch(`${BASE_URL}?${searchParams}`)
        .then(res => {
            console.log(`${BASE_URL}?${searchParams}`);
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        })
}

function createMarkup(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
            <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
                width='360'
            />
        </a>
        <h2>Likes</h2>
        <p>${likes}</p>
        <h2>Views</h2>
        <p>${views}</p>
        <h2>Comments</h2>
        <p>${comments}</p>
        <h2>Downloads</h2>
        <p>${downloads}</p>
    </li>`)
        .join('');
}