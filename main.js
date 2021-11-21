//songs
song1="";
song2="";
//left wrist 
lwx=0;
lwy=0;
//right wrist
rwx=0;
rwy=0;
function preload(){
   song1=loadSound("music.mp3")
   song2=loadSound("music2.mp3")
}
function setup(){
   canvas=createCanvas(600,500);
   canvas.center();
   video=createCapture(VIDEO);
   video.hide();
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses); 
}
function draw(){
    image(video,0,0,600,500);
}
function modelLoaded() {
  console.log('PoseNet has come by taxi');
}
function gotPoses(results){
    if(results.length>0){
        
	rwx = results[0].pose.rightWrist.x;
    rwy = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rwx +" rightWristY = "+ rwy);

	lwx = results[0].pose.leftWrist.x;
	lwy = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + lwx +" leftWristY = "+ lwy);
    }
}
