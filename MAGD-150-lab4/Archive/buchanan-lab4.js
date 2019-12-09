var x=0;
var y=350;

function setup() {
  // put setup code here
  createCanvas(500, 500);
  background(117, 255, 249, 100);
//loop
for (var x = 0; x <= width; x += 50) {
	fill(0, 255, 76, 170);
	ellipse(x, 480, 25, 25);
	}
}

let value = 0;
function draw() {
// put drawing code here
//animation
ellipse (x , y , 100);
x=x+1;
y=y-1;
fill(0, 255, 76, 170);
ellipse (x, y, 20, 20);
fill(245, 7, 1, 96);
ellipse (x, y, 80, 80, 20, 20);


if(keyIsPressed){
       if(key=='p'){
		x=0;
		y=350;
	   }
	}

fill(255, 228, 68, 100);
triangle(250, 270, 30, 120, 150, 30);
fill(245, 7, 1, 96);
ellipse(95, 135, 40, 40);
ellipse(155, 120, 40, 40);
ellipse(165, 180, 40, 40);
ellipse(210, 220, 30, 30);

//used https://p5js.org/reference/#/p5/mouseIsPressed as a reference
fill(255);
if (mouseIsPressed) {
	fill(245, 7, 1, 96);
	ellipse(300, 370, 25, 25);
	ellipse(390, 390, 25, 25);
	ellipse(340, 380, 25, 25);
	ellipse(350, 420, 25, 25);
	ellipse(300, 410, 25, 25);
	ellipse(280, 325, 25, 25);
	ellipse(320, 340, 25, 25);
	ellipse(370, 350, 25, 25);
	ellipse(255, 360, 25, 25);
	ellipse(265, 400, 25, 25);
	ellipse(265, 435, 25, 25);
	ellipse(310, 450, 25, 25);
	ellipse(315, 300, 25, 25);
	ellipse(230, 405, 25, 25);
	ellipse(240, 320, 25, 25);
	ellipse(280, 290, 25, 25);
	ellipse(360, 310, 25, 25);
	ellipse(225, 360, 25, 25);
	} else {
	fill(255, 228, 68, 100);
	ellipse(310, 370, 200, 200);
	}
	print(mouseIsPressed);

//used https://p5js.org/reference/#/p5/keyIsPressed as a reference
	if (keyIsPressed === true) {
    fill(245, 7, 1, 96);
    ellipse(400, 135, 20, 20); //bottom pep
    ellipse(395, 70, 20, 20); //top pep
    ellipse(430, 100, 20, 20); //middle right pep
    ellipse(365, 105, 20, 20); //middle left pep
    ellipse(397, 100, 20, 20);
  } else {
    fill(255);
  }
  fill(255, 228, 68, 100);
  ellipse(400, 100, 100, 100);



}

	
  





 




