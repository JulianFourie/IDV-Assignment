$(function() {
    
    console.log("ready");
        
        var key = localStorage.getItem("imdbKey");
    
        
        /*var apiRequest = 'http://www.omdbapi.com/?i=' + key + '&apikey=462d8ac2&'*/
    
        var apiRequest = 'http://www.omdbapi.com/?i=tt4530422&apikey=462d8ac2&'
        
        
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


            }; 
                 
            
            
            
        var apiRequest2 = 'http://www.omdbapi.com/?i=tt2709692&apikey=462d8ac2&'
        
        $.getJSON(apiRequest2,moviecallback2);
    
        function moviecallback2(data2){
            console.log(data2)
            
            var poster = data2.Poster;
            
            $(".movie-con-1").css("background-image", "url(" + poster + ")");
        }
    
        var apiRequest3 = 'http://www.omdbapi.com/?i=tt5177088&apikey=462d8ac2&'
        
        $.getJSON(apiRequest3,moviecallback3);
    
        function moviecallback3(data3){
            console.log(data3)
            
            var poster = data3.Poster;
            
            $(".movie-con-2").css("background-image", "url(" + poster + ")");
        }
    
        var apiRequest4 = 'http://www.omdbapi.com/?i=tt4530422&apikey=462d8ac2&'
        
        $.getJSON(apiRequest4,moviecallback4);
    
        function moviecallback4(data4){
            console.log(data4)
            
            var poster = data4.Poster;
            
            $(".movie-con-3").css("background-image", "url(" + poster + ")");
        }
    
        var apiRequest5 = 'http://www.omdbapi.com/?i=tt7931968&apikey=462d8ac2&'
        
        $.getJSON(apiRequest5,moviecallback5);
    
        function moviecallback5(data5){
            console.log(data5)
            
            var poster = data5.Poster;
            
            $(".movie-con-4").css("background-image", "url(" + poster + ")");
        }
    
        var apiRequest6 = 'http://www.omdbapi.com/?i=tt7204348&apikey=462d8ac2&'
        
        $.getJSON(apiRequest6,moviecallback6);
    
        function moviecallback6(data6){
            console.log(data6)
            
            var poster = data6.Poster;
            
            $(".movie-con-5").css("background-image", "url(" + poster + ")");
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

// 2. This code loads the IFrame Player API code asynchronously.
              var tag = document.createElement('script');

              tag.src = "https://www.youtube.com/iframe_api";
              var firstScriptTag = document.getElementsByTagName('script')[0];
              firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

              // 3. This function creates an <iframe> (and YouTube player)
              //    after the API code downloads.
              var player;
              function onYouTubeIframeAPIReady() {
                player = new YT.Player('player', {
                  height: '700px',
                  width: '100%',
                  videoId: 'USPd0vX2sdc',
                  events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                  }
                });
              }

              // 4. The API will call this function when the video player is ready.
              function onPlayerReady(event) {
                event.target.playVideo();
              }

              // 5. The API calls this function when the player's state changes.
              //    The function indicates that when playing a video (state=1),
              //    the player should play for six seconds and then stop.
              var done = false;
              function onPlayerStateChange(event) {
                if (event.data == YT.PlayerState.PLAYING && !done) {
                  setTimeout(stopVideo, 6000);
                  done = true;
                }
              }
              function stopVideo() {
                player.stopVideo();
              }