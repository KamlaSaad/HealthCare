$(document).ready(function(){
    $(".menu1").click(function(){
        $(".dropdowan").slideDown();
        $(this).hide();
        $(".menu2").show();
    });
    $(".menu2").click(function(){
        $(".dropdowan").slideUp();
        $(this).hide();
        $(".menu1").show();
    });
    
    $("aside section a").click(function(){
        $("aside section a").removeClass("active2")
            .parent().removeClass("active1");
        $(this).addClass("active2")
            .parent().addClass("active1");
    });
    $(".toggle").click(function(){
        $(this).toggleClass("left");
        $("aside").toggleClass("open");
        $("nav h3").toggleClass("h3");
    });
    
    
    $(".close1").click(function(){
        $(".f-table").fadeOut(600);
    });
    $(".close2").click(function(){
        $(".s-table").fadeOut(600);
    });
    $(".minus1").click(function(){
        $(".table1").fadeOut(400);
    });
    $(".minus2").click(function(){
        $(".table2").fadeOut(400);
    });
    $(".max1").click(function(){
        $(".table1").fadeIn(400);
    });
    $(".max2").click(function(){
        $(".table2").fadeIn(400);
    });
    $(".change a").click(function(){
        $(".upload").css("display","block");
    });
    
    $(".offer img").on({
        mouseenter:function(){
            $(this).next("div").show();
            $(this).siblings(".book").css({
                background:"#00d",
                color:"#fff"});
        },
        mouseleave:function(){
            $(this).next("div").hide();
            $(this).siblings(".book").css({
                background:"#fff",
                color:"#00d"});
            
        }
        
    });
    //input file
    $(".content .add input[type='file']")
        .change(function(){
        $(this).prev("span").text($(this).val());
    })
})