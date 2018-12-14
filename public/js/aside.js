var aside = document.getElementById('aside')
var aside_backdrop = document.getElementById('aside-backdrop');

function toggleAside(action) {
	if(action == 'show') {
		aside.style.right = '0px';
		aside_backdrop.style.display = 'block';
	} else {
		aside.style.right = '-270px';
		aside_backdrop.style.display = 'none';
	}
}
