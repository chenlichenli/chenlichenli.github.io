var list = document.getElementById("list");
var baseURL = "https://swapi.co/api";
var film = "/films";
var id1 = "/6";
var fullURL = baseURL + film + id1;

var episode = document.getElementById("episode");
var title = document.getElementById("title");
var director = document.getElementById("director");
var producer = document.getElementById("producer");
var release = document.getElementById("release");
var opening = document.getElementById("opening");


(function() {
  document.getElementById("image").addEventListener("click", makeRequest);
 
  var httpRequest;

  function makeRequest() {
    httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
      alert("It did not work :(");
      return false;
    }
    
    httpRequest.onreadystatechange = fillInfo;
    httpRequest.open(
      "GET", fullURL
    );
    
    httpRequest.send();
  }
        
    
function fillInfo(){
    var responseContent;
    var listArray =[];

        if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status === 200){

                responseContent = httpRequest.responseText;

                var parsed = JSON.parse(responseContent);
                console.log(parsed);

                episode.innerHTML = parsed.episode_id;
                title.innerHTML = parsed.title;
                director.innerHTML = parsed.director;
                producer.innerHTML = parsed.producer;
                release.innerHTML = parsed.release_date;
                opening.innerHTML = parsed.opening_crawl;
               
                     
            }else{
                    alert("There was a problem with the request.");        
            }
        }
    }
})();



