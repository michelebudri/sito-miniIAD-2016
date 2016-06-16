//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");

        $('.navbar-fixed-top').css('background-color', 'rgba(239,127,26,0.9)');
        $('.navbar-fixed-top').css('opacity', '0.85');
        $('.navbar-custom a').css('color', '#fff');

    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        
        $('.navbar-fixed-top').css('background-color', 'rgba(255, 255, 255, 0.7)');
        $('.navbar-fixed-top').css('opacity', '0.9');
        $('.navbar-custom a').css('color', 'rgb(239,127,26)');
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
