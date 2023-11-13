class Notify {
	constructor(container) {
		this.lang = {
			from: '',
		};

		this.container = document.querySelector(container);
		this.items = document.createElement('ul');
		this.items.classList.add('notifications__items');
		this.container.appendChild(this.items);
	}

	create({ head, info, time }) {
		const html = `
						<div class="notifications__item__img">
						<img src="./assets/notification-img.svg" />
						</div>
						<div class="notifications__item__content">
						<span class="notifications__item-info">${head}</span>

						<div class="notifications__item__content__desc">
						${info}
						</div>

						<div class="notifications__item__time">
						${time}
						</div>
						</div>
						<div class="notifications__item__btn">
						<img
							class="notifications__item__btn-close"
							src="./assets/notifications-close.svg"
							alt="" />
						<div class="notifications__item__check">
							<img src="./assets/check.svg" alt="" />
						</div>
						</div>
                `;
		const item = document.createElement('li');
		item.classList.add('notifications__item', 'showNoty');
		item.innerHTML = html;
		item.addEventListener('click', (e) => e.currentTarget.remove());
		return item;
	}
	send(obj) {
		const item = this.create(obj);
		this.items.prepend(item);
		return item;
	}

	hide(element) {
		setTimeout(() => {
			element.classList.remove('showNoty');
			element.classList.add('hiddenNoty');
			setTimeout(() => {
				element.remove();
			}, 1500);
		}, 7500);
	}
}

const data = [
	{
		head: 'Bitte beeilen Sie sich!',
		info: 'Rimowa-Koffer - Lagerbestand beträgt 25 Einheiten.',
		time: 'Die Teilnahme an der Aktion ist 120 Sekunden lang möglich.',
	},
	{
		head: 'Bitte beeilen Sie sich!',
		info: 'Rimowa-Koffer - Lagerbestand beträgt 24 Einheiten.',
		time: 'Die Teilnahme an der Aktion ist 120 Sekunden lang möglich.',
	},
];

const notify = new Notify('.notifications');
const timer = (ms) => {
	return new Promise((res, rej) => {
		setTimeout(() => res(), ms);
	});
};

const random = (min, max) => {
	return Math.round(min + Math.random() * (max - min));
};

const timeoutMs = 14000;

data.forEach((el, i) => {
	timer(i ? random(40000, 100000) : timeoutMs).then(() => {
		const item = notify.send(el);
		notify.hide(item);
	});
});
