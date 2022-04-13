//songs
song1="";
song2="";
//left wrist 
lwx=0;
lwy=0;
lws = 0;
//right wrist
rwx=0;
rwy=0;
rws=0;
song1_status=0;
song2_status=0;
function preload(){
   song1=loadSound("music.mp3")
   song2=loadSound("music2.mp3")
   // is playing
   song1_status=song1.isPlaying();
   song2_status=song2.isPlaying();
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
	console.log("%crightWristX = " + rwx +" rightWristY = "+ rwy,"font-size: 10px; margin: 30px 0; padding: 5px 20px; color: #fff; background: linear-gradient(0deg, rgba(111,52,180,10) 0%, rgba(223,19,29,11) 50%, rgba(252,176,69,1) 100%);");

	lwx = results[0].pose.leftWrist.x;
	lwy = results[0].pose.leftWrist.y;
	console.log("%cleftWristX = " + lwx +" leftWristY = "+ lwy,"font-size: 10px; margin: 30px 0; padding: 5px 20px; color: #fff; background: linear-gradient(0deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);");
	    
	//scores
	scoreRightWrist =  results[0].pose.keypoints[10].score;
	scoreLeftWrist =  results[0].pose.keypoints[9].score;
    }
    if(scoreLeftWrist > 0.2){
    	fill("#FF0000");
    	stroke("#FF0000");
    	circle(lwx,lwy,20);
	song2.stop();
	if (song1_status != true) {
	   song1.play();
	   document.getElementById("song-name").innerhtml == "Song 1"
	}
	 
    }
}
