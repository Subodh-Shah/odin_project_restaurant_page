const renderMenu = function() {
	const menu = document.createElement('div');
	menu.id = 'homePage';
	menu.style.height = "20px";	
	menu.style.backgroundColor = 'yellow';
	return menu;
}

export {renderMenu}