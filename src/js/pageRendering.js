
const searchForm = document.querySelector('.search-form');
const input = document.querySelector('input');
import apiService from './apiService'
const gallery = document.querySelector('.gallery');
let value = '';

function submitHandler(evt) {
    evt.preventDefault();
    gallery.innerHTML = '';
    value = input.value.split(' ').join('+');
    apiService.renderImages(value);
    input.value = '';
}

searchForm.addEventListener('submit', submitHandler);

var options = {
    threshold: 0,
};

const callback = ([entrie], observerRef) => {
    if (gallery.innerHTML === '') {
        return;
    };
    if (entrie.isIntersecting) {
        apiService.renderImages(value);
    }
};

var observer = new IntersectionObserver(callback, options);

var target = document.querySelector('.anchor');

observer.observe(target);

