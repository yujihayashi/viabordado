$(function() {
    $('#load').css({opacity: 0.6});
    $("#load").ajaxStart(function() {
        $(this).show();
    });
    $("#load").ajaxStop(function() {
        $(this).hide();
    });

    // Setup variables
    $window = $(window);
    $slide = $('.page');
    $body = $('body');
    adjustWindow();
    function adjustWindow(){
        // Init Skrollr
        var s = skrollr.init({
            render: function(data) {

                //Debugging - Log the current scroll position.
                //console.log(data.curTop);
            },
            smoothScrolling: false,
            forceHeight: false
        });

        winH = $window.height();
        if(winH <= 850) {
            winH = 850;
        }

        // Resize our slides
        $slide.height(winH);

        // Refresh Skrollr after resizing our sections
        s.refresh($('.page'));
    }

    //PARALLAX
    

    // INTERACAO COM O SCROLL DOWN  
    $('.scroll-down').css({display: 'none', bottom: '100px'});
    $(window).load(function () {
        $('.scroll-down').stop(true, true).delay(3000).fadeIn({duration: 500, queue: true, easing: 'easeInOutExpo'});
        $('.scroll-down').animate({bottom: '0px'}, {duration: 2000, queue: true, easing: 'easeOutBounce'});
    });

    // INTERACAO COM A MAQUETE 
    $('.page-home .box-frase').css({display: 'none', marginTop: '0px'});
    $('.page-home .maquete').css({display: 'none'});
    $(window).load(function () {
        $('.page-home .box-frase').stop(true, true).delay(500).fadeIn({duration: 800, queue: false, easing: 'easeInOutExpo'})
        .animate({marginTop: '52px'}, {duration: 800, queue: false, easing: 'easeInOutExpo'});
        $('.page-home .maquete').stop(true, true).delay(1000).fadeIn({duration: 1000, queue: true, easing: 'easeInOutExpo'});
        // $('.scroll-down').animate({bottom: '0px'}, {duration: 2000, queue: true, easing: 'easeOutBounce'});
    });


    // The default axis is 'y', but in this demo, I want to scroll both
    // You can modify any default like this
    $.localScroll.defaults.axis = 'y';

    // Scroll initially if there's a hash (#something) in the url 
    $.localScroll.hash({
        target: 'body', // Could be a selector or a jQuery object too.
        queue:true,
        duration:2000
    });

    /**
     * NOTE: I use $.localScroll instead of $('#navigation').localScroll() so I
     * also affect the >> and << links. I want every link in the page to scroll.
     */
     $('.navbar-nav, .navbar-header, .scroll-down').localScroll({
        target: 'body', // could be a selector or a jQuery object too.
        queue:true,
        duration:2000,
        hash:true,
        //filter: {'.panel-group'},
        onBefore:function( e, anchor, $target ){
            // The 'this' is the settings object, can be modified
        },
        onAfter:function( anchor, settings ){
            // The 'this' contains the scrolled element (#content)
        }
    });

     $('.site-header .navbar-nav li a').hover(function () {
        $(this).stop(true, true).delay(1).animate({width: '100%'}, {duration: 400, queue: true, easing: 'easeInOutExpo'});
     }, function () {
        $(this).stop(true, true).delay(1).animate({width: '75px'}, {duration: 400, queue: true, easing: 'easeInOutExpo'});
     });
});
$(function() {
    $('.jImgFormat').find('img').each(function() {
        var $float = $(this).css('float');
        $(this).css('float', 'none');
        var margin = '';
        switch ($float) {
            case 'left':
                margin = 'margin:2px 10px 2px 0px';
                break;
            case 'right':
                margin = 'margin:2px 0px 2px 10px';
                break;
            default:
                break;
        }
        var url_amp = $(this).attr('src');
        url_amp = url_amp.replace(/-([0-9]*)\./, '.');
        var img = $(this).wrap('<a href="' + url_amp + '" rel="shadowbox" style="float:' + $float + ';' + margin + '" class="imgTexto"/>');
        img.after('<strong style="display:block">' + $(this).attr('alt') + '</strong>');
    });
});

function showPopup() {
    $('.popup').fadeIn('slow');
    var popupMarginLeft = $('.popup-img').width() / 2,
        popupMarginTop = $('.popup-img').height() / 2;

    // console.log(popupMarginLeft);
    // console.log($('.popup-img img').attr('height'));
    $('.popup-content').css({marginLeft: -popupMarginLeft + 'px'/*, marginTop: -popupMarginTop+'px'*/});
    $('.popup-close, .popup').click(function() {
        $('.popup').fadeOut();
    });
    $('.popup-content').click(function() {
        return false;
    });
}