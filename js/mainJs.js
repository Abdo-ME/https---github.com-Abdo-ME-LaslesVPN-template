$(document).ready(function () {
// show Side Menu
    $(".toggle-btn").on("click", function () {
        $(this).toggleClass("active");
        $(".side-menu").toggleClass("side-show");
    })
    // Scrool between links 
    $("#links  a").on("click", function () {
        var target = $(this).data("target")
        $("html,body").animate({
            scrollTop: $("." + target).offset().top - 80,
          });
    })
    
    $(".brands .owl-carousel").owlCarousel({
        loop: true,
        items: 4,
        dots:false,
        autoplay: true,
        responsive: { 0: { items: 1 }, 400: { items: 2 }, 651: { items: 3 },760:{items:4}, 992:{items:6}},
    });
    //  Members Owl carousle 
        $(".testimonials .owl-carousel").owlCarousel({
            loop: true,
            items: 3,
            autoplay: true,
            responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } },
            dots: true,
            dotsEach: 1,
            navContainer: '.customNavigation',
            dotsContainer: '.customDots',
        });
        var owl = $('.owl-carousel');
        owl.owlCarousel();
        $('.prev').click(function() {
            owl.trigger('next.owl.carousel');
        })
        $('.next').click(function() {
           
            owl.trigger('next.owl.carousel', [300]);
        })
           

})