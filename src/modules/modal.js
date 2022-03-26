const modal = () => {

	const modalCallback = document.querySelector('.modal-callback');
	const modalOverlay = document.querySelector('.modal-overlay');

	const toggleModal = (e) => {
		e.preventDefault();
		if (e.target.closest('.callback-btn') || e.target.closest('.button-services')) {
			
			modalCallback.style.display = 'block';
			modalOverlay.style.display = 'block';
		}
		if (e.target.closest('.modal-close') || e.target.closest('.modal-overlay')) {
			modalCallback.style.display = 'none';
			modalOverlay.style.display = 'none';
		}
	};
	document.addEventListener('click', (e) => toggleModal(e));
};

export default modal;