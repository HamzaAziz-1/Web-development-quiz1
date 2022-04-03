$(document).ready(function () {
    $("button").mouseenter(function () {
        $(".headings , .headings-edu").animate({ left: '300px' });
    });
    $("button").mouseleave(function () {
        $(".headings , .headings-edu").animate({ left: '5px' });
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        $('.fadeinleft').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1', 'margin-left': '0px' }, 1000);
            }
        });
    });
});

$(document).ready(function () {
    $(window).mouseenter(function () {
        $('.fadeinleft').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1', 'margin-left': '0px' }, 1000);
            }
        });
    });
});