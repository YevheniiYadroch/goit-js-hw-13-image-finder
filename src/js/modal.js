const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.lightbox');
const modalImage = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('.lightbox__button');
const modalOverlay = document.querySelector('.lightbox__overlay');

modalOverlay.addEventListener('click', closeAction);
closeBtn.addEventListener('click', closeAction);
window.addEventListener('keydown', escapeCloseAction);
gallery.addEventListener('click', cardClickAction);

function cardClickAction(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('photo')) {
    return;
  };

  modalImage.src = evt.target.dataset.source;
  modalImage.alt = evt.target.alt;
  modal.classList.add('is-open');
}

function closeAction() {
  modalImage.src = '';
  modalImage.alt = '';
  modal.classList.remove('is-open');
};

function escapeCloseAction(evt) {
  if (evt.code !== 'Escape' ) {
    return;
  }
  
  modalImage.src = '';
  modalImage.alt = '';
  modal.classList.remove('is-open');
}
