$(function () {
    $(".on_off").click(function () {
            if ($('.on_off_btn', this).css("left") == "34px") {
                $('.on_off_btn', this).animate({ "left": "0px" });
            } else {
                $('.on_off_btn', this).animate({ "left": "34px" });
            }

    });

    $(".alert_parts").click(function () {
        $(this).toggleClass("light_blue");
    });

    $(".opp1_collapse").click(function () {
        $(".opp1_collapse_part").toggle();
    });
    $(".more1").click(function () {
        $(".more1_part").toggle();
    });
    $(".more2").click(function () {
        $(".more2_part").toggle();
    });
    $(".more3").click(function () {
        $(".more3_part").toggle();
    });
    $(".dropdown-menu a").click(function () {
        $(this).parents(".input-group").find(".form-control").val($(this).text());
    });
});