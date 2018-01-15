$(function () {
    /*导航*/
    let lis=$('.nav-son>li');
    lis.on('mouseenter mouseleave',function () {
        $(this).find('.zhuti').stop(true,true);
        $(this).find('.zhuti').slideToggle();
    })

    window.onscroll=function () {
        let scrolltop=document.body.scrollTop;
        if(scrolltop>=162){
            $('.header').css({display:'block'}).animate();
        }else{
            $('.header').css({display:'none'}).animate();
        }

    }
    let btnR=$('.btnR');
    btnR.on('click',function () {
        let next=$('.active').next();
        if(next.length){
            move(next,'right');
        }else{
            next=$('.banner-son>li').eq(0);
            move(next,'right');
        }

    })
    setInterval(function () {
        btnR.triggerHandler('click');
    },3000);
    function move(obj,dir) {
        let active=$('.active');
        active.addClass(dir).delay(1000).queue(function () {
            $(this).removeClass('right').removeClass('active');
            $(this).dequeue();
        })

        let d=dir=='right'?'left':'right';
        obj.addClass(d);
        obj[0].offsetWidth;
        obj.removeClass(d).addClass('active');
    }


})