//constant variables to be referenced
const menu = document.querySelector(".menu");
const navBar = document.getElementsByClassName("nav");
const openModalButtons= document.querySelectorAll('[data-modal-target');
const closeModalButtons= document.querySelectorAll('[data-close-button]');
const overlay= document.getElementById('overlay');
const modalButtons = Array.from(document.querySelectorAll(".modal-button"));
const burgerMenu= document.getElementById("toggle");
const menuItems= document.getElementsByClassName("menu-item");

//Add event listener to modal buttons
openModalButtons.forEach(modal => {
    modal.addEventListener('click', () => {
        openModal(modal)
    })
});

//Add event listener to overlay
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal)
    }) 
});

//Add event listener to close modal buttons
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal= button.closest('.modal');
        closeModal(modal)
    })
});

//Open modal button
function openModal(modal) {
    modal= modal.nextElementSibling
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
};

//Close modal button
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
};

// Works out whether menu is open or not and provides a boolean
const navIsOpen = function() {
    if (menu.classList.contains ("nav-open")) {
        return true;
    }
    else {
        return false;
    }
};

// Adds open class to nav bar and removes closed class
const openNav = () => {
    menu.classList.add("nav-open");
    menu.classList.remove("nav-close");
};

// Adds closed class to nav bar and removes open class
const closeNav = () => {
    menu.classList.remove("nav-open");
    menu.classList.add("nav-close");
};

//Displays burger menu
function displayMenu() {
    navIsOpen() ? closeNav() : openNav();
};

//Add event listener to toggle button
burgerMenu.addEventListener('click', displayMenu);

//Add event listener to nav buttons
menuItems.forEach(
    function(menuItem) {
        menuItems.addEventListener("click", displayMenu);
    }
);