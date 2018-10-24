$(function() {
    var apiRequest = new XMLHttpRequest();
    
    apiRequest.open('GET', 'http://www.omdbapi.com/?i=tt3896198&apikey=462d8ac2', true);

    
    apiRequest.onload = function(){
         data = JSON.parse(this.response);
        console.log(data); 
        
    }
    
    
    function createContainers(Title, Year, Rated, Released, Runtime, Genre, Director, Actors, Plot, Poster){
        $(".nav-con-inner").append("<div class='movie'><div class='image'><img src=" + Poster + "></div><div class='text'>" + Title+ "</div></div>");
        
        localStorage.setItem("title", Title);
        localStorage.setItem("year", Year);
        localStorage.setItem("rated", Rated);
        localStorage.setItem("released", Released);
        localStorage.setItem("runtime", Runtime);
        localStorage.setItem("genre", Genre);
        localStorage.setItem("director", Director);
        localStorage.setItem("actors", Actors);
        localStorage.setItem("plot", Plot);
        localStorage.setItem("poster", Poster);
    }
    
    
    
    
    
    
    
    apiRequest.send();
});