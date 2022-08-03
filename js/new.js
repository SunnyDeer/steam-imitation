window.onload = function(){

    document.getElementById('login').style.display='none';
    document.getElementById('mask').style.display='none';
    $('#login_but').on('click', function () {
        $('#login').css("display","block");
        $('#mask').css("display","block");
    })
    $('.eventcalendar_LogInButton').on('click', function () {
        $('#login').css("display","block");
        $('#mask').css("display","block");
    })
    $('#myButton').on('click', function () {
        $('#login').css("display","none");
        $('#mask').css("display","none");
    })
    $('#mask').on('click', function () {
        $('#login').css("display","none");
        $('#mask').css("display","none");
    })
    var $title = $(".item");
    var $titlea = $(".item>a");
    $title.mouseover()
    console.log($title);

    $title.each(function(index,obj){
        $(this).mouseover(function(){
            $(this).addClass("active").siblings().removeClass("active");
        }).mouseleave(function(){
            $(this).removeClass("active");
        })
    })

}