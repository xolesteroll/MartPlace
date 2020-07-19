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

    $('.grid-btn').on('click', function(){
        $(this).addClass('active');
        $('.list-btn').removeClass('active');
        $('.products-content .global__item').removeClass('list');
    });

    $('.list-btn').on('click', function(){
        $(this).addClass('active');
        $('.grid-btn').removeClass('active');
        $('.products-content .global__item').addClass('list');
    });

    var mixer = mixitup('.newest__inner');

});

