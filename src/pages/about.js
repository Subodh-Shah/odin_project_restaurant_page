const renderAbout = function() {
	const about = document.createElement('div');
	about.id = 'aboutUs';
	about.style.height = "20px";
	about.style.backgroundColor = 'blue';
	return about;
}

export {renderAbout}