var realName, cardID ,cashVal, checkInvested = 0;

function setID(obj){
    cardID = obj.value;
}

function setrealName(obj){
    realName = obj.value;
}

function setVal(obj){
    cashVal = obj.value;
}

function validateNo(cardID){

    //var cardNo = cardID;
    //var cardNo = document.getElementById('cardID').value;
    var cardInfo = getIdCardInfo(cardID);
    var showInfo = '';
    if(cardInfo.isTrue){
        showInfo = '<span class="text-success"><i class="yicon-ok"></i></span> ';
        if(cardInfo.isMale){
            showInfo += '<span class="text-info">' + cardInfo.year + '.' + cardInfo.month + '.' + cardInfo.day + ' 男</span>';
        }
        if(cardInfo.isFemale){
            showInfo += '<span class="text-info">' + cardInfo.year + '.' + cardInfo.month + '.' + cardInfo.day + ' 女</span>';
        }

    }else{
        showInfo = '<span class="field-validation-error">无效号码，请重新输入！</span>';
    }
    $('.form-msg-tips').html(showInfo);
}


function investNow(proID,proInvestval) {
    $.post(
        "/Ajax/Project/confirmInvesInfo",
        {projectId: proID, cash: proInvestval},
        function (JSON) {
            if (JSON.status == 0) {

                var boxTitle = "提示：";
                if(JSON.msg){
                    var proHtml = '<div class="alert alert-danger">'+JSON.msg+'</div>';
                }else{
                    var proHtml = '<div class="alert alert-danger">系统繁忙，请到用户中心查看投资记录。</div>';
                }

                $(".pro-con").html(proHtml);
                oShow(".pro-con", 500, boxTitle, false, 200);
                return;
            }

            var regexStr = /(\d{1,3})(?=(\d{3})+(?:$|\.))/g;
            var boxTitle = "确认您的这笔投资",
                proRate = JSON.data.pro_rate,//年化利率
                proDays = JSON.data.days,//计息天数
                proTitle = JSON.data.title,//标题
                proEarnings = JSON.data.earnings_money,//预计收益
                proRefundend = JSON.data.str_refund_end;//本金归还时间

            var proHtml = '<p class="alert alert-warning">此笔投资的收益，是银行定期的3倍。</p><dl class="dl-inline"><dt>投资项目：</dt><dd>'
                + proTitle + '</dd></dl><dl class="dl-inline"><dt>投资金额：</dt><dd>'
                + proInvestval.replace(regexStr, "$1,") + '元</dd></dl><dl class="dl-inline"><dt>年化收益率：</dt><dd>'
                + proRate + '%</dd></dl><dl class="dl-inline"><dt>本金归还：</dt><dd>'
                + proRefundend + '</dd></dl><dl class="dl-inline"><dt>计息天数：</dt><dd>'
                + proDays + '天</dd></dl><dl class="dl-inline"><dt>预计收益：</dt><dd>'
                + proEarnings + '元</dd></dl><hr/><div class="center"><button id="confirmInvest" class="btn btn-primary col-width-6" type="button">确认投资</button></div>';

            $(".pro-con").html(proHtml);
            //console.log($(".pro-con").html());
            //下一步，弹出投资信息确认
            oShow(".pro-con", 500, boxTitle, false, 340);
            checkInvested = 0;
        }
    );
}

/*function affirmInvest(proID) {
    //console.log(proID);
    if(checkInvested == 1) return; checkInvested = 1;
    var proInvestval = $("#cash").val();//投资金额
    $.post("/Ajax/Project/confirmInvesOper", {projectId: proID, cash: proInvestval},
        function (JSON) {
            oClose();
            switch (JSON.status) {
                case 1:
                    investWait(JSON.event_id);
                    break;
                case 0:
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
}*/

