//this method will take your url and process it for list
function captionlisturl(){  
var lasturl;
var youtubeurl = document.getElementById("basic-url").value;
var firstcopone = "https://youtu.be";
var firstcoptwo = "youtu.be";
var checkerone = youtubeurl.substr(0,16);
var checkertwo = youtubeurl.substr(0,8); 
console.log(checkerone);
console.log(checkertwo);

if (firstcopone == checkerone) {
   lasturl = "http://video.google.com/timedtext?type=list&v=" + youtubeurl.substr(17);  
    
} 
else if (firstcoptwo == checkertwo ) {
   lasturl = "http://video.google.com/timedtext?type=list&v=" + youtubeurl.substr(9);   
} 
else {  
lasturl = "http://video.google.com/timedtext?type=list&v=" + youtubeurl.split('=')[1];
}
console.log(lasturl);
return lasturl ;
}


// this method bring available lang for your youtube video 
function bringlangcode(Captionlist) {
  // XML Request and Show options on the user inteface
  var select;
  var opt;
  var xmlcontent;
  var langlist
  var langcount 
  var capurl = Captionlist ;
    
  //XMLHttpRequest  
  var caplistreq = new XMLHttpRequest();
  caplistreq.open("GET",capurl,true);
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

// this method show caption in the textarea and need google caption link
function startpickcaption(Captionlist) {
  var capurl = Captionlist ;
  //XMLHttpRequest 
  var textarea = document.getElementById("captioncont");
  var oldval;
  var xmlcap;
  var tagfilter;
  var tagcount;
  var alltext;
  var captionreq = new XMLHttpRequest();
  captionreq.open("GET",capurl,true)
  captionreq.onreadystatechange = function(){
      
     if(captionreq.readyState == 4 && captionreq.status == 200) {
         
        xmlcap = captionreq.responseXML;
        tagfilter = xmlcap.getElementsByTagName('text');
        tagcount = tagfilter.length;
     
        //console.log(tagcount);
        //console.log(tagfilter);
        
        textarea.value = "" ;
         
        for(var i = 0; i < tagcount ; i++){
            
        alltext = tagfilter[i].textContent;        
     
         oldval =  textarea.value
         textarea.value = oldval +"\n"+ alltext ;
      
       
        }
         
     }
      
  };
  captionreq.send(null);
}

// both linlk process and list view
function bringlist() {
    var processedurl = captionlisturl();
    bringlangcode(processedurl);
}

//this method will take your url and process it for caption veiw
function captionurlprocess(){
//bring video id
var youtubeurl = document.getElementById("basic-url").value;
var lasturl;
var firstcopone = "https://youtu.be";
var firstcoptwo = "youtu.be";
var checkerone = youtubeurl.substr(0,16);
var checkertwo = youtubeurl.substr(0,8); 
var sel = document.getElementById("sel1");
var opt = sel.options[sel.selectedIndex];
var optstr = opt.value;

if (firstcopone == checkerone) {
   lasturl = "https://video.google.com/timedtext?lang=" + optstr +"&v="+ youtubeurl.substr(17);    
} 
else if (firstcoptwo == checkertwo ) {
    lasturl = "https://video.google.com/timedtext?lang=" + optstr +"&v="+ youtubeurl.substr(9);       
} 
else {  
lasturl = "https://video.google.com/timedtext?lang=" + optstr +"&v="+ youtubeurl.split('=')[1];
}

console.log(lasturl);
return lasturl ;
}

// both linlk process and caption view
function viewcaption(){
     var processedlinlk = captionurlprocess(); 
     console.log(processedlinlk);
     startpickcaption(processedlinlk);   
}
