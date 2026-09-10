// =========================================================
// MOBILE NAVBAR
// =========================================================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");


// =========================================================
// BUKA / TUTUP HAMBURGER
// =========================================================

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// =========================================================
// TUTUP MENU SAAT LINK DIKLIK
// =========================================================

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// =========================================================
// TUTUP MENU SAAT KLIK DI LUAR NAVBAR
// =========================================================

document.addEventListener("click", function (event) {

    const isClickInsideNavbar = event.target.closest(".navbar");

    if (!isClickInsideNavbar) {

        navMenu.classList.remove("active");

    }

});


// =========================================================
// TUTUP MENU SAAT RESIZE KE DESKTOP
// =========================================================

window.addEventListener("resize", function () {

    if (window.innerWidth >= 768) {

        navMenu.classList.remove("active");

    }

});