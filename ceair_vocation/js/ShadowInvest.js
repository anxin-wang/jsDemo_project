//后台验证
var shadow_confirm_values = [];

function shadow_investNow(shadowcash) {
    $.post(
        "/MovieProject/Info/check",
        {amount: shadowcash},
        function (JSON) {
            if (JSON.status == '-1') {
                var boxTitle = "提示：",
                    proHtml = '<div class="alert alert-error-icon"><i class="yicon yicon-cross font-lg"></i>交易失败！</div><div class="alert alert-warning">' + JSON.msg + '</div>';
                $(".pro-con").html(proHtml);
                oShow(".pro-con", 500, boxTitle, false, 280);
                return;
            }
            var boxTitle = "认购债权",
                userMoney = JSON.data.total_money,//用户账户余额
                canInvestMoney = JSON.data.can_invest_money;//剩余可投余额

            var proHtml = '<p class="alert alert-warning">影利宝债权，7%~14.2%年化收益，支持随时赎回。</p>' +
                ' <dl class="dl-inline"><dt>账户余额：</dt><dd>' + userMoney + '元<em class="hide">您的余额不足，请马上 <a class="label label-info" href="/NewRecharge">充值</a> 。</em></dd></dl>' +
                ' <dl class="dl-inline"><dt>可认购金额：</dt><dd>' + canInvestMoney + '元</dd></dl>' +
                ' <dl class="dl-inline"><dt>认购金额：</dt><dd>' + shadowcash + '元</dd></dl>' +
                ' <dl class="dl-inline"><dt>支付密码：</dt><dd><input id="pay_password" class="form-control col-w-8 pull-left" type="password"/><div class="pull-left padding-xs"><a href="/User/auth/resetPaypwd">忘记支付密码？</a></div></dd></dl>' +
                ' <dl class="dl-inline"><dt></dt><dd class="padding-top-big"><button id="confirmInvest" class="btn btn-primary col-w-8" type="button">确认购买</button></dd></dl>';

            $(".pro-con").html(proHtml);

            $('#confirmInvest').die().live('click', function () {
                //验证支付密码和验证码
                confirmshadowInvest();
            });

            $('#pay_password').die().live('keyup', function() {
                shadow_confirm_values[$(this).attr('id')] = $(this).val();
            });

            //下一步，弹出投资信息确认
            oShow(".pro-con", 500, boxTitle, false, 300);
        }
    );
}

function confirmshadowInvest() {
    $.post(
        "/MovieProject/Info/invest",
        {amount: shadow_confirm_values['amount'], paypwd: shadow_confirm_values['pay_password']},
        function (JSON) {
            oClose();
            switch (JSON.status) {
                case '1':
                    shadowInvestWait(JSON.event_id);
                    break;
                case '-1':
                    var boxTitle = "提示：",
                        proHtml = '<div class="alert alert-error-icon"><i class="yicon yicon-cross font-lg"></i>交易失败！</div><div class="alert alert-warning">' + JSON.msg + '</div>';
                    $(".pro-con").html(proHtml);
                    oShow(".pro-con", 500, boxTitle, false, 280);
                    break;
                default:
                    break;
            }
        }
    )
}

function shadowInvestWait(event_id) {
    var boxTitle = "认购债权";
    var proHtml = '<p class="center"><i class="img-icon-loading"></i></p><p class="center">由于购买用户过多，您的请求正在排队中，请稍后...</p>';
    $(".pro-con").html(proHtml);
    oShow(".pro-con", 500, boxTitle, false, 280);
    window.shadow_event_checker = setInterval(function(){
        $.getJSON('/MovieProject/Info/eventStatus?event_type=invest&event_id=' + event_id, function(JSON) {
            if (parseInt(JSON.status) != 0) {
                shadowInvestSucc(JSON);
            }
        });
    }, 1000);
}

function shadowInvestSucc(JSON) {
    clearInterval(window.shadow_event_checker);
    var boxTitle = "认购债权";
    var tips = '';
    switch(JSON.status) {
        case 'E0':
            tips = '您本次投资：' + JSON.origin_amount + '元，认购成功：' + JSON.use_amount + '元影利宝债权。';
            break;
        default:
            tips = '您本次投资：' + JSON.origin_amount + '元，' + JSON.msg + '。';
            break;
    }
    var proHtml = '<div class="alert alert-success-icon"><i class="yicon yicon-ok font-lg"></i>处理完成！</div><p class="alert alert-warning">'
        + tips
        + '</p><p class="center"><a class="label label-primary label-md" href="/User/Show/shadow">查看我的投资记录</a> <a class="label label-primary label-md" href="javascript:artRefresh();">继续看其他项目</a></p>';
    $(".pro-con").html(proHtml);
    oShow(".pro-con", 500, boxTitle, false, 280);
    $(".artBox-close").die().live("click",function(){
        oClose();
        window.location.reload();
    });
}

//前端验证输入投资金额
function shadow_check_invest(shadowcash) {
    shadowcash = shadowcash.replace(/(^\s+)|(\s+$)/g, '');//投资金额


    if (shadowcash.length == 0 || shadowcash == 0) {
        $('#shadow_validataion_valid').removeClass();
        $('#shadow_validataion_valid').addClass('field-validation-error');
        $('#shadow_validataion_valid').html('<s class="arrow"><i class="arr-top"></i></s>请输入您要投资的金额');
        $('#shadowcash').focus();
        setTimeout(function(){
            $('#shadow_validataion_valid').removeClass("field-validation-error").html("");
        },1300);
        return false;
    }

    //输入的必须是数字
    if (!/^[0-9]*$/.test(shadowcash)) {
        $('#shadow_validataion_valid').removeClass();
        $('#shadow_validataion_valid').addClass('field-validation-error');
        $('#shadow_validataion_valid').html('<s class="arrow"><i class="arr-top"></i></s>请输入您要投资的金额');
        $('#shadowcash').focus();
        setTimeout(function(){
            $('#shadow_validataion_valid').removeClass("field-validation-error").html("");
        },1300);
        return false;
    }

    //必须是500的整数倍
    if ((shadowcash % 500) != 0) {
        $('#shadow_validataion_valid').removeClass();
        $('#shadow_validataion_valid').addClass('field-validation-error');
        $('#shadow_validataion_valid').html('<s class="arrow"><i class="arr-top"></i></s>1.项目金额或您的余额可能不足； <br />2.投资金额需要为500的整数倍。');
        $('#shadowcash').focus();
        setTimeout(function(){
            $('#shadow_validataion_valid').removeClass("field-validation-error").html("");
        },1300);
        return false;
    }

    return true;
}

$(document).ready(function () {
    $("#shadow-invest").click(function () {

        var proInvestval = $('#shadowcash').val();//投资金额
        if (shadow_check_invest(proInvestval)) {
            console.log(proInvestval);
            shadow_confirm_values['amount'] = proInvestval;
            shadow_investNow(proInvestval);
        }
    });
});