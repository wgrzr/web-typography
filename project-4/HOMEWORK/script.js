let font;
let graphic;
let graphic2;

function preload() {
	font = loadFont('./.zip/assets/spacegrotesk-medium.otf');
}

function setup() {
	createCanvas(600, 600);

	graphic = createGraphics(500, 500);

	graphic.fill('#ef5236');
	graphic.textFont(font);
	graphic.textSize(400);
	graphic.textAlign(CENTER, CENTER);
	graphic.text('01', width / 2, height / 2);

	graphic2 = createGraphics(500, 500);

	graphic2.fill('#ef5236');
	graphic2.textFont(font);
	graphic2.textSize(400);
	graphic2.textAlign(CENTER, CENTER);
	graphic2.text('02', width / 2, height / 2);
}

function draw() {
	background('#ecf072');

	let val = sin(frameCount * 0.01) * 250;
	const tileSize = 72;

	image(graphic, 0, 0, 250 + val, 500, 0, 0, 250 + val, 500);
	image(graphic2, 250 + val, 0, 250 - val, 500, 250 + val, 0, 250 - val, 500);

	for (let x = 0; x < 12; x = x + 1) {
		for (let y = 0; y < 12; y = y + 1) {
			const distortion = sin(frameCount * 0.05 + x * 0.25 + y * 0.55) * 50;

			// Source
			sx = x * tileSize;
			sy = y * tileSize + distortion;
			sw = tileSize;
			sh = tileSize;

			// Destination
			dx = x * tileSize + distortion;
			dy = y * tileSize;
			dw = tileSize;
			dh = tileSize;

			// Distorted Copy
			image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
			image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
		}
	}
}
