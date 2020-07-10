function captionlisturl(){  
var youtubeurl = document.getElementById("basic-url").value;
var lasturl = "http://video.google.com/timedtext?type=list&v=" + youtubeurl
console.log(lasturl);

}


function readxmllist() {
  var youtubecaplisturl = new XMLHttpRequest();
  youtubecaplisturlyoutubecaplisturl.open("GET", "http://video.google.com/timedtext?type=list&v=wJnBTPUQS5A", true);
  youtubecaplisturl.onreadystatechange = function () {
     if (youtubecaplisturl.readyState == 4 && youtubecaplisturl.status == 200)
     {
          var doc = youtubecaplisturl.responseXML;
          console.log(doc.getElementById("0"));

     }
};
x.send(null);
}