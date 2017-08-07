/**
 * Created by Administrator on 2017/8/3.
 */
$(function(){
    $(".menuIcon").on("touchstart",function(){
        $(".nav").slideDown();
        $(".closeNav").show();
        $(".menuIcon").hide();
    });
    $(".closeNav").on("touchstart",function(){
        $(".nav").slideUp();
        $(".closeNav").hide();
        $(".menuIcon").show();
    });
})
//申请试用弹出框
$(".winBg").on("touchstart",function(){
    console.log("body")
    close();
});
function showNotice(n){
    if(n==0){
        $('.fail').hide();
        $('.window,.window .succeedApply,.window .winBg').show();
    }else if(n == 1){
        $('.window .succeedApply').hide();
        $('.window,.window .fail,.window .winBg').show();
    }else if(n == 2){
        $('.window .succeed').hide();
        $('.window,.window .apply,.window .winBg').show();
    }else if(n == 3){
        $('.window .apply').hide();
        $('.window,.window .succeed,.window .winBg').show();
    }
}
function close(){
    $('.window,.window .winBg').hide();
}
