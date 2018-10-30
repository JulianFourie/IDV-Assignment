$(function() {
    var apiRequest = new XMLHttpRequest();
    
    var movieSearch = "Sleep"
    
    apiRequest.open('GET', 'http://www.omdbapi.com/?apikey=462d8ac2&s="' + movieSearch + '"', true);
    
   /* var movieSearch = "Dogs" */
   /* apiRequest.open('GET', 'http://www.omdbapi.com/?apikey=462d8ac2&i="' + imdbCode + '"', true); */

    apiRequest.onload = function(){
        data = JSON.parse(this.response);
        console.log(data); 

        function createContainers(Title, Year, Poster, imdbKey){

            for( var i = 0; i < data.Search.length; i++){
                var Title = data.Search[i].Title;
                var Year = data.Search[i].Year;
                var Poster = data.Search[i].Poster;
                var imdbKey = data.Search[i].imdbID;

                console.log(data.Search[i].Poster);

                $(".nav-con-inner").append("<div class='movie'><div class='image'><img src='" + Poster + "'></div><div class='overlay'><div class='title'><p>" + Title + "</p></div><a href='Individual_movie.html'><div class='watch-now' data-key='" + imdbKey + "'><p>WATCH NOW</p></div></a><a href='watchlist2.html'><div class='watchlist' data-key='" + imdbKey + "'><p>ADD TO WATCHLIST</p></div></a></div></div>");
            }

        }

        createContainers();
        
        $(".watch-now").on("click", function(){
            var key = $(this).data("key");
            console.log(key);
            localStorage.setItem("imdbKey", key);
        });
        
        $(".watchlist").on("click", function(){
            var key = $(this).data("key");
            console.log(key);
            localStorage.setItem("imdbKey", key);
        });
    
    } /* onload apiRequest */
    
    
    apiRequest.send();
});

/* PLEASE READ THIS WHEN IMPLEMENTING THE API IN YOUR PAGE 
    
    Use this code to make it process the data you need:
        
        
    $(function() {
        
        var key = localStorage.getItem("imdbKey");
        
        apiRequest.open('GET', 'http://www.omdbapi.com/?i=' + key + 'apikey=462d8ac2&', true);
        
        apiRequest.onload = function(){
            data = JSON.parse(this.response);
            console.log(data);
            
            function createVariables(Title, Year, Rated, Released, Genre, Plot, Language, Country, Poster){
                localStorage.setItem("localTitle", data.Search.Title);
                localStorage.setItem("localYear", data.Search.Year);
                localStorage.setItem("localRated", data.Search.Rated);
                localStorage.setItem("localReleased", data.Search.Released);
                localStorage.setItem("localGenre", data.Search.Genre);
                localStorage.setItem("localPlot", data.Search.Plot);
                localStorage.setItem("localLanguage", data.Search.Language);
                localStorage.setItem("localCountry", data.Search.Country);
                localStorage.setItem("localPoster", data.Search.Poster);
            }
            
            createVariables();
            
        }
        
        apiRequest.send();
    });
*/ 