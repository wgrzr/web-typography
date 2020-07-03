let font;
let graphic;

function preload() {
	font = loadFont('./assets/spacegrotesk-medium.otf');
}

function setup() {
	createCanvas(600, 600);

	graphic = createGraphics(600, 600);
	graphic.fill('#333333');
	graphic.textFont(font);
	graphic.textSize(660);
	graphic.textAlign(CENTER, CENTER);
	graphic.text('G', 300, 300);
}

function draw() {
	background('#f3c043');

	const tileSize = 50;

	// Copy x times
	for (let x = 0; x < 12; x = x + 1) {
		for (let y = 0; y < 12; y = y + 1) {

            const distortion = sin(frameCount * 0.05 + x * 0.2 + y * 0.25) * 50
            
            // source
			const sx = x * tileSize;
			const sy = y * tileSize + distortion;
			const sw = tileSize;
			const sh = tileSize;

			//destination
			const dx = x * tileSize;
			const dy = y * tileSize;
			const dw = tileSize;
			const dh = tileSize;

			image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
		}
	}
}
