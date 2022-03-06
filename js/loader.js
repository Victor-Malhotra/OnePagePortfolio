$(window).on('load', function() {
    var hideScrollBar = setTimeout(function() {
        $('body').css({
            'overflow': 'auto'
        })
    }, 10500);
    $('#loaderContainer').delay(6000).fadeOut(4500);
})