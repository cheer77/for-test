document.addEventListener('DOMContentLoaded', function () {
	const question = document.querySelector('#q2');
	const boxesWrapper = document.querySelector('#boxes');
	const okModalButton = document.querySelector('.p_modal_button');

	const giftImg = document.querySelectorAll('.try__gift-img');
	const giftImgModal = document.querySelector('.gift-img-modal');
	const giftImgWin = document.querySelector('.img_gift');

	const randomNumber = Math.floor(Math.random() * 5) + 1;

	// Вставляем сгенерированное число в элемент с id "randomNumber"
	document.getElementById('randomNumber').textContent = randomNumber;

	function displayGift(event) {
		let answer = event.target.dataset.answer;
		const images = {
			black: 'black.png',
			blue: 'blue.png',
			white: 'white.png',
		};
		let imgPath = `./assets/${images[answer]}`;
		let imgItems = Object.values(giftImg);

		imgItems.map((item) => {
			item.src = imgPath;
		});

		giftImgModal.src = imgPath;
		giftImgWin.src = imgPath;
		// return imgPath;
	}
	question.addEventListener('click', (e) => displayGift(e));

	function hideBoxes() {
		boxesWrapper.style.display = 'none';
	}

	const showBoxes = () => {
		boxesWrapper.style.display = 'block';
	};

	question.addEventListener('click', hideBoxes);
	okModalButton.addEventListener('click', showBoxes);

	document.querySelectorAll('.btn').forEach((btn) => {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
		});
	});

	// Swiper slider +
	const swiperMain = new Swiper('.main-s', {
		slidesPerView: 'auto',
		centeredSlides: true,
		spaceBetween: 10,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	// инициализируем дополнительные элементы для мини-фото и кнопок
	const miniSlides = document.querySelectorAll('.thumbnails__slide');

	// Функция для переключения слайдов
	function goToSlide(index) {
		swiperMain.slideTo(index);

		miniSlides.forEach((miniSlide, miniIndex) => {
			miniSlide.classList.toggle('active', miniIndex === index);
		});
	}

	// Обработчики клика на каждую мини-фото
	miniSlides.forEach((miniSlide, index) => {
		miniSlide.addEventListener('click', () => {
			goToSlide(index); // При клике на мини-фото переходим к соответствующему слайду
		});
		miniSlide.addEventListener('mouseover', () => {
			goToSlide(index); // При ховере на мини-фото переходим к соответствующему слайду
		});
	});

	// Ищем активный слайд в мини-слайдере по классу 'active'
	const activeSlide = document.querySelector('.active');

	// Определяем индекс активного слайда и передаем его в функцию goToSlide
	const activeSlideIndex = Array.from(miniSlides).indexOf(activeSlide);
	goToSlide(activeSlideIndex);

	// Обработчик события slideChange на swiper
	swiperMain.on('slideChange', () => {
		// Добавляем класс active к активному мини-слайду при перелистывании слайдера кнопками
		miniSlides.forEach((miniSlide, index) => {
			miniSlide.classList.toggle('active', index === swiperMain.activeIndex);
		});
	});
});