function affirmInvest(proID,proCash){

    if(checkInvested == 1) return; checkInvested = 1;
    //var proInvestval = $("#cash").val();//投资金额
    $.post("/Ajax/Project/confirmInvesOper", {projectId: proID, cash: proCash},
        function (JSON) {
            console.log(JSON.status);
            oClose();
            switch (JSON.status) {
                case 1:
                    investWait(JSON.event_id);
                    break;
                case 0:
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

function artRefresh(){
    var pathURL = window.location.pathname;
    window.location.reload();
    if(pathURL != "/"){
        window.location.href = "/Project/List";
        return false;
    }
}


function investWait(event_id) {
    var boxTitle = "投资";
    var proHtml = '<p class="center"><i class="img-icon-loading"></i></p><p class="center">由于购买用户过多，您的请求正在排队中，请稍后...</p>';
    $(".pro-con").html(proHtml);
    oShow(".pro-con", 500, boxTitle, false, 280);

    window.active_event_checker = setInterval(function(){
        $.getJSON('/Ajax/Project/eventStatus?event_id=' + event_id, function(JSON) {
            if (JSON.status != 0) {
                investSucc(JSON);
            }
        });
    }, 1000);
}

function investSucc(JSON) {
    clearInterval(window.active_event_checker);
    var boxTitle = "投资";
    switch(JSON.status) {
        case 'E0':
            if(JSON.is_upload==1){
                var proHtml = '<div class="alert alert-success-icon"><i class="yicon yicon-ok font-lg"></i>投资成功！</div><p class="alert alert-warning">今日投资，明日计息。此笔投资的还款计划将于明天生成。</p><p class="center"><a class="label label-primary label-md" href="/User/Show/invest">查看我的投资记录</a> <a class="label label-primary label-md" href="javascript:artRefresh();">继续看其他项目</a></p>';
                $(".pro-con").html(proHtml);
                oShow(".pro-con", 500, boxTitle, false, 240);
            }else{
                var proHtml = '<div class="alert alert-success-icon"><i class="yicon yicon-ok font-lg"></i>投资成功！</div><p class="alert alert-warning">但是您还没有进行实名认证，未来资金将不能提现。<br />马上认证，还能防止别人盗走您的账号，给你带来损失。</p>'
                    + '<dl class="dl-inline"><dt>真实姓名：</dt><dd><input class="form-control width-big" id="realName" type="text" onchange="setrealName(this)" /></dd></dl>'
                    + '<dl class="dl-inline"><dt>身份证号：</dt><dd><input class="form-control width-big" id="cardID" type="text" onchange="setID(this);" /><span class="form-msg-tips"><em class="text-info">身份证号填写错误将无法更改、无法提现，请仔细核对！</em></span></dd></dl>'
                    + '<dl class="dl-inline"><dt></dt><dd><button id="cardIDCheck" class="btn btn-primary width-big" type="button">认证</button></dd></dl>';
                $(".pro-con").html(proHtml);
                oShow(".pro-con", 500, boxTitle, false, 400);
                $("#cardIDCheck").die().live("click", function () {
                    $.post("/Ajax/Project/roleName", {idnum: cardID, RealName: realName},
                        function (JSON) {
                            oClose();
                            if (JSON.status == 0) {
                                var boxTitle = "友善的提示：",
                                    proHtml = '<div class="alert alert-danger">'+JSON.msg+'</div><p class="center"><a href="/User/Index/Real">到用户中心认证</a></p>';
                                $(".pro-con").html(proHtml);
                                oShow(".pro-con", 500, boxTitle, false, 200);
                            } else {
                                var boxTitle = "友善的提示：",
                                    proHtml = '<div class="alert alert-success-icon"><i class="yicon yicon-ok font-lg"></i>认证成功！</div><div class="center"><div><em class="label label-primary label-lg" onclick="oClose()" id="Countdown">确定</em></div></div>';
                                $(".pro-con").html(proHtml);
                                oShow(".pro-con", 500, boxTitle, false, 200);
                            }
                        }
                    );
                });
            }
            break;
        default:
            var proHtml = '<div class="alert alert-error-icon"><i class="yicon yicon-ok font-lg"></i>投资失败！</div>';
            $(".pro-con").html(proHtml);
            oShow(".pro-con", 500, boxTitle, false, 240);
            break;
    }

    $(".artBox-close").die().live("click",function(){
        oClose();
        window.location.reload();
    });
}

//验证输入投资金额
function check_invest(usercash, vcash_all, cash,type) {
    //投资金额
    cash = cash.replace(/(^\s+)|(\s+$)/g,'');
   
    if(cash.length == 0 || cash ==0) {
        $('#'+type+'validataion_valid').removeClass();
        $('#'+type+'validataion_valid').addClass('field-validation-error');
        $('#'+type+'validataion_valid').html('<s class="arrow"><i class="arr-top"></i></s>请输入您要投资的金额');
        $('#'+type+'cash').focus();
        setTimeout(function(){
            $('#'+type+'validataion_valid').removeClass("field-validation-error").html("");
        },1300);
        return false;
    }

    //输入的必须是数字
    if(!/^[0-9]*$/.test(cash)) {
        $('#'+type+'validataion_valid').removeClass();
        $('#'+type+'validataion_valid').addClass('field-validation-error');
        $('#'+type+'validataion_valid').html('<s class="arrow"><i class="arr-top"></i></s>请输入您要投资的金额');
        $('#'+type+'cash').focus();
        setTimeout(function(){
            $('#'+type+'validataion_valid').removeClass("field-validation-error").html("");
        },1300);
        return false;
    }

    //用户账户余额不足
    if(parseFloat(usercash) < parseFloat(cash)) {
        $('#'+type+'validataion_valid').removeClass();
        $('#'+type+'validataion_valid').addClass('field-validation-error');
        $('#'+type+'validataion_valid').html('<s class="arrow"><i class="arr-top"></i></s>1.项目金额或您的余额可能不足； <br />2.投资金额需要为100的整数倍。');
        $('#'+type+'cash').focus();
        setTimeout(function(){
            $('#'+type+'validataion_valid').removeClass("field-validation-error").html("");
        },1300);
        return false;
    }

    //必须是100的整数倍
    if((cash % 100) != 0) {
        $('#'+type+'validataion_valid').removeClass();
        $('#'+type+'validataion_valid').addClass('field-validation-error');
       $('#'+type+'validataion_valid').html('<s class="arrow"><i class="arr-top"></i></s>1.项目金额或您的余额可能不足； <br />2.投资金额需要为100的整数倍。');
        $('#'+type+'cash').focus();
        setTimeout(function(){
            $('#'+type+'validataion_valid').removeClass("field-validation-error").html("");
        },1300);
        return false;
    }

    //输入的金额是否超过了项目可投余额
    if(parseFloat(cash) > parseFloat(vcash_all)){
        $('#'+type+'validataion_valid').removeClass();
        $('#'+type+'validataion_valid').addClass('field-validation-error');
        $('#'+type+'validataion_valid').html('<s class="arrow"><i class="arr-top"></i></s>1.项目金额或您的余额可能不足； <br />2.投资金额需要为100的整数倍。');
        $('#'+type+'cash').focus();
        setTimeout(function(){
            $('#'+type+'validataion_valid').removeClass("field-validation-error").html("");
        },1300);
        return false;
    }
    return true;
}

$(document).ready(function() {
  
      $("#finvestnow").click(function(){
       var type="f";
      var isUserLogin = $('#userstatus').val();
        
        if (isUserLogin <= 0) {
            location.href = '/User';
        }
        var proID = $('#fprojectId').val();
        var proInvestval = $('#fcash').val();//投资金额
        var usercash = $("#fvusercash").val().replace(/,/g,"");
        var vcash_all = $("#fvcash_all").val().replace(/,/g,"");


      
        if(check_invest(usercash,vcash_all,proInvestval,type)){

            investNow(proID,proInvestval);

            $('#confirmInvest').die().live('click', function () {
                //console.log(typeof proID);
                //var proID =parseInt(proID);
                //affirmInvest(proID);
                affirmInvest(proID,proInvestval);
            });
        }

     });
      $("#cinvestnow").click(function(){
               var type="c";
                var isUserLogin = $('#userstatus').val();
   
        if (isUserLogin <= 0) {
            location.href = '/User';
        }
        var proID = $('#cprojectId').val();
        var proInvestval = $('#ccash').val();//投资金额
        var usercash = $("#cvusercash").val().replace(/,/g,"");
        var vcash_all = $("#cvcash_all").val().replace(/,/g,"");
      
        if(check_invest(usercash,vcash_all,proInvestval,type)){
             

            investNow(proID,proInvestval);
            $('#confirmInvest').die().live('click', function () {

                affirmInvest(proID,proInvestval);
            });
        }


     });
      $("#qinvestnow").click(function(){
        var type="q";
        var isUserLogin = $('#userstatus').val();
        
        if (isUserLogin <= 0) {
            location.href = '/User';
        }
        var proID = $('#qprojectId').val();
        var proInvestval = $('#qcash').val();//投资金额
        var usercash = $("#qvusercash").val().replace(/,/g,"");
        var vcash_all = $("#qvcash_all").val().replace(/,/g,"");
          console.log(proID);
      
        if(check_invest(usercash,vcash_all,proInvestval,type)){
             
             
            investNow(proID,proInvestval);
            $('#confirmInvest').die().live('click', function () {
                affirmInvest(proID,proInvestval);
            });
        }

     });
      $("#zinvestnow").click(function(){
        var type="z";
        var isUserLogin = $('#userstatus').val();
        
        if (isUserLogin <= 0) {
            location.href = '/User';
        }
        var proID = $('#zprojectId').val();
        var proInvestval = $('#zcash').val();//投资金额
        var usercash = $("#zvusercash").val().replace(/,/g,"");
        var vcash_all = $("#zvcash_all").val().replace(/,/g,"");
      
        if(check_invest(usercash,vcash_all,proInvestval,type)){
             

            investNow(proID,proInvestval);
            $('#confirmInvest').die().live('click', function () {
                affirmInvest(proID,proInvestval);
            });
        }

     });

     $("#cardID").die().live("blur",function(){
        validateNo(cardID);
    });
});
