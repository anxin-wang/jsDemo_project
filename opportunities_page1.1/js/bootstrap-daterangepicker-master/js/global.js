$(function () {
    $(".col-do").click(function () {
        $(".col-do").removeClass("nav_clicked");
        $(this).addClass("nav_clicked");
    });
});