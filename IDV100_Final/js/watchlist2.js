$(function(){
    console.log("Document Ready");
    
     $(".navigation").find("img").on("mouseenter", function(){
            $(this).attr("src", "../img/logo_white_hover.png");
        });
    
    $(".navigation").find("img").on("mouseleave", function(){
        $(this).attr("src", "../img/logo_white.png");
    });
    
    $(".pinterest").find("img").on("mouseenter", function(){
            $(this).attr("src", "../img/pin_hover.png");
        });
    
     $(".pinterest").find("img").on("mouseleave", function(){
        $(this).attr("src", "../img/pin.png");
    });
    
    
     $(".facebook").find("img").on("mouseenter", function(){
            $(this).attr("src", "../img/fb_hover.png");
        });
    
     $(".facebook").find("img").on("mouseleave", function(){
        $(this).attr("src", "../img/fb.png");
    });
    
     $(".instagram").find("img").on("mouseenter", function(){
            $(this).attr("src", "../img/insta_hover.png");
        });
    
     $(".instagram").find("img").on("mouseleave", function(){
        $(this).attr("src", "../img/insta.png");
    });
    
     $(".twitter").find("img").on("mouseenter", function(){
            $(this).attr("src", "../img/twitter_hover.png");
        });
    
     $(".twitter").find("img").on("mouseleave", function(){
        $(this).attr("src", "../img/twitter.png");
    });
    
    
});
    