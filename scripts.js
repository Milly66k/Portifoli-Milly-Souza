

document.addEventListener('DOMContentLoaded', function () {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination', // Corrigir o nome da classe para swiper-pagination
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next", // Corrigir o nome da classe para swiper-button-next
            prevEl: ".swiper-button-prev", // Corrigir o nome da classe para swiper-button-prev
        },
    });

    let header = document.getElementById("header");

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop >= 200) {
            header.style.background = '#191919';
        } else {
            header.style.background = 'transparent';
        }
    });
});