window.onload = function(){

    $(function(){
        $('.check_box').children().css({"display":"none"});
        var obj = $('.form-group').eq(0).children();
        obj.eq(1).focus(function(){
            obj.eq(2).children('.hint').css({"display":"block"}).siblings().css({"display":"none"});
            });
        obj.eq(1).blur(function(){
            var name  = obj.eq(1).val();
            var reg = /^[a-zA-Z][a-zA-Z0-9_]{5,17}$/;
            console.log(name);
            console.log(reg.test(name));
            if(!reg.test(name)){
            obj.eq(2).children('.no').css({"display":"block"}).siblings().css({"display":"none"});
            }else{
            obj.eq(2).children('.yes').css({"display":"block"}).siblings().css({"display":"none"});
            }
        });
    });
    
    $(function(){
        $('.check_box').children().css({"display":"none"});
        var obj = $('.form-group').eq(2).children();
        obj.eq(1).focus(function(){
            obj.eq(2).children('.hint').css({"display":"block"}).siblings().css({"display":"none"});
            });
        obj.eq(1).blur(function(){
            var name  = obj.eq(1).val();
            var reg = /^[a-zA-Z][a-zA-Z0-9_]{5,17}$/;
            if(!reg.test(name)){
            obj.eq(2).children('.no').css({"display":"block"}).siblings().css({"display":"none"});
            }else{
            obj.eq(2).children('.yes').css({"display":"block"}).siblings().css({"display":"none"});
            }
        });
    });
    $(function(){
        $('.check_box').children().css({"display":"none"});
        var obj = $('.form-group').eq(1).children();
        obj.eq(1).focus(function(){
            obj.eq(2).children('.hint').css({"display":"block"}).siblings().css({"display":"none"});
            });
        obj.eq(1).blur(function(){
            var name  = obj.eq(1).val();
            var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
            if(!reg.test(name)){
            obj.eq(2).children('.no').css({"display":"block"}).siblings().css({"display":"none"});
            }else{
            obj.eq(2).children('.yes').css({"display":"block"}).siblings().css({"display":"none"});
            }
        });
    });
    $(function(){
        $('.check_box').children().css({"display":"none"});
        var obj = $('.form-group').eq(3).children();
        obj.eq(1).focus(function(){
            obj.eq(2).children('.hint').css({"display":"block"}).siblings().css({"display":"none"});
            });
        obj.eq(1).blur(function(){
            var pas1  = $('.form-group').eq(2).children().eq(1).val();
            var pas2 = obj.eq(1).val();
            if(pas2 == ""){
                obj.eq(2).children('.hint').css({"display":"block"}).siblings().css({"display":"none"});
            }else if(pas1 != pas2){
            obj.eq(2).children('.no').css({"display":"block"}).siblings().css({"display":"none"});
            }else{
            obj.eq(2).children('.yes').css({"display":"block"}).siblings().css({"display":"none"});
            }
        });

    });
        addProvince();
}

//????????????

