$(function(){
    
    $(".movie").hide();
    
    console.log("Document Ready");
    
    var watchlistArray = [];
    
    console.log(localStorage.getItem("imdbKey"));
    
    
            for(var i=0; i < localStorage.getItem("imdbKey").length; i++){

                watchlistArray.push(localStorage.getItem("imdbKey"));
                
                var apiRequest = 'http://www.omdbapi.com/?i=' + watchlistArray[i] + '&apikey=462d8ac2&'
        
        $.getJSON(apiRequest, moviecallback);

                function moviecallback(data){
                
                    console.log(data);
                 
                    var Poster = data.Poster;
                    var Title = data.Title;
                    var Year = data.Year;


                console.log(Title);

                function createMovie(){

                    $(".content").append("<div class='movie col-xs-12 col-md-4 col-lg-3 col-centered'><div class='normal'><img alt='cover'src='" + Poster + "'></div><!--normal--><div class='hover'><div class='buttons'><div class='movie-title'><p>"+ Title +"</p></div><!--movie-title--><div class='date'><p>("+ Year +")</p></div><!--date--><div class='watch-btn'><p>WATCH</p></div><!--watch-btn--><div class='remove-btn'><p>REMOVE</p></div><!--remove-btn--></div><!--buttons--></div><!--hover--></div><!--movie-->");


                }
                    createMovie();
                }
                apiRequest.send();


            }
    
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
    