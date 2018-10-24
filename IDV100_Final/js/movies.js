$(function() {
    var apiRequest = new XMLHttpRequest();
    var apiRequestPoster = new XMLHttpRequest();
    
    apiRequest.open('GET', 'http://www.omdbapi.com/?i=tt3896198&apikey=462d8ac2', true);

    
    
    apiRequest.onload = function(){
         data = JSON.parse(this.response);
        console.log(data); 
        
    }
    

    
   
    
    
    
    
    
    
    
    
    
    
    
    
    apiRequest.send();
});