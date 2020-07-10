function captionlist(){  
var youtubeurl = document.getElementById("basic-url").value;
var lasturl = "http://video.google.com/timedtext?type=list&v=" + youtubeurl
window.open(lasturl, '_blank');


}