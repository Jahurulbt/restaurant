
(function($){

$(window).scroll(function(){
    // Menu
    let scrollSize = $(window).scrollTop();
    if(scrollSize > 100){
        $('.site-header').addClass('fixed-header');
    }else{
        $('.site-header').removeClass('fixed-header');
    }

    // Arrow
    if(scrollSize > 500){
        $('.arrow-section').fadeIn();
    }else{
        $('.arrow-section').fadeOut();
    }

    
})

$('.arrow-section i').on('click', function(){
    $('html').animate({scrollTop:0})
})




})(jQuery);