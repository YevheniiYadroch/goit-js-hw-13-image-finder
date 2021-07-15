import galleryTpl from '../template/image-card.hbs'
const gallery = document.querySelector('.gallery');
let page = 1;


async function getImages(keywords, pageNumber) {
    const response = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${keywords}&page=${pageNumber}&per_page=12&key=22510887-179de1f125426041fbaaee690`)
    const images = await response.json();
    return images;
};



async function renderImages(value) {
    try {
        let markUp = '';
        if (gallery.innerHTML !== '') {
            page += 1;
        } else {
            page = 1;
        }
        const images = await getImages(value, page);
        const imagesObject = images.hits;
        imagesObject.forEach(element => {
            markUp += galleryTpl(element);
        });
        gallery.insertAdjacentHTML('beforeend', markUp);
    } catch (error) {
        console.log(error);
    }
};

export default { getImages, renderImages };


