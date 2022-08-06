'use strict';
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const subNav = document.querySelector('.observe');
const navLinks = document.querySelector('.nav__links');
const navLink = document.querySelectorAll('.nav__link');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const open = document.querySelector('.open');

//IMPLEMENTING SMOOTH SCROLLING
navLinks.addEventListener('click', function (e) {
	e.preventDefault();

	//MATCHING STRATEGY

	if (e.target.classList.contains('nav__link')) {
		// console.log(e.target);

		const id = e.target.getAttribute('href');
		// console.log(id);
		document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
	}
});

//ADD ACTIVE STATE (UNDERLINE) TO LINK CLICKED
const activateUnderline = function (slide) {
	document.querySelectorAll('.link').forEach((line) => {
		line.classList.remove('active');
	});

	document
		.querySelector(`.link[data-slide= "${slide}"]`)

		.classList.add('active');
};
navLink.forEach((l) => {
	l.addEventListener('click', function (e) {
		const currentLink = e.target.dataset.slide;

		activateUnderline(currentLink);
	});
});

//IMPLEMENTING STICKY HEADER
const navHeight = nav.getBoundingClientRect().height;
const navSticky = function (entries) {
	const [entry] = entries;
	if (!entry.isIntersecting) {
		nav.classList.add('sticky');
	} else {
		nav.classList.remove('sticky');
	}
};
const headerObserver = new IntersectionObserver(navSticky, {
	root: header,
	threshold: 0.1,
	rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

/*MODAL WINDOW*/

const openModal = function (e) {
	e.preventDefault();
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
	document.body.classList.add('body');
};

const closeModal = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
	document.body.classList.remove('body');
};
open.addEventListener('click', openModal);

document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});
const callback = (entries, observer) => {
	entries.forEach((entry) => {
		const id = entry.target.id;
		const el = document.body.querySelector('[href="#' + id + '"]');
		if (entry.isIntersecting) {
			el.classList.add('active');
		} else {
			el.classList.remove('active');
		}
	});
};
const sections = document.querySelectorAll('.section');
const options = {
	threshold: 0.33,
};
const observer = new IntersectionObserver(callback, options);
sections.forEach((section) => {
	observer.observe(section);
});
