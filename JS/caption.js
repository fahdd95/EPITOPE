function captionlisturl(){  
var youtubeurl = document.getElementById("basic-url").value;
var lasturl = "http://video.google.com/timedtext?type=list&v=" + youtubeurl
console.log(lasturl);

}


function readxmllist() {
  var caplistreq = new XMLHttpRequest();
  caplistreq.open("GET", "http://video.google.com/timedtext?type=list&v=wJnBTPUQS5A", true);
  caplistreq.onreadystatechange = function () {
     if (caplistreq.readyState == 4 && caplistreq.status == 200)
     {
          var doc = caplistreq.responseXML;
          console.log(doc.getElementById("0"));

     }
};
caplistreq.send(null);
}