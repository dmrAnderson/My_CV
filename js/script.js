let hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
let nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburger_icon.addEventListener('click', () => {
	nav_list.classList.toggle('open');
	hamburger_icon.classList.toggle('active');
});
