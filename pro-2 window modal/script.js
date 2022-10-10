'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// closing of the classes
const hideModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// showing of the modal
const showModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', showModal);
}

btnCloseModal.addEventListener('click', hideModal);


// keyboard event button 
document.addEventListener('keydown', function btnPressed($event) {
    if ($event?.keyCode === 27) {
        hideModal();
    }
});