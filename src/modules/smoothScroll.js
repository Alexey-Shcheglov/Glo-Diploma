const smoothScroll = () => {
	const currentSection = document.querySelector('.push70');
	const up = document.querySelector('.up');
	const upToTop = document.querySelector('.up_to_top');

	window.addEventListener('scroll', () => {
		const top = document.documentElement.scrollTop;
		if (top < currentSection.offsetTop) {
			up.style.display = 'none';
		} else if (top > currentSection.offsetTop) {
			up.style.display = 'block';
		}
	});
	upToTop.addEventListener('click', (e) => {
		e.preventDefault();
		const idTop = upToTop.getAttribute('href');
		console.log(idTop);

		document.querySelector(idTop).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
};

export default smoothScroll;