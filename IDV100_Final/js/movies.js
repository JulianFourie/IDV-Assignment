$(function() {
    var apiRequest = new XMLHttpRequest();
    
    
    
    var movieSearch = "Dogs"
    
    apiRequest.open('GET', 'http://www.omdbapi.com/?apikey=462d8ac2&s="' + movieSearch + '"', true);
    
   /* var movieSearch = "Dogs" */
   /* apiRequest.open('GET', 'http://www.omdbapi.com/?apikey=462d8ac2&i="' + imdbCode + '"', true); */

    apiRequest.onload = function(){
         data = JSON.parse(this.response);
         console.log(data); 
    
    
    function createContainers(Title, Year, Rated, Released, Runtime, Genre, Director, Actors, Plot, Poster){
        
         
        
        for( var i = 0; i < data.Search.length; i++){
            var Title = data.Search[i].Title;
            var Year = data.Search[i].Year;
            var Poster = data.Search[i].Poster;
            var imdbKey = data.Search[i].imdbID;
            
            console.log(data.Search[i].Poster);
            
            $(".nav-con-inner").append("<div class='movie'><div class='image'><img src='" + Poster + "'></div><div class='overlay'><div class='title'><p>" + Title + "</p></div><div class='watch-now' data-key='" + imdbKey + "'><p>WATCH NOW</p></div><div class='watchlist' data-key='" + imdbKey + "'><p>ADD TO WATCHLIST</p></div></div></div>");
            
            
        }
        
        
    }
        
        
        
        createContainers();
        
        
    
    } /* onload apiRequest */
    
    
    
    
    
    
    apiRequest.send();
});