const headerContainer = document.querySelector(".header-container");
const header = document.querySelector("header");

const menuIcon = document.querySelector(".menu-icon");
const mobileMenuItems = document.querySelector(".mobile-menu-items");

const mobileSearchIcon = document.querySelector(".mobile-header .search-icon");
const searchBoxMobile = document.querySelector(".searchbox-mobile");

const timesIcon = document.querySelector(".search-icon .fa-times");
const searchIcon = document.querySelector(".search-icon .fa-search");

const searchIconDesktop = document.querySelector(".social .search-icon-desktop");
const searchBoxDesktop = document.querySelector(".searchbox-desktop");

// Scroll

window.addEventListener("scroll", function() {

	if (window.pageYOffset > 300) {
		header.classList.add("scrolled");
		headerContainer.classList.add("fixed");
	} else {
		header.classList.remove("scrolled");
		headerContainer.classList.remove("fixed");
	}
})

// Desktop Search

searchIconDesktop.addEventListener("click", function() {
	searchBoxDesktop.classList.toggle("active");
})

// Mobile Menu 

menuIcon.addEventListener("click", function() {
	mobileMenuItems.classList.toggle("active");
})

// Mobile Search

mobileSearchIcon.addEventListener("click", function() {
	searchBoxMobile.classList.toggle("active");

	if (searchBoxMobile.classList.contains("active")) {
		searchIcon.style.display = "none";
		timesIcon.style.display = "block";
	} else {
		searchIcon.style.display = "block";
		timesIcon.style.display = "none";
	}
})

function DarkMode() {
	var element = document.body;
	element.classList.toggle("dark-mode");
	localStorage.setItem('toggled', 'yes');
}

document.getElementById('Search').onsubmit = function() {
	window.location = 'http://www.google.com/search?q=site:explosion-scratch.github.io ' + document.getElementById('Text_Search').value;
	return false;
}
document.getElementById('Mobile_Search').onsubmit = function() {
	window.location = 'http://www.google.com/search?q=site:explosion-scratch.github.io ' + document.getElementById('Mobile_Text_Search').value;
	return false;
}

function menu(x) {
	x.classList.toggle("menu");
}
$(document).ready(function() {
	$('.page-content a').attr('target', '_blank');
	$('.page-content h1, h2').append('<hr>');
	$('blockquote').html('<i>' + $('blockquote').html() + '</i>');
});

