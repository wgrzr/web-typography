// Pick h1 tag
const h1 = document.querySelector('h1');

// When window is scrolled, calculate bigger font size
window.addEventListener('scroll', function() {

	const pixels = window.pageYOffset;

	const fontWeight = pixels * 0.4 + 100
	const fontWidth = pixels * 0.2 + 100
	
	
	h1.style.fontVariationSettings = `"wght" ${fontWeight}, "wdth" ${fontWidth}`;
});
