Webcam.set({
  height: 300,
  width : 300,
  Image_format: 'png',
  png_quality : 90,
  constraints : {
    facingMode : "environment"
  }
});

camera = document.getElementById("camera");
Webcam.attach('#camera');


function takeSnapshot(data_uri){
   Webcam.snap(function (data_uri){
      document.getElementById("result").innerHTML = '<img src="'+ data_uri +'" id="captured_image"/>'; 
   });
}

console.log("ml5 version : " , ml5.version);

classifier = ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded(){
  console.log(modelLoaded);
}

function check(){
  image = document.getElementById("captured_image");
  classifier.classify(image , gotResult);
}

function gotResult(error , results){
  if(error){
    console.log(error);
  }
  else{
    console.log(results);
    document.getElementById("object-name").innerHTML = results[0].label;
  }
}

