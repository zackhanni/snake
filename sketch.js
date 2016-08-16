var snake;
var scl = 20;

function setup() {
	createCanvas(600,600);
	snake = new Snake();
	frameRate(12);
}

function draw() {
  background(100);
  snake.update();
  snake.show();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		snake.dir(0,-1);
	}
	else if (keyCode === DOWN_ARROW) {
		snake.dir(0,1);
	}
	else if (keyCode === LEFT_ARROW) {
		snake.dir(-1,0);
	}
	else if (keyCode === RIGHT_ARROW) {
		snake.dir(1,0);
	}
}

function keyTyped() {
	if (key === "w") {
		snake.dir(0,-1);
	}
	else if (key === "s") {
		snake.dir(0,1);
	}
	else if (key === "a") {
		snake.dir(-1,0);
	}
	else if (key === "d") {
		snake.dir(1,0);
	}

}

function Snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;

	this.dir = function(x,y) {
		this.xspeed = x;
		this.yspeed = y;
	}

	this.update = function() {
		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;

		this.x = constrain(this.x, 0, width-scl);
		this.y = constrain(this.y, 0, height-scl);
	}

	this.show = function() {
		fill(255);
		rect(this.x, this.y, scl, scl);
	}
}

