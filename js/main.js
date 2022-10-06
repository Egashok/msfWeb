
$(function () {
    $(".news__tab").on('click', function (e) {
        e.preventDefault();
        $(".news__tab").removeClass("tab__active");
        $(this).addClass("tab__active");
        $(".news__content").removeClass("news__content--active");
        $($(this).attr('href')).addClass("news__content--active");

    });

})