$(function () {
    /*滚动条*/
    $(".m_cols_body").scroll(function () {
        var ys_top = $(this).scrollTop();
        var xs_left = $(this).scrollLeft();
        
        var xm_left = $(".m_cols_head").scrollLeft();

        var yf_top = $(".f_cols_body").scrollTop();

        if (xs_left != undefined) {
            //drag x-scroll('#m_cols_head' will be moved)
            $(".m_cols_head").scrollLeft(xs_left);
        }
        if (ys_top != undefined ) {
            //drag y-scroll('#f_cols_body' will be moved)
            $(".f_cols_body").scrollTop(ys_top);
        }

    });
    /*点击table tr, 进行下一行的显示隐藏*/
    //$(".switch_blue_on").click(function () {

    //    //fnSwitch(".switch_blue_on", ".switch_blue_off");
    //});
    //$(".switch_blue_off").click(function () {

    //    //fnSwitch(".switch_blue_off", ".switch_blue_on");
    //});
    $(".switch_blue").click(function () {

        $tr = $(this).parents("tr");
        var $tr_move = $("." + $tr.attr("id"));

        var $tr_child = $("#" + $tr.attr("id") + "_hidden");
        var $tr_child_move = $("." + $tr.attr("id") + "_hidden");

        $tr.toggleClass("m_blue");
        $tr_move.toggleClass("m_blue");

        var moveWidth = $(".move_cols").width();//右边div的宽度
        var frezenWidth = 333;//5列合并后的宽度
        var $content_td = $("#" + $tr.attr("id") + "_hidden .opp1_td_content");

        $tr_child.toggleClass("hidden");

        var $theContentDiv = $("#" + $tr.attr("id") + "_hidden .opp1_td_content .the_content");
        var theContentDivHeight = $theContentDiv.outerHeight(true);
        //var $content_td_borther = $("#" + $tr.attr("id") + "_hidden .the_content_borther"); //设置$content_td的高度是无法正真撑开高度的它会覆盖下面的列，所以选择设置它的borther
        var $tr_child_move_td = $("." + $tr.attr("id") + "_hidden td");

        //alert(theContentDivHeight);

        $content_td.css({ "width": moveWidth + frezenWidth });

        $tr_child_move_td.css({ "height": theContentDivHeight+1});
        //$content_td_borther.css({"height":theContentDivHeight});
        $content_td.css({ "height": theContentDivHeight });

        //$tr_child.toggleClass("hidden");
        $tr_child_move.toggleClass("hidden");
    });
});

/**
*clickedTarget == this
**/
function fnOpp1TrClick(clickedTarget) {
    $(clickedTarget).parent("tr").toggle("m_blue");
}
/**
*originalClass原始的样式class，将会被expectedClass替换
**/
function fnSwitch(originalClass, expectedClass) {
    var $orc = $("."+originalClass);
    $orc.addClass(expectedClass).removeClass(originalClass);
}