const renderHome = function() {
	const home = document.createElement('div');
	const hero = document.createElement('div');
	const heroImg = document.createElement('img');
	const heroContent = document.createElement('div');
	
	home.id = 'homePage';
	home.style.height = "fit-content";
	home.style.backgroundColor = 'gray';
	
	hero.style.display = "flex";
	hero.style.justifyContent = "center";
	hero.style.height = "80vh";
	
	heroImg.width = "100%";
	heroImg.src  = "./img/hero.webp";
	heroImg.alt = "Hero Image";
	heroImg.style.border = "2px solid black";
	
	heroContent.style.width = "100%";
	hero.appendChild(heroImg);
	hero.appendChild(heroContent);
	home.appendChild(hero);
	return home;
}

export {renderHome}