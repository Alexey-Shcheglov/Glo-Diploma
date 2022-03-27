const serviceSlider = () => {
	const serviceItem = document.querySelectorAll('.services-item');
	const arrowLeft = document.querySelector('.arrow-left');
	const arrowRight = document.querySelector('.arrow-right');
	
	let position = 3;
	let start = 0;

	serviceItem.forEach(item => {
		if (start < position) {
			start++;
		} else {
			item.style.display = 'none';
		}
	});
	start = 0; 
	if (start === 0) {
		arrowLeft.style.opacity = 0.3;
	}
	arrowLeft.addEventListener('click', () => {
		if (start > 0) {
			start = start - 1;
			position = position - 1;
			serviceItem[start].style.display = 'block';
			serviceItem[position].style.display = 'none';
			arrowRight.style.opacity = 1;
			if (start === 0) {
				arrowLeft.style.opacity = 0.3;
			}
		}
	});
	arrowRight.addEventListener('click', () => {
		if (position < serviceItem.length) {
			serviceItem[start++].style.display = 'none';
			serviceItem[position++].style.display = 'block';
			if (position === serviceItem.length) {
				arrowRight.style.opacity = 0.3;
			}
			arrowLeft.style.opacity = 1;
		}
	});
};

export default serviceSlider;