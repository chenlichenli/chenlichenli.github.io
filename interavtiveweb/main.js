
var myFont;
var circles = [];
var d = [] ;
var x = 0
var y = 0
var change = 4
var minX = 0
var maxX = window.innerHeight
var song = [] ;



function preload(){
	song[0] = loadSound('assets/yes.mp3')
  song[1] = loadSound('assets/yes1.wav')
  song[2] = loadSound('assets/noooh.wav')
  song[3] = loadSound('assets/clap.wav')
  song[4] = loadSound('assets/merlin-monro.wav')
  song[5] = loadSound('assets/hola_pilar.wav')

}



function setup(){
  // for(var i = 0 ; i < 6 ; i++) {
	 //  song[i] = loadSound('../assets/yes'+ i + '.mp3');
  // }

  createCanvas(window.innerWidth, window.innerHeight);
  

  var x1 = [width/2, width/2+200,width/2-200,width/2,width/2 -200,width/2+200];
  var y1 = [height/2,height/2,height/2,height/2-200,height/2-200,height/2-200];
  

  for (var i = 0; i < 6; i++){
  	circles[i] = new bigone(x1[i],y1[i],200);
  }

  e1 = new bigone;
  
  for (var i = 0 ; i < 6 ; i++) {
    d[i] = 0 ;
  }

//   var beat = [];
//   beat.setVolume(0.1);
//   beat.play();
}

function draw() {

  background(255);
  noStroke();
  // console.log(mouseX) ;

  for (var i = 0; i<6; i++){
  	circles[i].drawellipse();
  // 	console.log(circles[i].x) ;
  	d[i] = dist(mouseX, mouseY, circles[i].x, circles[i].y);
  // 	console.log(d) ;
  	// if(mouseX >= circles[i].x - 200)&&
  	// 	(mouseX <= circle[i].x + 200)&&
  	// (mouseY >= circle[i].y +200)&&
  	// (mouseY <= circle[i] - 200)

  }


	

  // e1.drawellipse(,50);

  // fill(0,153,153);
  
  // ellipse(width/2 + x*2, height/2, 180, 180);
  // fill(127,255,212);
  // ellipse(width/3 + x*0.8, height/3, 140, 140);
  // fill(0,0,255);
  // ellipse(20 + x*3, height/3.5, 160, 160);
  // fill(51,255,153);
  // ellipse(width/4 + x*2, height/4, 120, 120);
  // fill(233,150,122);
  // ellipse(30 + x, 500, 100, 100);
  // fill(127,0,255);
  // ellipse(window.innerWidth - x*0.5, 200, 80, 80);
  // fill(128, 128, 0);
  // ellipse(window.innerWidth -x*2, 500, 120, 120);
  // fill(255,153,51)
  // ellipse(window.innerWidth -x, 300, 150,150);
  // fill(255,255,0)
  // ellipse(5 + x, 60, 70,70);
  // fill(255,20,147)
  // ellipse(window.innerWidth -x*0.8, 300, 105,105);


	fill(255);
	// textFont(myFont);
	textSize(30);
	textAlign(CENTER);
    text("EMOTION", width/2, height/2);
    textAlign(CENTER);
	text("FASHION", width/2 + 200, height/2);
	textAlign(CENTER);
	text("MUSIC", width/2 - 200, height/2);
	textAlign(CENTER);
	text("SEMIOTICS", width/2, height/2 - 200);
	textAlign(CENTER);
	text("HEALTH", width/2 + 200, height/2 - 200);
	textAlign(CENTER);
	text("AI", width/2 - 200, height/2 - 200);


	

// x += change;
//   y += change;
//   if(x > maxX || x < 0){
//     change *= -1
//   }

  
 }


function mousePressed() {

// var d = dist(mouseX, mouseY, this.x, this.y);
// console.log(d) ;
//    console.log("mouse x is " + mouseX) ;
//    console.log("circle position is" + this.x) ;
 for(var i = 0 ; i < 6 ; i++) {
  if (d[i] < 100){ 
    song[i].play() ;
    console.log("this is running") ;
  }else{
    song[i].stop();
  }
 }
}

function bigone(c,l,r){
	
	this.x = c;
	this.y = l;
	this.r = r;


	this.drawellipse = function(){
		noStroke();
		fill(127, 0, 255);
		ellipse(this.x,this.y,this.r,this.r);
	}


	this.click = function(){
		var d =dist(mouseX, mouseY, this.x, this.y);

		if(d < 100){
 	song.play()
 
  		}else{
  			song.stop();
  			}
		}

	}






// var x = 0
// var y = 0
// var change = 0.2
// var minX = -15
// var maxX = 23
// function setup(){

//   createCanvas(window.innerWidth, window.innerHeight);
 
// }

// function draw() {
//   background(255)
//   noStroke()
  
  


//   fill(0,255,0)
//   ellipse(400, 100, 200+x, 200+y)
//   fill(0,0,255)
//   ellipse(600, 450, 200+x, 200+y)
//   fill(255,0,0)
//   ellipse(900, 400, 200+x, 200+y)
//   fill(255,255,0)
//   ellipse(200, 250, 200+x, 200+y)
//   fill(0,255,255)
//   ellipse(1200, 300, 200+x, 200+y)
//   fill(255,0,255)
//   ellipse(800, 200, 200+x, 200+y)
//   fill(0)
//   rect(mouseX, mouseY, 30, 30)
//   x += change
//   y += change
//   if(x > maxX || x < minX){
//     change *= -1
//   }
// }

// function mouseClicked(){
  	

// 	// if(){

// 	// }else if(){

// 	// }else if(){

// 	// }


// }

