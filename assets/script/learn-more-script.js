//constant variables to be referenced
const wrapper = document.querySelector(".wrapper");
const navBar = document.getElementsByClassName("nav");
const openModalButtons= document.querySelectorAll('[data-modal-target');
const closeModalButtons= document.querySelectorAll('[data-close-button]');
const overlay= document.getElementById('overlay');
const modalButtons = Array.from(document.querySelectorAll(".modal-button"));

openModalButtons.forEach(modal => {
    modal.addEventListener('click', () => {
        openModal(modal)
    })
});


overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal)
    }) 
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal= button.closest('.modal');
        closeModal(modal)
    })
});

function openModal(modal) {
    modal= modal.nextElementSibling
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
};

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
};

// Burger Menu
const navIsOpen = function() {
    if (wrapper.classList.contains ("nav-open")) {
        return true;
    }
    else {
        return false;
    }
};
const openNav = () => {
    wrapper.classList.add("nav-open");
    wrapper.classList.remove("nav-close");
};
const closeNav = () => {
    wrapper.classList.remove("nav-open");
    wrapper.classList.add("nav-close");
};

//Displays burger menu
function displayMenu() {
    navIsOpen() ? closeNav() : openNav();
};