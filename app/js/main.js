$(function () {


    $('.weekly__slider').slick({
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/arrow-right.png" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-left.png" alt="prev arrow"></button>',
        fade: true,
        infinite: true
    });

    $('.followers__slider').slick({
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/arrow-right.png" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-left.png" alt="prev arrow"></button>',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true
    });

    $('.range-slider').ionRangeSlider({
        type: "double",
        prefix: "$",
        min: 0,
        max: 330,
        from: 30,
        to: 300,
        grid: false
    });



    $('.rate-star').rateYo({
        rating: 5,
        starWidth: '16px',
        starHeight: '15px',
        spacing: '3px'
    });

    $('.rate-star__small').rateYo({
        rating: 5,
        starWidth: '13px',
        starHeight: '12px',
        spacing: '4px'
    });


    $('.single__info .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.single__info').find('.tab-item').removeClass('active-tab').hide();

        $('.single__info .single__info-tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.grid-btn').on('click', function () {
        $(this).addClass('active');
        $('.list-btn').removeClass('active');
        $('.products-content .global__item').removeClass('list');
    });

    $('.list-btn').on('click', function () {
        $(this).addClass('active');
        $('.grid-btn').removeClass('active');
        $('.products-content .global__item').addClass('list');
    });

    $('.category-box .products-aside__title').on('click', function () {
        $(this).toggleClass('open');
        $('.category-box .products-aside__dropdown').slideToggle();
    });

    $('.filter-box .products-aside__title').on('click', function () {
        $(this).toggleClass('open');
        $('.filter-box .products-aside__dropdown').slideToggle();
    });

    $('.range-box .products-aside__title').on('click', function () {
        $(this).toggleClass('open');
        $('.range-box .products-aside__dropdown').slideToggle();
    });

    $('.header__menu-btn').on('click', function () {
        $('.header__menu-list').slideToggle();
    });

    $('.header__top-inner .lnr-user').on('click', function () {
        $('.header__top-cabinet').toggleClass('open');
        $(this).toggleClass('white');
    });

    $('.megamenu__title').on('click', function () {
        $(this).parent('.megamenu__item').toggleClass('active');
    });

    $('.menu__dropdown-link').on('click', function () {
        $('.menu-dropdown').slideToggle();
    });


    let mixer = mixitup('.newest__inner');

});

