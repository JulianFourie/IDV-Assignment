$(function(){
    console.log("Document Ready");
    
     $(".navigation").find("img").on("mouseenter", function(){
            $(this).attr("src", "../img/logo_white_hover.png");
        });
    
    $(".navigation").find("img").on("mouseleave", function(){
        $(this).attr("src", "../img/logo_white.png");
    });
    
    $(".navigation-buttons").find("li").on("mouseenter", function(){
            $(this).parent().removeClass("navigation-buttons");
            $(this).parent().addClass("navigation-buttons-hover");
        });
    
    $(".navigation-buttons").find("li").on("mouseleave", function(){
            $(this).parent().removeClass("navigation-buttons-hover");
            $(this).parent().addClass("navigation-buttons");
        });
    
        $(".hover").hide();
  
    
    $(".movie").on("mouseenter", function(){
        $(this).find(".hover").show();
    });
    
    $(".movie").on("mouseleave", function(){
        $(this).find(".hover").hide();
    });
    
     $(".remove-btn").on("click", function(){
        $(this).closest(".movie").fadeOut(500);
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
    