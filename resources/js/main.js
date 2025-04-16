/*=============== CHANGE BACKGROUND HEADER ===============*/
"use strict";

function scrollHeader(){
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== STATIC COUNTER ===============*/
let infoSection = document.querySelector('#info');
let staticCounter = document.querySelectorAll('.about_box .count');
let started = false;

function startCounter(element) {
  let goal = element.dataset.count;
  let count = setInterval(() => {
    element.textContent++;

    if(element.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

window.addEventListener('scroll', () => {
  if(window.scrollY >= infoSection.offsetTop - 500) {
    if(!started) {
      staticCounter.forEach((num) => startCounter(num));
    }

    started = true;
  }
})

/*=============== QUALIFICATION ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target);

        tabContent.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active');
        });
        target.classList.add('qualification_active');

        tab.forEach(tab =>{
            tab.classList.remove('qualification_active');
        });
        tab.classList.add('qualification_active');
    });
});

(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();
  

/*=============== PORTFOLIO ===============*/
var slideElement = document.getElementsByClassName('swiper-slide');
var slideLength = slideElement.length;
var paginationElement = document.getElementsByClassName('slider_controls')[0];

var paginationHTML = [];

for(var i = 0; i < slideLength; i++) {
  paginationHTML.push('<div class="swiper-pagination dot></div>');
}
paginationElement.innerHTML = paginationHTML.join('');

var Swipes = new Swiper(".mySwiper", {
    effect: "coverflow",
    loop: true,
    speed: 1000,
    spaceBetween: 15,
    freeMode: true,
    mousewheel: true,
    navigation: {
      nextElement: ".swiper-button-next",
      prevElement: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    }
  });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,
});

sr.reveal('.home_data');
sr.reveal('.home_handle', {delay: 700});
sr.reveal('.home_social, home_scroll', {delay: 900, origin: 'bottom'});