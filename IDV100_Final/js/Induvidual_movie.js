$(function() {
    console.log("ready");
        
        var key = localStorage.getItem("imdbKey");
    
        
        var apiRequest = 'http://www.omdbapi.com/?i=' + key + '&apikey=462d8ac2&'
        
        $.getJSON(apiRequest, moviecallback);
    
            function moviecallback(data){
                
                console.log(data);
                
                var poster = data.Poster;
                var title = data.Title;
                var genre = data.Genre;
                var rating = data.imdbRating;
                var year = data.Year;
                var language = data.Language;
                var runtime = data.Runtime;
                var plot = data.Plot;
                
                $(".movie-con").css("background-image", "url(" + poster + ")");
                $(".movie-con-md").css("background-image", "url(" + poster + ")");
                $("#movie_title").text(title);
                $("#genre").text(genre);
                $("#rating").text(rating);
                $("#year").text(year);
                $("#language").text(language);
                $("#runtime").text(runtime);
                $("#plot").text(plot);

                
                 
            } 
        
        $(".watchlist-xs").on("click", function(){
            var key = $(this).data("key");
            console.log(key);
            localStorage.setItem("imdbKey", key);
        });
    
        $(".watchlist").on("click", function(){
            var key = $(this).data("key");
            console.log(key);
            localStorage.setItem("imdbKey", key);
        });
            
            
            
            
            
            
        
            
    
   
        
    });