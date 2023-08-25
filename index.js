$(".question").on("mouseover", function() {
    $(this).addClass("hover");
});

$(".question").on("mouseout", function() {
    $(this).removeClass("hover");
});

$(".question").on("click", function() {
    if ($(this).hasClass("clicked")) {
        $(this).removeClass("clicked");
        $(this).find("img").removeClass("flip");
        $(this).next().css("display", "none");
    } else {
        $(this).addClass("clicked");
        $(this).find("img").addClass("flip");
        $(this).next().css("display", "inline-block");
    }
});
