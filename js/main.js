$(document).ready(function () {



    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        arrows: false,
        initialSlide: 2

    });
    $('.slide-blog').slick({
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        arrows: false,
        initialSlide: 2

    });



    const menu = document.querySelector('.navigation__menu');

    function handleResize() {
        if (window.matchMedia('(min-width: 770px)').matches) {
            // Добавляем класс при уменьшении окна
            menu.classList.add('navigation__menu--active');
        } else {
            // Убираем класс при увеличении окна
            menu.classList.remove('navigation__menu--active');
        }
    }

    // Добавляем слушателя событий на изменение размера окна
    window.addEventListener('resize', handleResize);

    // Вызываем функцию при загрузке страницы
    handleResize();



    document.querySelector('.navigation__menu').addEventListener('click', function () {
        document.querySelector('.navigation__menu-list').classList.toggle('navigation__menu-list--click');
        document.querySelector('.navigation__list').classList.toggle('navigation__list--active');
    });


});

