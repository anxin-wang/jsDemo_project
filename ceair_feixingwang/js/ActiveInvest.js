//后台验证
var confirmInvest=1, active_confirm_values = [];

function active_investNow(activecash) {
    $.post(
        "/ActiveProject/Info/check",
        {amount: activecash},
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

            var proHtml = '<p class="alert alert-warning">活利宝债权，8%年化收益，支持随时赎回。</p>' +
                ' <dl class="dl-inline"><dt>账户余额：</dt><dd>' + userMoney + '元<em class="hide">您的余额不足，请马上 <a class="label label-info" href="/NewRecharge">充值</a> 。</em></dd></dl>' +
                ' <dl class="dl-inline"><dt>可认购金额：</dt><dd>' + canInvestMoney + '元</dd></dl>' +
                ' <dl class="dl-inline"><dt>认购金额：</dt><dd>' + activecash + '元</dd></dl>' +
                ' <dl class="dl-inline"><dt>支付密码：</dt><dd><input id="pay_password" class="input-text col-width-8 pull-left" type="password"/><div class="pull-left padding-xs"><a href="/User/auth/resetPaypwd">忘记支付密码？</a></div></dd></dl>' +
                ' <dl class="dl-inline"><dt></dt><dd class="padding-top-big"><button id="confirmInvest" class="btn btn-primary col-width-8" type="button">确认购买</button></dd></dl>';

            $(".pro-con").html(proHtml);

            $('#confirmInvest').die().live('click', function () {
                //验证支付密码和验证码
                confirmActiveInvest();
            });

            $('#pay_password').die().live('keyup', function() {
                active_confirm_values[$(this).attr('id')] = $(this).val();
            });

            //下一步，弹出投资信息确认
            oShow(".pro-con", 500, boxTitle, false, 300);
        }
    );
}

function confirmActiveInvest() {
    if(checkInvested == 1) return; checkInvested = 1;
    $.post(
        "/ActiveProject/Info/invest",
        {amount: active_confirm_values['amount'], paypwd: active_confirm_values['pay_password']},
        function (JSON) {
            oClose();
            switch (JSON.status) {
                case '1':
                    activeInvestWait(JSON.event_id);
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
            checkInvested = 0;
        }
    )
}

function activeInvestWait(event_id) {
    var boxTitle = "认购债权";
    var proHtml = '<p class="center"><i class="img-icon-loading"></i></p><p class="center">由于购买用户过多，您的请求正在排队中，请稍后...</p>';
    $(".pro-con").html(proHtml);
    oShow(".pro-con", 500, boxTitle, false, 280);
    window.active_event_checker = setInterval(function(){
        $.getJSON('/ActiveProject/Info/eventStatus?event_type=invest&event_id=' + event_id, function(JSON) {
            if (JSON.status != 0) {
                activeInvestSucc(JSON);
            }
        });
    }, 1000);
}

function activeInvestSucc(JSON) {
    clearInterval(window.active_event_checker);
    var boxTitle = "认购债权";
    var tips = '';
    switch(JSON.status) {
        case 'E0':
            tips = '您本次投资：' + JSON.origin_amount + '元，认购成功：' + JSON.use_amount + '元活利宝债权。每日收益:' + JSON.earning + '元。';
            break;
        default:
            tips = '您本次投资：' + JSON.origin_amount + '元，' + JSON.msg + '。';
            break;
    }
    var proHtml = '<div class="alert alert-success-icon"><i class="yicon yicon-ok font-lg"></i>处理完成！</div><p class="alert alert-warning">'
        + tips
        + '</p><p class="center"><a class="label label-primary label-md" href="/User/Show/active">查看我的投资记录</a> <a class="label label-primary label-md" href="javascript:artRefresh();">继续看其他项目</a></p>';
    $(".pro-con").html(proHtml);
    oShow(".pro-con", 500, boxTitle, false, 280);
    $(".artBox-close").die().live("click",function(){
        oClose();
        window.location.reload();
    });
}

//前端验证输入投资金额
function active_check_invest(activecash) {
    console.log(activecash);
    activecash = activecash.replace(/(^\s+)|(\s+$)/g, '');//投资金额

    if (activecash.length == 0 || activecash == 0) {
        $('#active_validataion_valid').removeClass();
        $('#active_validataion_valid').addClass('field-validation-error');
        $('#active_validataion_valid').html('<s class="arrow"><i class="arr-top"></i></s>请输入您要投资的金额');
        $('#activecash').focus();
        setTimeout(function(){
            $('#active_validataion_valid').removeClass("field-validation-error").html("");
        },1300);
        return false;
    }

    //输入的必须是数字
    if (!/^[0-9]*$/.test(activecash)) {
        $('#active_validataion_valid').removeClass();
        $('#active_validataion_valid').addClass('field-validation-error');
        $('#active_validataion_valid').html('<s class="arrow"><i class="arr-top"></i></s>请输入您要投资的金额');
        $('#activecash').focus();
        setTimeout(function(){
            $('#active_validataion_valid').removeClass("field-validation-error").html("");
        },1300);
        return false;
    }

    //必须是100的整数倍
    if ((activecash % 100) != 0) {
        $('#active_validataion_valid').removeClass();
        $('#active_validataion_valid').addClass('field-validation-error');
        $('#active_validataion_valid').html('<s class="arrow"><i class="arr-top"></i></s>1.项目金额或您的余额可能不足； <br />2.投资金额需要为100的整数倍。');
        $('#activecash').focus();
        setTimeout(function(){
            $('#active_validataion_valid').removeClass("field-validation-error").html("");
        },1300);
        return false;
    }

    return true;

}

$(document).ready(function () {
    $("#active-invest").click(function () {
        var proInvestval = $('#activecash').val();//投资金额
        if (active_check_invest(proInvestval)) {
            active_confirm_values['amount'] = proInvestval;
            active_investNow(proInvestval);
        }
    });
});
