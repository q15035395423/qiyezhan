let lis=$('ul.theme-son>li');
let mask=$('div.mask');
let close=$('.close');
let mImg=$('img',mask);
let btnL=$('div.btnL');
let btnR=$('div.btnR');
let index=0;
/*$(document).on('click',function(e){
    let element=e.target;
    if(element.nodeName=='IMG'){
        mImg.prop('src',$(element).prop('src'));
    }
    mask.addClass('active');
});*/
lis.on('click',function () {
    index=lis.index(this);
    let src=$('img',this).attr('src');
    mImg.attr('src',src);
    mask.addClass('active');
});
btnL.on('click',function(e){
    e.stopPropagation();
    index--;
    if(index<0){
        index=lis.length-1;
    }
    let src=$('li>img').eq(index).prop('src');
    mImg.prop('src',src);
});
btnR.on('click',function(e){
    e.stopPropagation();
    index++;
    if(index>(lis.length-1)){
        index=0;
    }
    let src=$('li>img').eq(index).prop('src');
    mImg.prop('src',src);
})
close.click(function () {
    mask.removeClass('active');
});

mask.on('click',function(e){
    let lefts=e.clientX;
    if(lefts<innerWidth/2){
        btnL.triggerHandler('click');
    }
    if(lefts>innerWidth/2){
        btnR.triggerHandler('click');
    }
})