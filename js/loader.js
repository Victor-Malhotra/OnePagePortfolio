$(window).on('load', function() {
    var hideScrollBar = setTimeout(function() {
        $('body').css({
            'overflow': 'auto'
        })
    }, 7500);
    $('#loaderContainer').delay(3000).fadeOut(3000);
})