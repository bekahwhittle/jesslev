// CLICK EVENTS FOR CHANGING BACKGROUND IMAGES
$('#about').on('click', function(e){
    $('.container').attr('class', 'container');
    $('.container').addClass("about");
    pageVisible();
});
$('#work').on('click', function(e){
    $('.container').attr('class', 'container');
    $('.container').addClass("work");
    pageVisible();
});
$('#contact').on('click', function(e){
    $('.container').attr('class', 'container');
    $('.container').addClass("contact");
    pageVisible();
});

function pageVisible  () {
    if ($('.container').hasClass("about")) {
        $('#about-page').addClass("visible");

        $('.svg-yellow-squiggle').removeClass("hidden");
        $('.svg-half-full-circle').removeClass("hidden");

        $('#work-page').removeClass("visible").addClass("hidden");
        $('#contact-page').removeClass("visible").addClass("hidden");
    }
    if ($('.container').hasClass("work")) {
        $('#work-page').addClass("visible");

        $('.svg-yellow-squiggle').addClass("hidden");
        $('.svg-half-full-circle').addClass("hidden");

        $('#about-page').removeClass("visible").addClass("hidden");
        $('#contact-page').removeClass("visible").addClass("hidden");
    }
    if ($('.container').hasClass("contact")) {
        $('#contact-page').addClass("visible");

        $('.svg-yellow-squiggle').removeClass("hidden");
        $('.svg-half-full-circle').removeClass("hidden");

        $('#about-page').removeClass("visible").addClass("hidden");
        $('#work-page').removeClass("visible").addClass("hidden");
    }
}