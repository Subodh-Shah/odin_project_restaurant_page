import hero from '../assets/img/hero.png';
import '../styles/fonts.css';

const renderHome = function () {
	const homePage = document.createElement('div');
	const heroContainer = document.createElement('div');
	const imgDiv = document.createElement('div');
	const heroContentDiv = document.createElement('div');
	const heroImg = document.createElement('img');
	const heroContent = document.createElement('section');

	homePage.id = 'homePage';
	homePage.style.backgroundColor = 'rgba(0, 0, 0, .9)';
	homePage.style.color = 'white';
	homePage.style.fontFamily = 'Comic Sans MS';

	heroContainer.style.display = 'flex';
	heroContainer.style.gap = '33px';
	heroContentDiv.style.minHeight = '90vh';

	imgDiv.style.padding = '8px';
	imgDiv.style.width = '100%';
	imgDiv.style.borderRadius = '8px';

	heroContentDiv.style.padding = '8px';
	heroContentDiv.style.width = '70%';
	heroContentDiv.style.display = 'flex';
	heroContentDiv.style.flexDirection = 'column';
	heroContentDiv.style.justifyContent = 'center';
	heroContentDiv.style.alignItems = 'center';

	heroImg.src = hero;
	heroImg.style.objectFit = 'contain';
	heroImg.style.maxWidth = '100%';
	heroImg.style.height = 'auto';
	heroImg.alt = 'Hero Image';

	heroContent.style.fontSize = '33px';
	heroContent.style.letterSpacing = '3px';
	heroContent.style.wordSpacing = '6px';
	heroContent.style.fontFamily = 'GreatVibes';
	heroContent.style.color = 'white';

	heroContent.innerHTML =
		'"Experience the perfect blend of flavor and ambiance at our restaurant, where every dish is crafted with passion and served with care. From fresh, locally sourced ingredients to an inviting atmosphere, we promise a dining experience that delights every sense."';

	imgDiv.appendChild(heroImg);
	heroContentDiv.appendChild(heroContent);
	heroContainer.appendChild(imgDiv);
	heroContainer.appendChild(heroContentDiv);

	homePage.appendChild(heroContainer);
	return homePage;
};

export { renderHome };
