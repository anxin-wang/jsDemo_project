$(function(){
    //创建登录页面的slider对象
    $('.login-slider').bxSlider({
        pager:false,
        autoHover:true,
        nextSelector: '.slider-next',
        prevSelector: '.slider-prev',
        nextText: '&#xe604;',
        prevText: '&#xe603;',
        auto: true
    });
    //平时不显示箭头，hover时显示箭头
    $('.login-slider-container').hover(function(){
        $('.slider-control a.bx-prev').css('color','#c0c0c0');
        $('.slider-control a.bx-next').css('color','#c0c0c0');
    },function(){
        $('.slider-control a.bx-prev').css('color','#fff');
        $('.slider-control a.bx-next').css('color','#fff');
    })
    //PC登录页面显示
    $(".btn-pc-login").click(function(){
        $("#pc_login").show();
        $("#qr_login").hide();
        $("#public-code").hide();
        clearInterval(window.rs);
    })
    //微信扫码页面显示
    $(".btn-qr-code").click(function(){
        $("#qr_login").show();
        $("#pc_login").hide();
        $("#public-code").hide();
        if($('#wechat-qr-img').attr('src') != $('#wechat-qr-img').attr('data-original-src')){
            $('#wechat-qr-img').attr('src', $('#wechat-qr-img').attr('data-original-src'));
        }
        window.rs = setInterval( function(){
            $.getJSON('/User/Login/WxloginStatus?uuid=' + window.uuid, function(json){
                if(json.code==200 && json.data==1){
                    $('#wechat-qr-tip-ok').css({'display':'inline-block'});
                    setTimeout( function(){
                        location.href="/User/";
                        return false;
                    }, 1 * 1000 );
                }
                return false;
            });
        }, 3 * 1000);
        /*
         window.qrs = setInterval( function(){
         var imgurl = "/User/Login/WxloginQR?t=" + (new Date).getTime();
         $('#wechat-qr-img').attr('data-original-src', imgurl);
         $('#wechat-qr-img').attr('src', imgurl);
         }, 120 * 1000 );
         */
    })
    //微信公众号页面显示
    $(".btn-public-code").click(function(){
        $("#public-code").show();
        $("#qr_login").hide();
        $("#pc_login").hide();
    })

    //刷新验证码
    var getNewVerifyCode=function(){
        var timestamp = new Date();
        $("#CaptchaImage").attr("src", "/User/auth/verifynew/" + timestamp.getTime());
    }
    $("#CaptchaImage").click(getNewVerifyCode);
    $('#CaptchaInputText').focus(getNewVerifyCode);
    //验证码显示开关
    if('{$error_num}' > 3) {
        $('#preg_show').removeClass('hide');
        //$('#CaptchaInputText').removeAttr("disabled");
    }

    //JS生成QRCode
    if ($.support.leadingWhitespace) {
        $('#wechat-qr-img').qrcode({
            width: 190,
            height: 190,
            correctLevel: 0,
            text: 'http://' + location.host + '/Wxapp/Router/QRLogin?uuid=' + window.uuid
        });
        $('#wechat-tip-img').qrcode({
            width: 190,
            height: 190,
            correctLevel: 0,
            text: 'http://weixin.qq.com/r/T3XM1BjEg0X8rVy39yBd'
        });
    }
    $('#wechat-login-tip').tooltip();

    //表单验证
    $("#login-form").validate({
        success: "valid",
        rules: {
            username: {
                required: true,
                //minlength: 6,
                usernameormobile:true
            },
            password: {
                required: true,
                minlength: 6,
                maxlength:32
            },
            CaptchaInputText:{
                required: true,
                minlength: 4,
                verifycode:true
            }
        },
        messages: {
            username: {
                required: "请输入用户名",
                //minlength: "用户名至少6个字符",
                usernameormobile:"请输入正确的用户名/手机号"
            },
            password: {
                required: "请输入密码",
                minlength: "密码必须由6-32位字符组成",
                maxlength:"密码必须由6-32位字符组成"
            },
            CaptchaInputText:{
                required: "验证码不可为空",
                minlength: "必须为4位",
                verifycode:"请输入正确的验证码"
            }
        }
    });
    //输完密码或输完验证码模拟点击
    $("#password").keyup(function(e){
        if(e.which==13){
            $('#act_login').click();
        }
    })
    $("#CaptchaDeText").keyup(function(e){
        if(e.which==13){
            $('#act_login').click();
        }
    })



    window.uuid = '{$session_id}'; //parseInt( Math.random() * 10000000000000000 ).toString(); // uuid will exchange


    $('#act_login').click(function() {
        //if($('#preg_show').css('display') === 'none')//none and block
        //{
        //    $('#login-form').submit();
        //    return false;
        //}
        //验证码验证
        var url = '/User/Login/checkoutpreg/?preg='+$('#CaptchaInputText').val();
        $.ajax({
            type: "GET",
            url: url,
            success: function(data){
                if(data['status'] === 0)
                {
                    $('#div_preg').removeClass('hide');
                    $('#CaptchaInputText-error').html(data['msg']);
                    $('#error_msg').css('display','none');
                    return false;
                }
                else
                {
                     
                    $('#div_preg').addClass('hide');
                    $('#login-form').submit();
                }
            }
        });
    });
})



