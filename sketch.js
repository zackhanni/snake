function setup() {
	createCanvas(600,600);
}

function draw() {
  background(100);
}

function Snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;

	this.update = function() {
		this.x = this.y + this.xspeed;
		this.y = this.x + this.yspeed;
	}

	this.show = function() {
		fill(255);
		rect(this.x, this.y, 10, 10);
	}
}

