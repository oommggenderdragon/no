

song_1 ="";
song_2 = "";
leftWristX = "";
rightWristY="";
leftWristY= "";
rightWristX="";
scoreRightWrist="";
scoreLeftWrist="";
function preload(){
song_1 = loadSound("dead.mp3");
song_2 = loadSound("music.mp3");
}


function setup() {
	canvas =  createCanvas(600, 400);
	canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
	console.log("poseNet is initialized");
	}
function draw(){


		image(video,0,0,600,400);
		fill("#ff0000");
		stroke("#ff0000");
		if(scoreRightWrist > 0.2){



			circle(rightWristX,rightWristY,20);


if(rightWristX > 0 && rightWristY <= 400){

	document.getElementById("song_2");
	

}
else if(leftWristY > 0 && leftWristY <= 400){

	document.getElementById("song_1");
}
}

}


	


function play(){
if(leftWristY < 0 && leftWristY > 400 ){
song_1.play();

 if(rightWristY <0 && rightWristY >400){
song_2.play();

}}
}

	function gotPoses(results){
		if( results.length > 0){
			console.log(results);
			leftWristX = results[0].pose.leftWrist.x;
			leftWristY = results[0].pose.leftWrist.y;
			console.log(leftWristX,leftWristY);
		
			rightWristX = results[0].pose.rightWrist.x;
			rightWristY = results[0].pose.rightWrist.y;
			console.log(rightWristX,rightWristY);
		} 
		
		}
function gotPoses(){
if(results.length > 0){
console.log(results);
scoreRightWrist = results[0].pose.keypoints[10].score;
	scoreLeftWrist = results[0].pose.keypoints[9].score;
	console.log(scoreLeftWrist);
	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log(leftWristX,leftWristY);
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log(rightWristX,rightWristY);
console.log(scoreRightWrist);
} 
}


