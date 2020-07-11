$(function () {
    $('.weekly__slider').slick({
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/arrow-right.png" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-left.png" alt="prev arrow"></button>',
        fade: true,
        infinite: true
    });

    var mixer = mixitup('.newest__inner');

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




});