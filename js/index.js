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


    $(function(){
        $('.slide_content').animate({},function(){
            var i = 0;
            t = setInterval(function(){
                if(i>2364){
                    i = 0;
                }else{
                    i = i + 0.2;
                }
            $('.slide_content').css({'transform':'translate(-'+i+'px)'});
            },1);
            $('.slide_content').mousemove(function(){
                clearInterval(t);
            }).mouseleave(function(){
                t = setInterval(function(){
                if(i>2364){
                    i = 0;
                }else{
                    i = i + 0.2;
                }
            $('.slide_content').css({'transform':'translate(-'+i+'px)'});
            },1);
            });
            
        });
    });



    var $advercontant = $('.advercontant');
    var $closeadverdiv = $('.closeadverdiv');
    var $img = $('.advertisement img');
    var imgflag = true;
    console.log($advercontant);
    $closeadverdiv.click(function(){
        if(imgflag == true){
            $img.css({'display':'none'});
            $closeadverdiv.css({'transform':'rotate(270deg)'});
            imgflag = false;
        }else{
            $img.css({'display':'block'});
            $img.css({'height':'200px'});
            $closeadverdiv.css({'transform':'rotate(90deg)'});
            imgflag = true;
        }
       
       
    })

    // 倒计时
    var SysSecond;
    var InterValObj;
    $(document).ready(function() {
    SysSecond = 172800; //获取倒计时的起始时间
    InterValObj = window.setInterval(function(){
        if (SysSecond > 0) {
            SysSecond = SysSecond - 1;
            var second = Math.floor(SysSecond % 60);            // 计算秒     
            var minite = Math.floor((SysSecond / 60) % 60);      //计算分 
            var hour = Math.floor((SysSecond / 3600) % 24);      //计算小时
            var day = Math.floor((SysSecond / 3600) / 24);       //计算天 
            $(".chang_time").html(day +"天"+ hour+"小时" + minite + "分" + second + "秒");
            } else {
            window.clearInterval(InterValObj);
            $(".chang_time").html("本次优惠已结束");
            }
    }, 1000); //间隔函数，1秒执行
    console.log(SysSecond);
    });


    // 导航栏

    
    var $titles = $(".nav-tabs li");
    var tabsIndex = 0;
    $(".list_right_content").eq(0).css({'display':'block'})
    .siblings().css({'display':'none'});
    $(".list_left_content").eq(0).css({'display':'block'})
    .siblings().css({'display':'none'});
    $titles.each(function(index,obj){
        $(this).click(function(){
            tabsIndex = index;
            $(this).addClass('active').siblings().removeClass('active');
            $(".list_left_content").eq(index).css({'display':'block'})
            .siblings().css({'display':'none'});
        })
    })


    var $tabs = $(".list_left a");
    $tabs.each(function(index,obj){
        $(this).mouseover(function(){
            $(".list_right_content").eq(index % 8 ).css({'display':'block'})
            .siblings().css({'display':'none'});
        })
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
   
}






