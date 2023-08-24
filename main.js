var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition;

function start(){
   
    Recognition.start();
}

Recognition.onresult = function (event){

    console.log(event);
    var Content = event.results[0][0].transcript.toLowerCase();
    console.log(Content);
    if(Content == 'selfie')
    
    speak();
 }

 function speak(){
    var synth = window.speechSynthesis;
    var speakdata = "tirando sua selfie em 5 segundos"
    var utterthis = new SpeechSynthesisUtterance(speakdata);

    synth.speak(utterthis);
    Webcam.attach(camera)
   setTimeout(function(){ 
   imgId = "selfie1";
   takeSelfie();
   speakdata = "tirando sua foto em 10 segundos"
   var utterthis = new SpeechSynthesisUtterance(speakdata);
   synth.speak(utterthis);
   },5000); 

   setTimeout(function(){ 
      imgId = "selfie2";
      takeSelfie();
      speakdata = "tirando sua foto em 10 segundos"
      var utterthis = new SpeechSynthesisUtterance(speakdata);
      synth.speak(utterthis);
      },10000); 

      setTimeout(function(){ 
         imgId = "selfie3";
         takeSelfie();
         var utterthis = new SpeechSynthesisUtterance(speakdata);
         synth.speak(utterthis);
         },15000); 
   
 }
camera = document.getElementById("camera");
 Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });

 function takeSelfie(){ 

   Webcam.snap(function(data_uri)
   { 
      if(imgId == "selfie1" ){ 
         document.getElementById("result1").innerHTML = '<img id="selfie1" src="' + data_uri +'"/>';
      }

      if(imgId == "selfie2" ){ 
         document.getElementById("result2").innerHTML = '<img id="selfie2" src="' + data_uri +'"/>';
      }

      if(imgId == "selfie3" ){ 
         document.getElementById("result3").innerHTML = '<img id="selfie3" src="' + data_uri +'"/>';
      }
   })
 }

 