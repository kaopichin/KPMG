//login
$(function(){
    $("#indexLogin").mousedown(function(){
        console.log(1);
        $("#login").css({"display":"block"});
    });

//register
    $("#registerP").mousedown(function(){
        $("#register").css({"display":"block"});
    });
//loginP
    $("#loginP").mousedown(function(){
        $("#register").css({"display":"none"});
    });
//close
    $(".close").mousedown(function(){
        $("#login").css({"display":"none"});
        $("#register").css({"display":"none"});
    });


//正则
    $("#regPhone").blur(function(){
        var regPhoneStr=this.value;
        var reg = /^1[34578]\d{9}$/;
        if(reg.test(regPhoneStr)){
            $("#regPhone").css({"background":"white"});
        }else{
            $("#regPhone").css({"background":"#fd6363"});
        }
    })

    //注册：
    var username = "";
    var userpass = "";
    $("#regBtn").click(function(event) {
        username = $("#regPhone").val();
        userpass = $("#regPass").val();
        //console.log($("#zusername").css("background-color"));
        if($("#regPhone").css("background-color")=="rgb(255, 0, 0)"){
            alert("请检查你的输入")
        }else{
            console.log(username,userpass);
            $.ajax({
                url: 'php/addUser.php',
                type: 'post',

                data: {
                    "userId": username,
                    "userPass": userpass
                },
            })
                .done(function(data) {
                    if(data=="1"){
                        alert("注册失败")
                    }else{
                        alert("注册成功")

                    }
                });
        }



    });

    //验证是否重复
    $("#regBtn").blur(function(event) {
        username = $("#regPhone").val()
        $.ajax({
            url: 'php/checkUser.php',
            type: 'get',

            data: {"userId": username}
        })
            .done(function(data) {
                if(data=='0'){
                    $("#regPhone").css({"background":"#fd6363"})
                }else{
                    $("#regPhone").css({"background":"white"});

                }
            })



    });


    //登录
    $("#loginBtn").click(function(event) {
        username = $("#loginPhone").val()
        userpass = $("#loginPass").val()
        $.ajax({
            url: 'php/login.php',
            type: 'post',

            data: {
                "userId": username,
                "userPass": userpass
            },
        })
            .done(function(data) {
                if(data=="1"){
                    alert("登录成功")
                    setCookie("username",username,2)
                    $("#indexLogin").innerHTML="hello"+username;
                    $("#login").css({"display":"none"});
                    $("#register").css({"display":"none"});
                }else{
                    alert("登录失败")

                }
            })


    });

});