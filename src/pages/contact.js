const renderContact = function () {
	const contactPage = document.createElement('div');
	const contactContent = document.createElement('div');
	contactPage.id = 'homePage';
	contactContent.innerText = "CONTACT IN PROGRESS";
	contactContent.style.height = '80vh';
	contactContent.style.fontSize = '50px';
	contactContent.style.display = 'flex';
	contactContent.style.justifyContent = 'center';
	contactContent.style.alignItems = 'center';
	contactPage.appendChild(contactContent);
	return contactPage;
};

export { renderContact };
