const renderMenu = function () {
	const menuPage = document.createElement('div');
	const menuContent = document.createElement('div');
	menuContent.innerText = "MENU IN PROGRESS";
	menuContent.style.height = '80vh';
	menuContent.style.fontSize = '50px';
	menuContent.style.display = 'flex';
	menuContent.style.justifyContent = 'center';
	menuContent.style.alignItems = 'center';
	menuPage.appendChild(menuContent);
	return menuPage;
};

export { renderMenu };
