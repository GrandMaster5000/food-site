'use strict';
function closeModal (modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.style.display = 'none';
    document.body.style.overflow = '';
}

function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    console.log(modalTimerId);
    if(modalTimerId){
        clearInterval(modalTimerId);
    }
}

function showModalByScroll(modalTimerId) {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal('.modal', modalTimerId);
        window.removeEventListener('scroll', showModalByScroll);
    }
}

function modal(triggerSelector, modalSelector, modalTimerId) {
      //Modal

      const modalTrigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector);     

        modalTrigger.forEach(item => {
            item.addEventListener('click', () => openModal(modalSelector, modalTimerId));
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.getAttribute('data-close') == "") {
                closeModal(modalSelector);
            }
        });

        document.addEventListener('keydown', (e) => {
            if(e.code === 'Escape' && modal.style.display == 'block') {
                closeModal(modalSelector);
            }
        });

       
        window.addEventListener('scroll', () => showModalByScroll(modalTimerId));
}

export default modal;
export {closeModal, openModal, showModalByScroll};