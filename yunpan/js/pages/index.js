$(function(){
    //表格上的自定义checkbox，委托
    $( "table.file-list" ).on( "click", ".radio_box",function(){
        var element=$(this);
        var checked=$(this).hasClass("radio_checked");
        //全选
        if($(this).hasClass("check_all")){
            element=$( "table.file-list .radio_box" );
            //var checked=$(this).hasClass("radio_checked");
            //setCheckboxStatus($( "table.file-list .radio_box" ),!checked);
        }
        //else{
        //    var checked=$(this).hasClass("radio_checked");
            //如果是单选按钮，先将其他的checkbox设为非选中
            //setCheckboxStatus($(this).siblings(),false);
        //    setCheckboxStatus($(this),!checked);
        //
        //}
        setCheckboxStatus(element,!checked);
    })
    var setCheckboxStatus=function(element,checked){
        if(checked===true){
            element.addClass("radio_checked")
        }else{
            element.removeClass("radio_checked")
        }
    }



    //表格上操作按钮面板的打开和关闭,委托
    $( "table.file-list" ).on( "click", ".operation-bar .icon-down",function(){
        $(this).parent().hide();
    })
    $( "table.file-list" ).on( "click", ".td-operation .icon-down.open",function(){
        //先关闭其他的按钮操作面板
        $("table.file-list .operation-bar").hide();
        $(this).siblings(".operation-bar").show();
    })


    //退出菜单
    $(".avatar").click(function(){
        var dropdown=$(this).siblings(".dropdown-menu");
        if(dropdown.hasClass("hide")){
            dropdown.removeClass("hide");
        }else{
            dropdown.addClass("hide");
        }
    })
    //点击其他地方隐藏退出菜单
    $(document).click(function(e){
        var dropdown=$(".dropdown-menu");
        dropdown.addClass("hide");
    });



    var base_url="http://api.losta.net/api/";
    var db_name="shtpv";
    var doc_url=base_url+"doc/";
    var folder_url=doc_url+"folders/";
    var access_key="web_8ca9545e0c1348259cc0056f812b934a";
    var folder_data={};
    //function login(){
    //    var url=base_url+"Auth/Login";
    //    //登录
    //    $.ajax({
    //        url:url,
    //        method:"POST",
    //        contentType:"application/json;charset=UTF-8",
    //        data:{id:"wangjiayan",pwd:"123456",checkcode:"11"}
    //    }).done(function(data){
    //        access_key=data.AccessKey;
    //        //listfiles();
    //    }).fail(function(){
    //        console.log("登录失败");
    //    })
    //}
    //login();

    //加载目录列表
    (function (){
        var url=folder_url+db_name;
        $.ajax({
            url:url,
            method:"GET",
            contentType:"application/json;charset=UTF-8",
            beforeSend:function(jqXHR,settings){
                jqXHR.setRequestHeader("accesskey",access_key)
            },
            success:function(data,textStatus,jqXHR){
                var tmp_data=[];
                $.each(data,function(index,value){
                    tmp_data.push(_.values( _.omit(value, ['FolderId','CreateTime','Purview'])))
                })
                folder_data= _.zipObject(tmp_data);
                console.log(folder_data);
            }
        })
    })();


    //加载文档列表

    (function (){
        var url=doc_url+"files/"+db_name;
        $.ajax({
            url:url,
            method:"GET",
            contentType:"application/json;charset=UTF-8",
            beforeSend:function(jqXHR,settings){
                jqXHR.setRequestHeader("accesskey",access_key)
            },
            data:{mode:"normal"},
            success:function(data,textStatus,jqXHR){
                $("table.file-list tbody").empty();
                $.each(data,function(key,val){
                    html='<tr><td><div class="radio_box"><span class="radio_ck style1"></span></div></td><td class="file-name"><a class="ellipsis" href="#" title="">';
                    if(val.ContentType==="image/png"){
                        html=html+'<i class="icon icon-file-type-img"></i>';
                    }else if(val.ContentType==="video"){
                        html=html+'<i class="icon icon-file-type-video"></i>';
                    }else{
                        html=html+'<i class="icon icon-file-type-doc"></i>';
                    }
                    html=html+val.Filename+"</td>";
                    html=html+'<td>'+'-'+"</td>";
                    html=html+'<td>'+'-'+"</td>";
                    html=html+'<td>'+'A001'+"</td>";
                    html=html+'<td>'+val.UploadTime+"</td>";
                    html=html+'<td><div class="td-operation"><a class="icon icon-download" data-id="'+val.DocumentId+'"></a><a class="icon icon-down open"></a>'
                    +'<div class="operation-bar hide"><a class="icon icon-move"></a><a class="icon icon-delete" data-id="'+val.DocumentId+'"></a>'
                    +'<a class="icon icon-edit" data-id="'+val.DocumentId+'"></a><a class="icon icon-down"></a></div></div></td></td></tr>';
                    $("table.file-list tbody").append(html);
                })
                $( "a.icon-delete" ).click( function(){
                    var document_id=$(this).attr("data-id");
                    $( "a.icon-delete").removeClass("delete-line");
                    $(this).addClass("delete-line");
                    delete_file(document_id);
                })
                $( "a.icon-download" ).click( function(){
                    var document_id=$(this).attr("data-id");
                    download_file(document_id);
                })

            }

        })
    })();

    var delete_file=function (file_id){
        var url=doc_url+"files/"+db_name+"?id="+file_id;
        $.ajax({
            url: url,
            method: "DELETE",
            contentType:"application/json;charset=UTF-8",
            beforeSend:function(jqXHR,settings){
                jqXHR.setRequestHeader("accesskey",access_key)
            },
            success:function(data){
                if(data[0].Key==="Successed"){
                    $(".delete-line").parents("tr").remove();
                }
                else{
                    $( "a.icon-delete").removeClass("delete-line");
                }
        }})
    }
    var download_file=function(file_id){
        var url=doc_url+"files/"+db_name+"?id="+file_id+"&accesskey="+access_key;
        window.open(url);
    }


    //上传文件
    Dropzone.options.myAwesomeDropzone = {
        dictDefaultMessage:"拖拽文件到此处或点击上传（可上传多个文件）"
    }



})

