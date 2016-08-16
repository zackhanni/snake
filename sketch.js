var snake;
var scl = 20;
var food;

function setup() {
	createCanvas(600,600);
	snake = new Snake();
	frameRate(12);
	foodLocation();
}

function foodLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

function draw() {
  background(100);
  snake.update();
  snake.show();

  if (snake.eat(food)) {
  	foodLocation();
  }

  fill(64,224,208);
  rect(food.x, food.y, scl, scl);
}
//arrow controls
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
//WASD controls
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
	this.total = 0;
	this.tail = [];

//did snake eat food?
	this.eat = function(pos) {
		var direction = dist(this.x, this.y, pos.x, pos.y);
		if (direction < 2) {
			this.total++;
			return true;
		}
		else {
			return false;
		}
	}

	this.dir = function(x,y) {
		this.xspeed = x;
		this.yspeed = y;
	}

	this.update = function() {
		if (this.total === this.tail.length) {
			for (var i=0; i<this.tail.length-1; i++){
				this.tail[i] = this.tail[i+1];
			}
		}
		this.tail[this.total-1] = createVector(this.x,this.y);

		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;

		this.x = constrain(this.x, 0, width-scl);
		this.y = constrain(this.y, 0, height-scl);
	}

	this.show = function() {
		fill(255);

		for (var i=0; i<this.tail.length; i++){
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
		rect(this.x, this.y, scl, scl);
	}
}

