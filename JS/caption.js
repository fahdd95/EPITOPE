function captionlisturl(){  
var youtubeurl = document.getElementById("basic-url").value;
var lasturl = "http://video.google.com/timedtext?type=list&v=" + youtubeurl
console.log(lasturl);

}


function readxmllist() {
  // XML Request and store the information in variable xmlcontent 
  var xmlcontent;
  var caplistreq = new XMLHttpRequest();
  caplistreq.open("GET", "http://video.google.com/timedtext?type=list&v=wJnBTPUQS5A", true);
  caplistreq.onreadystatechange = function () {
     if (caplistreq.readyState == 4 && caplistreq.status == 200)
     {
          xmlcontent = caplistreq.responseXML;
          
          var langlist = xmlcontent.getElementsByTagName('track');
          var langcount = langlist.length;
          console.log(langcount);
          
          for(var i = 0; i < langcount ; i++){
          
          console.log(langlist[i].getAttribute("lang_translated"));
              
          select = document.getElementById('sel1');
          var opt = document.createElement('option');
          opt.innerHTML = document.createElement('option');
          opt.value = langlist[i].getAttribute("lang_code");
          opt.text = langlist[i].getAttribute("lang_translated");
          select.appendChild(opt);
              
              
          }
         
    

     }
};
caplistreq.send(null);
 
 //Display the information in the Page
 
    
    
    
}