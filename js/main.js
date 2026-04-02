const menu = document.getElementById('hamburger');
const phone = document.getElementById('mobileMenu');
const close = document.getElementById('close');
const body = document.querySelector('body');

const BREAKPOINTS = 650;

function openMenu() {
	phone.classList.add('active');
	menu.classList.add('hidden');
	close.classList.add('active');
	body.style.overflowY = 'hidden';
}

function closeMenu() {
	phone.classList.remove('active');
	menu.classList.remove('hidden');
	close.classList.remove('active');
	body.style.overflowY = 'auto';
}

// MENU CLICK
menu.addEventListener('click', () => {
	openMenu();
});

close.addEventListener('click', () => {
	closeMenu();
});

// 650 dan oshib ketganda menuni afto xolatida yopish
window.addEventListener('resize', () => {
	console.log(window.innerWidth);
	if (window.innerWidth > BREAKPOINTS) {
		closeMenu();
	}
});
