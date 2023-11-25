import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formSearch = document.querySelector('.js-search');
const BASE_URL = 'https://pixabay.com/api/';
const KEY = '40891115-11d0b88dd3a60afc830d1d27f';
let picktures;

const searchParams = new URLSearchParams({
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
})

formSearch.addEventListener('submit', onSearch);

function onSearch(event) {
    event.preventDefault();
    const inputValue = event.target.elements.search.value;


    getPictures(inputValue)
        .then(data => {
            if (!data.hits.length) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            }
        })
        .catch((err) => console.log(err));
}

function getPictures(name) {
    return fetch(`${BASE_URL}?${searchParams}&q=${name}`)
        .then(res => {
            console.log(`${BASE_URL}?${searchParams}&q=${name}`);
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        })
}