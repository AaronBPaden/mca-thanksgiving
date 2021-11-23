"use strict";
let menuItems = Array.from(document.querySelectorAll('.item-card'));
const getActive = () => menuItems.filter(e => e.classList.contains('active'));

menuItems.forEach((e) => {
	e.addEventListener('click', (event) => {
		if (getActive().length < 4 || e.classList.contains('active')) {
			e.classList.toggle('active');
		}
	});
});

document.getElementById("orderButton").addEventListener('click', (e) => {
	document.getElementById
	console.log(menuItems.filter(i => i.classList.contains('active')));
});
