const menu = () => {
	const toggleMenu = (e) => {
		if (e.target.closest('.top-menu')) {
			if (e.target.matches('ul>li>a')) {
				e.preventDefault();
				const href = e.target.getAttribute('href');
				document.querySelector(href).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		}
	};
	document.addEventListener("click", (e) => toggleMenu(e));
};

export default menu;