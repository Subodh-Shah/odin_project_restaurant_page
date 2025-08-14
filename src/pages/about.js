const renderAbout = function () {
	const aboutPage = document.createElement('div');
	const aboutContent = document.createElement('div');
	aboutPage.id = 'aboutUs';
	aboutContent.innerText = "ABOUT IN PROGRESS";
	aboutContent.style.height = '80vh';
	aboutContent.style.fontSize = '50px';
	aboutContent.style.display = 'flex';
	aboutContent.style.justifyContent = 'center';
	aboutContent.style.alignItems = 'center';
	aboutPage.appendChild(aboutContent);
	return aboutPage;
};

export { renderAbout };
