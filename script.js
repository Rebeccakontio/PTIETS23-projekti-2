document.addEventListener('DOMContentLoaded', function () {
    let links = document.querySelector(".nav-links");
    let hamburger = document.querySelector(".toggle_btn");

    hamburger.addEventListener('click', function () {
        links.classList.toggle('active');
    });
});