var cityList = new Array();
cityList['?????????']= ['?????????', '?????????','?????????','?????????','?????????','?????????','????????????', '?????????','????????????', '?????????','?????????','?????????','?????????','?????? ???','?????????','?????????','?????????','?????????'];
cityList['?????????']= ['?????????','?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '??????']; 
cityList['?????????']= ['?????????','?????????', '?????????','?????????','?????????','?????????','?????????','?????????', '?????????', '?????????', '?????????', '?????????', '????????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????']; 
cityList['?????????']= ['?????????','?????????','?????????','????????????','?????????','????????????','????????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','??????','??????','?????????','?????????','?????????','?????????','????????????????????????','??????????????????????????????','??????????????????????????????','??????????????????????????????']; 
cityList['?????????']= ['????????????', '?????????', '????????????', '?????????', '?????????', '?????????', '????????????', '?????????', '?????????', '?????????', '?????????']; 
cityList['?????????']= ['?????????','?????????','?????????', '????????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '????????????', '?????????', '?????????', '?????????', '?????????', '????????????']; 
cityList['?????????']= ['?????????',' ?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????????????????','??????????????????????????????','???????????????????????????','???????????????????????????','?????????????????????','??????????????????????????????','????????????????????????','?????????????????????']; 
cityList['?????????']= ['?????????' ,'?????????' ,'?????????' ,'?????????' ,'?????????' ,'?????????' ,'?????????' ,'?????????' ,'?????????' ,'?????????' ,'?????????' ,'?????????' ,'?????????' ,'????????????']; 
cityList['????????????'] = ['????????????','???????????????','?????????','?????????','????????????', '?????????', '?????????', '????????????', '????????????', '????????????', '?????????', '?????????', '??????????????????']; 
cityList['?????????','?????????', '?????????','?????????', '?????????', '?????????', '?????????', '?????????', '????????????', '?????????', '?????????', '?????????', '?????????', '?????????', '??????????????????????????????']; 
cityList['?????????'] = ['?????????', '?????????', '?????????', '?????????', '????????????', '?????????', '?????????', '?????????', '?????????', '?????????','?????????','?????????', '?????????', '?????????', '?????????', '??????', '?????????']; 
cityList['?????????'] = ['?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????'];
cityList['????????????'] = ['?????????','???????????????', '???????????????', '???????????????', '????????????', '????????????????????? ', '??????????????????????????? ', '??????????????????????????? ', '???????????????', '????????????????????????????????? ', '????????????', '????????????', '????????????????????????', '????????????', '???????????????', '????????????', '????????????', '???????????????', '????????????' ]; 
cityList['?????????'] = ['?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '????????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????' ];
cityList['?????????'] = ['?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????']; 
cityList['?????????'] = ['?????????','????????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????'];
cityList['?????????'] = ['?????????','?????????','?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '??????????????????????????????','?????????', '?????????', '?????????', '???????????????'];
cityList['????????????'] = ['?????????','?????????','?????????','?????????','?????????','????????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????'];
cityList['?????????']=['?????????','????????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????????????????', '?????????????????????'];
cityList['?????????']=['?????????','?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????' ];
cityList['????????????]=[???','???????????????', '?????????', '?????????', '?????????', '?????????', '???????????????', '???????????????', '???????????????', '???????????????', '?????????', '???????????????', '????????????' ];
cityList['?????????']=['?????????','?????????','?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????' ];
cityList['?????????']=['?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '????????????????????????'];
cityList['?????????']=['?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????' ];
cityList['?????????']=['?????????','????????????', '?????????', '?????????', '????????????', '?????????????????????????????????', '????????????', '??????????????????????????????', '??????????????????????????????'];
cityList['?????????']=['?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????','?????????'];
cityList['?????????']=['?????????' ,'????????????', '?????????????????????', '?????????????????????', '?????????????????????', '?????????????????????', '?????????????????????', '??????????????????????????????'];
cityList['??????'] = ['?????????','????????????', '????????????', '???????????????', '????????????', '????????????', '????????????' ];
cityList['?????????'] = ['?????????','?????????', '????????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '???????????????????????????', '?????????????????????', '?????????????????????'];
cityList['????????????'] = ['?????????','????????????','?????????','?????????','?????????'];
cityList['?????????'] = ['?????????','?????????','????????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????????????????', '?????????????????????', '?????????????????????', '?????????????????????', '???????????????????????????', '???????????????????????????' ];
cityList['?????????'] = ['?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????'];
cityList['??????????????????'] = ['?????????', '?????????', '??????', '??????', '????????????', '????????????', '????????????', '????????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '??????', '?????????', '?????????', '?????????' ];
cityList['??????????????????'] = ['??????'];

    //???????????????????????????????????????????????????????????????
function changeCity(){
    var province = document.getElementById("selProvince").value;
    var city = document.getElementById("selCity");
    city.innerHTML = "";//??????????????????
    for (var i in cityList) {
        if(i==province){
            city.add(new Option("--????????????--"));
            for(var j in cityList[i]){
                city.add(new Option(cityList[i][j],cityList[i][j],null));
            }
        }
    }
}

function addProvince(){
    var province = document.getElementById("selProvince");
    for (var i in cityList) {
        province.add(new Option(i,i,null));
    }
}