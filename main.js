Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality:90,
});
camera=document.getElementById("Camera");
Webcam.attach("#Camera");

function take_snap(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="capture" src="'+data_uri+'">';
});
}
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wZwOUKqat/model.json",modelLoaded);

function modelLoaded(){
console.log("Model is Loaded");
}