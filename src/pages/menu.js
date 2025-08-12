const renderMenu = function () {
	const menuPage = document.createElement('div');
	const menuContainer = document.createElement('div');
	const menuSlider = document.createElement('div');
	const dishWrapper = document.createElement('div');
	const dishImgBox = document.createElement('div');
	const dishImg = document.createElement('img');
	const dishContentBox = document.createElement('div');
	const dishName = document.createElement('label');
	const dishPrice = document.createElement('span');
	const dishDetail = document.createElement('p');

	menuPage.id = 'homePage';
	menuPage.style.height = '20px';
	menuPage.style.backgroundColor = 'yellow';

	dishWrapper.style.display = 'flex';
	dishWrapper.style.flexDirection = 'row';
	dishWrapper.style.width = 'fit-content';

	dishContentBox.appendChild(dishName);
	dishContentBox.appendChild(dishPrice);
	dishContentBox.appendChild(dishDetail);

	dishWrapper.appendChild(dishContentBox);
	dishWrapper.appendChild(dishImgBox);

	menuSlider.appendChild(dishWrapper);
	menuContainer.appendChild(menuSlider);
	menuPage.appendChild(menuContainer);
	return menuPage;
};

export { renderMenu };
