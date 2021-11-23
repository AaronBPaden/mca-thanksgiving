"use strict";
let menuItems = Array.from(document.querySelectorAll('.item-card'));

/* Return a list of active menu items. */
const getActive = () => menuItems.filter(e => e.classList.contains('active'));

menuItems.forEach((e) => {
	e.addEventListener('click', (event) => {
		if ((getActive().length < 4 || e.classList.contains('active'))
		&& document.getElementById('menuContainer').classList.contains('hidden') === false) {
			e.classList.toggle('active');
		}
	});
});

document.getElementById("orderButton").addEventListener('click', (event) => {
	document.getElementById('menuContainer').classList.toggle('hidden');
	let orderList = document.getElementById('orderList');
	getActive().forEach((e) => {
		let li = document.createElement('li');
		li.classList.add('menu-list-item');
		li.append(e);
		orderList.append(li);
		e.classList.toggle('active');
	});
	document.getElementById('orderContainer').classList.toggle('hidden');
});
