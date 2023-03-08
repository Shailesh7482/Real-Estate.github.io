$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }


        
    })



    $(document).ready(function(){
        $('.owl-carousel .corousel-two ').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })
    })

   


    $('.click').click(function () {
        $('nav').addClass("form-active");
    })
    $('.close-icon').click(function () {
        $('nav').removeClass("form-active");
    })

    $('.toggle').click(function(){
        $('#nav-ul').slideToggle();
    })

})


let menu = document.querySelector('.toggle')
menu .addEventListener('click',function(){
    menu.classList.toggle('mobile-toggle');
})
