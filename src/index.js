import './style.css'
import { renderHome } from './pages/home.js'
import { renderMenu } from './pages/menu.js'
import { renderContact } from './pages/contact.js'
import { renderAbout } from './pages/about.js'

console.log('Restaurant page loaded!');

const pageMainContent = document.getElementById('content');

const loadPage = async function () {
	const home = await renderHome();
	const about = await renderAbout();
	const menu = await renderMenu();
	const contact = await renderContact();
	
	window.addEventListener('load', () => {
		pageMainContent.appendChild(home);
	});
	
	const pageBtns = document.querySelectorAll('Button');
	for(const btn of pageBtns) {
		btn.addEventListener('click', () => {
			if (btn.innerHTML === "HOME") {
				pageMainContent.innerHTML = '';
				pageMainContent.appendChild(home);
			}
			else if (btn.innerHTML === "MENU") {
				pageMainContent.innerHTML = '';
				pageMainContent.appendChild(menu);
			}
			else if (btn.innerHTML === "ABOUT") {
				pageMainContent.innerHTML = '';
				pageMainContent.appendChild(about);
			}
			else if (btn.innerHTML === "CONTACT") {
				pageMainContent.innerHTML = '';
				pageMainContent.appendChild(contact);
			}
		});
	}
}	

loadPage();