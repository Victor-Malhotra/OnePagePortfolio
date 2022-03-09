$(window).on('load', function() {
    var hideScrollBar = setTimeout(function() {
        $('body').css({
            'overflow': 'auto'
        })
    }, 7300);
    $('#loaderContainer').delay(3000).fadeOut(3000, function(){
        $('#loaderContainer').remove();
    });
})