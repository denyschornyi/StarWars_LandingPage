$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        navClass: ['slider__nav-left', 'slider__nav-right'],
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            900: {
                items:3
            },
            1200:{
                items:4
            }
        }
    })
});