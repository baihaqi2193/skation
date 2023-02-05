const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar-container");
const navList = document.querySelector(".navbar-list ul");
const navItem = document.querySelectorAll(".navbar-list ul li");
const asideToggler = document.querySelector("div.aside-button");
const asideConnected = document.querySelector(".connected");
const aside = document.querySelector("aside");

var lastScrollTop;



hamburger.addEventListener("click", toggleActive);
navItem.forEach(n => n.addEventListener("click", normalizeClick));
asideToggler.addEventListener("click", toggleAside);
asideConnected.addEventListener("click", hideAside);
window.addEventListener("scroll", scrollHide);

function scrollHide() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (hamburger.classList.contains('active') == false) {
        if ((scrollTop > lastScrollTop)) {
            navbar.style.top = '-80px';
        } else {
            navbar.style.top = '0px'
        }
        lastScrollTop = scrollTop;
    }

}

function toggleAside() {
    asideToggler.classList.toggle("active");
    aside.classList.toggle("active");
}

function hideAside() {
    asideToggler.classList.toggle("active");
    aside.classList.remove("active");
}

function toggleActive() {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
}

function normalizeClick() {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
}