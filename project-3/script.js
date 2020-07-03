let font;
let graphic;

function preload() {
	font = loadFont('./.zip/assets/spacegrotesk-medium.otf');
}

function setup() {
	createCanvas(600, 600);

	graphic = createGraphics(500, 500);

	graphic.fill('#ef5236');
	graphic.textFont(font);
	graphic.textSize(136);
	graphic.textAlign(CENTER, CENTER);
	graphic.text('block', width / 2, height / 2);
}

function draw() {
	background('#ecf072');

	let val = sin(frameCount * 0.01) * 400;

	copy(graphic, 0, 0, 500, 500, 0, 0, 250 + val, 500);
	copy(graphic, 0, 0, 500, 500, 250 + val, 0, 250 - val, 500);
}
