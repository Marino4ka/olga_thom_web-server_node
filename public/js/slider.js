var slider = document.getElementById('slider');
var position = 0;

function goNext() {
	if (position != -270)
		position = position - 270;
	else
		position = 0;

	slider.style.left = position + "px";
}

function goBack() {
	if (position != 0)
		position = position + 270;
	else
		position = -270;

	slider.style.left = position + "px";	
}