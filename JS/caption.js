function captionlisturl(){  
var youtubeurl = document.getElementById("basic-url").value;
var lasturl = "http://video.google.com/timedtext?type=list&v=" + youtubeurl
console.log(lasturl);

}


function readxmllist() {
  // XML Request and store the information in variable xmlcontent 

  var select;
  var opt;
  var xmlcontent;
  var langlist
  var langcount 
    
  //XMLHttpRequest  
  var caplistreq = new XMLHttpRequest();
  caplistreq.open("GET", "http://video.google.com/timedtext?type=list&v=wJnBTPUQS5A", true);
  caplistreq.onreadystatechange = function () {
     if (caplistreq.readyState == 4 && caplistreq.status == 200)
     {
          xmlcontent = caplistreq.responseXML;
          langlist = xmlcontent.getElementsByTagName('track');
          langcount = langlist.length;
         
          //Print the number of avilable languages
          console.log(langcount);
         
         //For each language bring the text and code
          for(var i = 0; i < langcount ; i++){
          
          console.log(langlist[i].getAttribute("lang_translated"));
       
          //Display the information in the Page
          select = document.getElementById('sel1');
          opt = document.createElement('option');
          opt.innerHTML = document.createElement('option');
          opt.value = langlist[i].getAttribute("lang_code");
          opt.text = langlist[i].getAttribute("lang_translated");
          select.appendChild(opt);                      
          }
     }
};
caplistreq.send(null);
    
}