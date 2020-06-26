/******* Helper Functions */

function event(element ,eventName, handler) {
    element.addEventListener(eventName, handler);
}


function select(element) {
    return document.querySelector(element);
}




/********************* Selectors */

const nav = select('.header-main')
const burger = select('.navbar-burger')
const burgerTarget = select('#burgerTarget')
const slider = select('.main-carousel')


/**************************Event Handlers */

event( window, 'scroll', stickyNav );
event(burger, 'click', touchNav)
event(window, 'load', resizeCarousel);





/*************** Functions */

function stickyNav() {
    nav.classList[window.scrollY >= 100 ? 'add' : 'remove']('sticky');
}


function touchNav() {
    this.classList.toggle('is-active')
    burgerTarget.classList.toggle('is-active')
}

const flkty = new Flickity(slider, {
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay:true,
    wrapAround: true,
    prevNextButtons: false,
});

function resizeCarousel() {
    flkty.resize();
}








