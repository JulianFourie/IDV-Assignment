$(function() {
    var apiRequest = new XMLHttpRequest();
    var apiRequestPoster = new XMLHttpRequest();
    
    apiRequest.open('GET', 'http://www.omdbapi.com/?i=tt3896198&apikey=462d8ac2', true);
    
    apiRequest.onload = function(){
        var data = JSON.parse(this.response);
    }
    
    apiRequestPoster.open('GET', 'http://www.omdbapi.com/?i=tt3896198&apikey=462d8ac2', true);
    
    apiRequest.onload = function(){
        var dataPoster = JSON.parse(this.response);
    }
    
    
    
    
    
    
    
    
    
    
    
    
    apiRequest.send();
});