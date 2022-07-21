$(document).ready(function (e) {
    $.fn.showOverlay = function () {
        $('.overlay').css({
            "display": "block"
        });
    };

    $('.section #section-1').click(function (e) {
        $.fn.showOverlay();
        $('.deportes_content').css({
            "display": "block"
        })
    });

    $('.section #section-2').click(function (e) {
        showOverlay();
        $('cultura_content').css({
            "display": "block"
        })
    });

    $('.section #section-3').click(function (e) {
        showOverlay();
        $('politica_content').css({
            "display": "block"
        })
    });

    $('.section #section-4').click(function (e) {
        showOverlay();
        $('historia_content').css({
            "display": "block"
        })
    });

    $('.section #section-5').click(function (e) {
        showOverlay();
        $('notasdecafe_content').css({
            "display": "block"
        })
    });



    $('.overlay .close-btn i').click(function (e) {
        $('.overlay').css({
            "display": "none"
        });
    });
})