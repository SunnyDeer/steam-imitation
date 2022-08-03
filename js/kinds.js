window.onload = function(){
    document.getElementById('login').style.display='none';
    document.getElementById('mask').style.display='none';
    $('#login_but').on('click', function () {
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
    // 下拉菜单
    var $navbartitle = $(".store-navbar>ul>li");
    $(".yourshop_dropdown").css({'display':'none'});
    $(".kind_dropdown").css({'display':'none'});
    $(".recommend_dropdown").css({'display':'none'});
    $navbartitle.eq(0).mouseover(function(){
        $(".yourshop_dropdown").css({'display':'block'});
    }).mouseleave(function(){
        $(".yourshop_dropdown").css({'display':'none'});
    });
    $navbartitle.eq(1).mouseover(function(){
        $(".recommend_dropdown").css({'display':'block'});
    }).mouseleave(function(){
        $(".recommend_dropdown").css({'display':'none'});
    });
    $navbartitle.eq(2).mouseover(function(){
        $(".kind_dropdown").css({'display':'block'});
    }).mouseleave(function(){
        $(".kind_dropdown").css({'display':'none'});
    });

    //获取楼层
    var floors = document.querySelectorAll(".floor");
    //获取导航
    var floorNavs = document.querySelectorAll(".floorNav>li");
    window.onscroll = function () {
        //获取视窗高度
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let activeIndex;
        floors.forEach((floor, index) => {
            floor.offsetTop - 150 <= scrollTop ? activeIndex = index : null;
        });
        // 添加样式
        floorNavs.forEach((nav, index) => {
            index === activeIndex ? nav.classList.add('active_side') : nav.classList.remove('active_side');
        });
    };

    var $qsloornav = $(".floorNav>li")
    $qsloornav.each(function(index,obj){
        $(this).click(function(){
            console.log(index);
            console.log(floors[index].offsetTop);
            nowposition = document.documentElement.scrollTop;
            targetposition = floors[index].offsetTop;
            if(nowposition < targetposition){
                step = 10;
            }else{
                step = -10;
            }
            slide_page = setInterval(function(){
                if((step < 0 && nowposition < targetposition) || (step > 0 && nowposition > targetposition)){
                    clearInterval(slide_page);
                }else{
                    nowposition = nowposition+step;
                    document.documentElement.scrollTop = nowposition;
                }
            },1);

        })
    })

    $(".goods_display a").eq(0).css({'display':'block'})
    .siblings().css({'display':'none'});
    var $tabs = $(".goods_nav a");
    $tabs.each(function(index,obj){
        $(this).mouseover(function(){
            $(".goods_display a").eq(index).css({'display':'block'})
            .siblings().css({'display':'none'});
        })
    })
   
}






