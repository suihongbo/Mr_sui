//字体变色
var oQingfeng = document.getElementsByClassName('mine')[0];
function changeColor(){
    var color="aqua|#2196f3|hotpink|#f00|#0f0";
    color=color.split("|");
    oQingfeng.style.color= color[parseInt(Math.random() * color.length)];
}
var timerChangeColor = setInterval("changeColor()",500);
oQingfeng.onmouseover = function () {
    clearInterval(timerChangeColor);
}
oQingfeng.onmouseout = function () {
    timerChangeColor = setInterval("changeColor()",500);
}
//字体变色结束

//mark自动隐藏
setTimeout(function () {
    $("#mark").css({
        "opacity": "0",
        "transition": "all 2s ease"
    });
}, 2000);
setTimeout(function () {
    $("#mark").css({
        "display": "none"
    });
}, 3000);

//
$('.carousel').carousel({
    interval: 2000
})

$(".flicker").css({
    "animation":"zoomInDown 2s ease forwards "
});
$(".info1,#mark1").css({
    top: 100,
    // left: 100,
    // transitionDelay: 2000
});
$(".info2").css({
    top: 100,
    // right: 100,
    // transitionDelay: 2000
});
$("#mark2").css({
    top:300
});
$(".info3").css({
    top: 400
});

//导航动画
$("#move a").on("click", function (e) {
    var href = $(this).attr("href"); //#div1 #dvi2 #div3
    var top = $(href).offset().top;
    $(this).parent().addClass("active").siblings().removeClass("active");
    $("html,body").animate({
        scrollTop: top
    }, 500);
    history.pushState(top, "");
    return false;
});
window.onpopstate = function (e) {
    $("html,body").animate({
        scrollTop: e.state
    }, 500);
};

// 滑动滚动条 技能掌握
$(window).scroll(function () {

    if ($(document).scrollTop() + 10 >= $("#skill").offset().top) {
        $("#move li:nth-child(2)").addClass("active").siblings().removeClass("active");
        //动态圆
        $(".progress .progress-right .progress-bar").css({
            "animation": "loading-1 1.8s linear forwards"
        })
        $(".progress.blue .progress-left .progress-bar").css({
            "animation": "loading-2 1.5s linear forwards 1.8s"
        });
        $(".progress.green .progress-left .progress-bar").css({
            "animation": "loading-5 1.5s linear forwards 1.8s"
        });
        $(".progress.yellow .progress-left .progress-bar").css({
            "animation": "loading-3 1.5s linear forwards 1.8s"
        });

        //动态进度条
        $(".block1,.block2").css({
            "background": "#099fff",
            "animation": "play1 2s ease forwards"
        });
        $(".block3").css({
            "background": "#099fff",
            "animation": "play2 2s ease forwards"
        });
        $(".block4,.block5").css({
            "background": "#099fff",
            "animation": "play4 2s ease forwards"
        });
        $(".block6").css({
            "background": "#40c7ac",
            "animation": "play2 2s ease forwards"
        });
        $(".block7").css({
            "background": "#40c7ac",
            "animation": "play4 2s ease forwards"
        })
        $(".block8").css({
            "background": "#fdbb08",
            "animation": "play5 2s ease forwards"
        })
        $(".block9").css({
            "background": "#fdbb08",
            "animation": "play3 2s ease forwards"
        })
        $(".block10").css({
            "background": "#fdbb08",
            "animation": "play3 2s ease forwards"
        })
        $(".block11").css({
            "background": "#fdbb08",
            "animation": "play6 2s ease forwards"
        })
    }
    if ($(document).scrollTop() + 10 >= $("#project").offset().top) {
        $("#move li:nth-child(3)").addClass("active").siblings().removeClass("active");
    };
    if ($(document).scrollTop() + 20 >= $("#contact").offset().top) {
        $("#move li:nth-child(4)").addClass("active").siblings().removeClass("active");
        $("h4,p").css({
            "animation": "jackInTheBox 3s ease forwards"
        });
    };
    if ($(document).scrollTop() == 0) {
        $("#move li").removeClass("active");
    };
});
//回到顶部按钮
$("button[type='button']").on("click", function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1500);
});

