var visible = document.querySelector('.fixed');
var header = document.querySelector(".nav");
window.addEventListener("scroll", function () {
	header.classList.toggle("stickey", window.scrollY > 50);
	visible.classList.toggle("visible", window.scrollY > 50);
});
// <owl carousel

$('.testimonials-slide .owl-carousel').owlCarousel({
	loop: true,
	margin: 20,
	nav: true,
	// autoplay:true,
	autoplayTimeout: 5000,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 1
		}
	}
})
$('.services .owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 3
		},
		1000: {
			items: 5
		}
	}
})

let h1 = document.querySelector('.h1');
let h2 = document.querySelector('.h2');
let h3 = document.querySelector('.h3');
const i1 = document.querySelector('.i1');
const i2 = document.querySelector('.i2');
const i3 = document.querySelector('.i3');
i1.addEventListener('click', () => {
	h1.classList.toggle('block0');
});
i2.addEventListener('click', () => {
	h2.classList.toggle('block0');
});
i3.addEventListener('click', () => {
	h3.classList.toggle('block0');
})

const hide = document.querySelector('.btn-cont button');
const myCollection = document.getElementsByClassName('nav-hide');
hide.addEventListener('click', () => {
	for (let i = 0; i < myCollection.length; i++) {
		myCollection[i].classList.toggle('nav-hidden');
	}
})

var radio1 = document.getElementById('inp1');
var radio2 = document.getElementById('inp2');
radio1.addEventListener('click', () => {
	if (radio1.checked) {
		document.querySelector('.sided').style.transform = 'translateX(110%)';
		document.querySelector('.sided0').style.transform = 'translateX(0%)';
	}
});
radio2.addEventListener('click', () => {
	if (radio2.checked) {
		document.querySelector('.sided').style.transform = 'translateX(0%)';
		document.querySelector('.sided0').style.transform = 'translateX(110%)';
	}
});
visible.addEventListener('click', ()=>{
	window.scrollTo(0,0);
})
const preloader = document.querySelector(".preloader");
setTimeout(()=>{
preloader.style.opacity = "0";
preloader.style.visibility="hidden";
}, 2000);

const bars = document.querySelector('#bars');
bars.addEventListener('click', ()=>{
	document.querySelector('.nav ul').classList.toggle('block');
});