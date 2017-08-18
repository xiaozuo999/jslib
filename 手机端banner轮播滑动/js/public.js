$(function(){
 //导航点击收缩
    $(".navMoreIcon").click(function(){
        $(".navMoreList").slideToggle(500);
    })

    //添加通用尾部
    var xx='<script src="//wp.qiye.qq.com/qidian/2852137129/d84b3419096cc4fbc4bca10b0ceabb4a" charset="utf-8"></script>';
    var footer=''+xx;

    $("body").append(footer);
})



